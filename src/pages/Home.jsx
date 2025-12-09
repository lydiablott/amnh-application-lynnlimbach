// src/pages/Home.jsx
import TrilobiteViewer from "../components/TrilobiteViewer";

// IMPORT ALL IMAGES HERE
import icon360 from "../assets/360.png";
import modularTrilobite from "../assets/modular_trilobite.png";
import trilobiteScripting from "../assets/trilobite_scripting.png";
import trilobiteBlender from "../assets/trilobite_blender.png";
import databaseImg from "../assets/database.png";
// optional if you use this one later:
// import trilobiteReference from "../assets/trilobite_reference.jpeg";

function TrilobiteHero() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-visual">
        {/* Fullscreen WebGL / Trilobite viewer */}
        <TrilobiteViewer />

        {/* Tiny hint button (360 icon) – bottom right */}
        <div className="tiny-hint">
          <img src={icon360} alt="360 icon" className="tiny-hint-icon" />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <TrilobiteHero />

      <section className="trilobite-content">
        <div className="trilobite-content-inner">
          <h3 className="trilobite-content-title">
            3D Reconstruction of a Ceraurus pleurexanthemus Trilobite
          </h3>

          <p className="trilobite-content-text">
            This 3D reconstruction of a <i>Ceraurus pleurexanthemus</i> trilobite
            is built on original morphometric datasets and supplemental material
            from the American Museum of Natural History […]
          </p>

          <p className="trilobite-content-text">
            The goal was to stay as close to the data as possible […]
          </p>

          {/* NEW: WebGL / HDRI paragraph */}
          <p className="trilobite-content-text">
            The model is presented in a lightweight WebGL viewer […]
          </p>

          <div className="trilobite-row">
            <figure className="trilobite-media">
              <img
                src={modularTrilobite}
                alt="Visualization of the modular organization of the trilobite head with colored landmark points"
              />
              <figcaption className="gallery-caption">
                Modular organization […]
              </figcaption>
            </figure>

            <figure className="trilobite-media trilobite-media-large">
              <img
                src={trilobiteScripting}
                alt="Blender view of Ceraurus trilobite reconstruction"
              />
              <figcaption className="gallery-caption">
                Modular organization […]
              </figcaption>
            </figure>
          </div>

          <p className="trilobite-content-text">
            For surface details and the regions that fall between the documented
            landmarks […]
          </p>

          <figure className="trilobite-media">
            <img
              src={trilobiteBlender}
              alt="Scripting and data processing for trilobite reconstruction"
            />
            <figcaption className="gallery-caption">
              Basic structural framework […]
            </figcaption>
          </figure>

          <p className="trilobite-content-text">
            The morphometric dataset and landmark files […]
          </p>

          <figure className="trilobite-media">
            <img
              src={databaseImg}
              alt="AMNH supplemental data page showing downloadable morphometric files"
            />
            <figcaption className="gallery-caption">
              AMNH supplemental dataset […]
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default Home;
