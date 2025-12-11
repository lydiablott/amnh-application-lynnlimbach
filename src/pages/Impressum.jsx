import { useEffect } from "react";

function Impressum() {
  useEffect(() => {
    document.body.classList.add("page-impressum");
    return () => {
      document.body.classList.remove("page-impressum");
    };
  }, []);

  return (
    <main className="impressum">
      <div className="impressum-box">
        <h1>Impressum</h1>
        <p>Responsible according to § 5 TMG (German Telemedia Act):</p>
        <p>
          <strong>Lynn Limbach</strong>
        </p>
        <p>
          <a href="mailto:lynn.limbach@aol.de" className="footer-link">
            lynn.limbach@aol.de
          </a>
        </p>
      </div>
    </main>
  );
}

export default Impressum;
