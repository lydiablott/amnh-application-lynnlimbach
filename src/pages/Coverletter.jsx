import { useEffect } from "react";

function Coverletter() {
  const base = import.meta.env.BASE_URL;

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
            src={base + "Lynn_Limbach_Internship_Application_Coverletter.pdf"}
            width="100%"
            title="PDF Preview"
            style={{ border: "none" }}
          />
        </div>
      </section>
    </main>
  );
}

export default Coverletter;
