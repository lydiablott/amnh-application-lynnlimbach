import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

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

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <header ref={headerRef} className="header">
      <Link to="/" className="logo-container">
        <h1 className="logo">
          <span className="logo-top">Internship Application</span>
          <span className="logo-bottom">
            <span className="von">of</span> Lynn Limbach
          </span>
        </h1>
      </Link>

      <div className={`nav-container ${isMobileNavOpen ? "nav-open" : ""}`}>
        <nav className="main-nav">
          <p className="title">Application for an internship at AMNH.</p>

          <Link to="/coverletter" className="green-btn">
            <span>Read Coverletter</span>
          </Link>

          <Link to="/resume" className="green-btn">
            <span>Read Resume</span>
          </Link>

          <div className="icon-bar" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
