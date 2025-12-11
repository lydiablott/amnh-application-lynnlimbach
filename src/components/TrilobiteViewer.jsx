import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";

export default function TrilobiteViewer() {
  const mountRef = useRef(null);

  const MODEL_URL = import.meta.env.BASE_URL + "assets/Trilobite.glb";
  const HDRI_URL = import.meta.env.BASE_URL + "assets/hall_of_mammals_4k.exr";

  useEffect(() => {
    if (!mountRef.current) return;

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, -13);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);

    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.domElement.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      console.warn("WebGL context lost – viewer disabled to protect GPU.");
    });

    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 5, 10);
    scene.add(ambientLight, dirLight);

    const exrLoader = new EXRLoader();
    exrLoader.load(
      HDRI_URL,
      (tex) => {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;

        scene.environment = tex;
        scene.background = tex;
      },
      undefined,
      (err) => console.error("Error loading EXR:", err)
    );

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

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        const trilobite = gltf.scene;
        scene.add(trilobite);

        trilobite.position.set(0, 0, 0);
        trilobite.scale.set(0.22, 0.22, 0.22);

        trilobite.traverse((child) => {
          if (child.isMesh && child.material) {
            const mat = child.material;

            if (mat.vertexColors) {
              mat.vertexColors = false;
            }

            if (mat.map) {
              mat.map.colorSpace = THREE.SRGBColorSpace;
              mat.map.needsUpdate = true;
            }

            mat.envMapIntensity = 0.6;
            mat.needsUpdate = true;
          }
        });
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    let destroyed = false;
    let frameId;

    const animate = () => {
      if (destroyed) return;
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      if (frameId) cancelAnimationFrame(frameId);
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
