// src/pages/Home.jsx
import TrilobiteViewer from "../components/TrilobiteViewer";

function TrilobiteHero() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-visual">
        {/* Fullscreen WebGL / Trilobite viewer */}
        <TrilobiteViewer />

        {/* Tiny hint button (360 icon) – unten rechts */}
        <div className="tiny-hint">
          <img
            src="/src/assets/360.png"
            alt="360 icon"
            className="tiny-hint-icon"
          />
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
            from the American Museum of Natural History, grounding the model in
            documented anatomical proportions. These AMNH landmark files (such
            as <i>Ceraurus3DMod</i> and the accompanying coordinate and
            measurement tables) provided the structural baseline for the overall
            layout and proportions of the trilobite’s head (colored landmark
            points that outline the major anatomical regions of the trilobite{" "}
            <b>head</b>).
          </p>

          <p className="trilobite-content-text">
            The goal was to stay as close to the data as possible while keeping
            the mesh efficient enough for potential use in interactive exhibits,
            educational tools, or real-time applications.
          </p>

          {/* NEW: WebGL / HDRI paragraph */}
          <p className="trilobite-content-text">
            The model is presented in a lightweight WebGL viewer, using HDRI
            lighting to highlight form and surface variation. To make the
            reconstruction run smoothly in a browser, I optimized the topology
            and reduced unnecessary density while keeping all features defined
            by the landmark data. This allows the trilobite to be viewed
            interactively in real time, including rotation, zooming, and
            inspection under consistent lighting, without requiring pre-rendered
            animations or heavy assets.
          </p>

          <div className="trilobite-row">
            <figure className="trilobite-media">
              <img
                src="/src/assets/modular_trilobite.png"
                alt="Visualization of the modular organization of the trilobite head with colored landmark points"
              />
              <figcaption className="gallery-caption">
                Modular organization of the <i>Ceraurus pleurexanthemus</i>{" "}
                head, showing the colored landmark points used as structural
                references.
              </figcaption>
            </figure>

            <figure className="trilobite-media trilobite-media-large">
              <img
                src="/src/assets/trilobite_scripting.png"
                alt="Blender view of Ceraurus trilobite reconstruction"
              />
              <figcaption className="gallery-caption">
                Modular organization of the Ceraurus pleurexanthemus head,
                scripted and visualized in Blender.
              </figcaption>
            </figure>
          </div>

          <p className="trilobite-content-text">
            For surface details and the regions that fall between the documented
            landmarks, I relied on high-quality reference photos of actual{" "}
            <i>Ceraurus pleurexanthemus</i> fossils to guide texture, topology,
            and overall form without departing too much from the scientific
            framework. These visual references helped fill in areas not
            explicitly defined in the morphometric dataset while still keeping
            the reconstruction grounded in real morphology.
          </p>

          <figure className="trilobite-media">
            <img
              src="/src/assets/trilobite_blender.png"
              alt="Scripting and data processing for trilobite reconstruction"
            />
            <figcaption className="gallery-caption">
              Basic structural framework of the trilobite modeled in Blender.
              AMNH supplemental morphometrics dataset.
            </figcaption>
          </figure>

          <p className="trilobite-content-text">
            The morphometric dataset and landmark files used in this project
            come from the supplemental material to the study by Vargas-Parra
            &amp; Hopkins on the modular organization of the{" "}
            <i>Ceraurus pleurexanthemus</i> head, published by the American
            Museum of Natural History. The original data and publication are
            available via the AMNH Digital Library and Wiley Online Library:
            <br />
            <a
              href="https://digitallibrary.amnh.org/items/6bee2072-5c64-4481-9b50-efcb5d7391fd"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMNH Digital Library – Supplemental dataset
            </a>
            {" | "}
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1111/pala.70013"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vargas-Parra &amp; Hopkins (Palaeontology)
            </a>
            . All scientific data and analyses are the work of the original
            authors; my contribution focuses on translating their landmark
            dataset into a 3D reconstruction suitable for interactive and
            educational use.
          </p>

          <figure className="trilobite-media">
            <img
              src="/src/assets/database.png"
              alt="AMNH supplemental data page showing downloadable morphometric files for Ceraurus pleurexanthemus"
            />
            <figcaption className="gallery-caption">
              AMNH supplemental dataset used for the reconstruction, including
              landmark coordinates and measurement tables.
            </figcaption>
          </figure>

          {/* Optional: falls du Bild 2 trotzdem noch zeigen willst, z.B. ganz unten */}
          {/*
          <figure className="trilobite-media trilobite-media-large">
            <img
              src="/src/assets/trilobite_reference.jpeg"
              alt="Reference fossil images of Ceraurus trilobite"
            />
            <figcaption className="gallery-caption">
              Pic caption 2
            </figcaption>
          </figure>
          */}
        </div>
      </section>
    </main>
  );
}

export default Home;
