import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef(null);          // <– WICHTIG: so, ohne Generics
  const location = useLocation();

  // Header-Höhe messen und in CSS-Variable schreiben
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isMobileNavOpen]);

  // Mobile-Menü schließen, wenn die Route wechselt
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <header ref={headerRef} className="header">
      {/* Left: Logo */}
      <Link to="/" className="logo-container">
        <h1 className="logo">
          <span className="logo-top">Internship Application</span>
          <span className="logo-bottom">
            <span className="von">of</span> Lynn Limbach
          </span>
        </h1>
      </Link>

      {/* Hamburger (mobil) */}
      <button
        className={`hamburger ${isMobileNavOpen ? "hamburger--open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Nav rechts */}
      <div className={`nav-container ${isMobileNavOpen ? "nav-open" : ""}`}>
        <nav className="main-nav">
          <p className="title">Application for an internship at AMNH.</p>

          <Link to="/coverletter" className="blue-btn">
            <span>Read Coverletter</span>
          </Link>

          <Link to="/cv" className="blue-btn">
            <span>Read CV</span>
          </Link>

          <div className="icon-bar" />
        </nav>

       
      </div>
    </header>
  );
}

export default Header;


/*  <nav className="sub-nav">
          <Link to="/education">Education</Link>
          <Link to="/scieneandcuriosity">Science & Curiosity</Link>
          <Link to="/socialexperiences">Social Experiences</Link>
          <Link to="/hobbies">Hobbies</Link>
        </nav>//
*/