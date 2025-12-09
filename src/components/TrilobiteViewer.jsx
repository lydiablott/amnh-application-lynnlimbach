// src/components/TrilobiteViewer.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";

export default function TrilobiteViewer() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Canvas aufräumen
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // ===== Szene, Kamera, Renderer =====
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    // ===== Licht =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(5, 5, -10);
    scene.add(ambientLight, dirLight);

    // ===== HDRI Umgebung =====
    new EXRLoader().load("/assets/hall_of_mammals_4k.exr", (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = tex;
      scene.background = tex;
    });

    // ===== Controls =====
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableDamping = true;
    controls.dampingFactor = 0.04;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;

    controls.target.set(0, 0, 0);
    controls.update();

    // ===== Modell =====
    const loader = new GLTFLoader();
    loader.load(
      "/assets/AMNHbackup.glb",
      (gltf) => {
        const trilobite = gltf.scene;
        scene.add(trilobite);

        trilobite.position.set(0, 3.6, 0);
        trilobite.scale.set(0.22, 0.22, 0.22);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // ===== Animation =====
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // ===== Resize =====
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        borderRadius: "12px",
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
        boxShadow: "0 0 40px rgba(0,0,0,0.5)",
      }}
    />
  );
}
