import React from "react";
import TrilobiteViewer from "../components/TrilobiteViewer";

import icon360 from "../assets/360.png";
import thumb from "../assets/thumb.png";
import modularTrilobite from "../assets/modular_trilobite.png";
import trilobiteScripting from "../assets/trilobite_scripting.png";
import trilobiteBlender from "../assets/trilobite_blender.png";
import databaseImg from "../assets/database.png";

function TrilobiteHero() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-visual">
        <TrilobiteViewer />
        <div className="tiny-hint">
          <img src={icon360} alt="360 icon" className="tiny-hint-icon-360" />
          <img src={thumb} alt="thumb" className="tiny-hint-icon-thumb" />
        </div>
      </div>

      <div className="hero-overlay-text">
        <h1 className="hero-title hero-title-centered">
          Ceraurus pleurexanthemus
          <br />
          3D Reconstruction
        </h1>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="home">
      <TrilobiteHero />

      <section className="trilobite-content">
        <div className="trilobite-content-inner">
          <h3
            className="trilobite-content-title"
            style={{ textAlign: "center", lineHeight: "1.3" }}
          >
            3D Exploration Inspired by
            <br />
            <i>Ceraurus pleurexanthemus</i>
          </h3>

          <p className="trilobite-content-text">
            My passion is experimenting with creative workflows that sit somewhere
            between science, technology, and design. I enjoy how museums tell
            stories in physical space, but for this project I wanted to
            translate that curiosity into a small digital experiment I could
            show in a portfolio context as well. Instead of inventing a creature from
            scratch, I chose a real scientific dataset and used publicly
            available landmark files from the supplemental material of
            Vargas-Parra &amp; Hopkins as a starting point. The dataset was
            never meant for 3D modeling in Blender, which made it an interesting
            constraint to explore.
          </p>

          <p className="trilobite-content-text">
            The original files and publication are available here:
            <br />
            <a
              href="https://digitallibrary.amnh.org/items/6bee2072-5c64-4481-9b50-efcb5d7391fd"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              AMNH Digital Library – Supplemental dataset
            </a>
            {" | "}
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1111/pala.70013"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              Vargas-Parra &amp; Hopkins (Palaeontology)
            </a>
            .
          </p>

          <div className="trilobite-row">
            <figure className="trilobite-media">
              <img
                src={modularTrilobite}
                alt="Visualization of modular organization with landmark points"
              />
              <figcaption className="gallery-caption">
                Landmark points imported directly from the AMNH dataset. I used
                them simply as a visual guide and as a fun constraint for
                shaping the project.
              </figcaption>
            </figure>

            <figure className="trilobite-media">
              <img src={databaseImg} alt="AMNH supplemental dataset interface" />
              <figcaption className="gallery-caption">
                A look at the AMNH supplemental dataset I experimented with.
              </figcaption>
            </figure>
          </div>

          <p className="trilobite-content-text">
            After importing the landmark coordinates into Blender using a small
            Python script, Blender placed vertices at the coordinate points
            listed in the dataset. I treated this sparse set of vertices as a
            starting structure and built something visually coherent and
            interesting around it, supported by reference pictures of the real
            trilobite fossil.
          </p>

          <div className="trilobite-row">
            <figure className="trilobite-media">
              <img src={trilobiteBlender} alt="Blender structural framework" />
              <figcaption className="gallery-caption">
                Early blocking of shapes in Blender based on the imported vertex
                positions, before adding finer details.
              </figcaption>
            </figure>

            <figure className="trilobite-media">
              <img
                src={trilobiteScripting}
                alt="Blender reconstruction scripting view"
              />
              <figcaption className="gallery-caption">
                Blender scripting and vertex import during the early
                exploration phase.
              </figcaption>
            </figure>
          </div>

          <p className="trilobite-content-text">
            Since I used a WebGL viewer to show the object on my website
            (created from scratch using React, Vite, and plain HTML/CSS/JS), the
            texture resolution had to stay relatively light. The surface uses a{" "}
            <a
              href="https://polyhaven.com/a/sandy_gravel_02"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              texture from PolyHaven
            </a>{" "}
            and the background is lit with{" "}
            <a
              href="https://polyhaven.com/a/hall_of_mammals"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              an HDRI from PolyHaven
            </a>
            .
          </p>
        </div>
      </section>

      
      <section className="trilobite-content">
        <div className="trilobite-content-inner">
          <h3
            className="trilobite-content-title"
            style={{ textAlign: "center", lineHeight: "1.3" }}
          >
            Media, Storytelling, <br />Interactive &amp; Social Work
          </h3>

          <p className="trilobite-content-text">
            Beyond all the elements connected to this small trilobite experiment, I enjoy and also experienced working across
            several areas of media production from storytelling, video and audio (including Higher Order Ambisonics) to drawing, fabrication and several kinds of media including interesting hardware (Arduino/sensors/LED, VR/AR systems, tracking setups, chroma key).
          </p>
    <p className="trilobite-content-text">
      Having grown up visiting (natural history) museums and being a big natural sciences fan myself, appreciating the education and unique information found there and watching them become more and more digital and full of technology, I can't think of a better place to combine my passions and contribute to. 
    </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
