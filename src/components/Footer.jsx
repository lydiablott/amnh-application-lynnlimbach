import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>
        This website is an independent, non-commercial academic project inspired by the layout of the American Museum of Natural History. It is not affiliated with or endorsed by the museum.
      </p>
      <p>© {new Date().getFullYear()} Lynn Limbach. All rights reserved.</p>
      <Link to="/impressum" className="footer-link">
        Impressum
      </Link>
    </footer>
  );
}

export default Footer;
