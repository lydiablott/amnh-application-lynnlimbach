import { useEffect } from "react";

function CV() {
  useEffect(() => {
    document.body.classList.add("page-pdf");
    return () => {
      document.body.classList.remove("page-pdf");
    };
  }, []);

  return (
    <main>
      <section className="pdf-section">
        <div className="pdf-container">
          <iframe
            src="/Resume_Lynn_Limbach.pdf"
            width="100%"
            title="PDF Preview"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default CV;
