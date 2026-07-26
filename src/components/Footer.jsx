import { Link, useLocation } from "react-router"
import crest from "../assets/global.jpg"
import "./Footer.css"

function Footer() {
  const location = useLocation()

  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={crest} alt="Global Life School Logo" className="crest" />
            <div>
              <div className="footer-brand-name">Global Life School</div>
              <div className="footer-brand-tag">Boarding &amp; Day School</div>
            </div>
          </div>
          <p className="footer-desc">
            Nurturing young minds with academic excellence, strong values,
            and a lifelong love of learning in the heart of Nepal.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100035277070893" className="footer-social-btn" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "footer-link active" : "footer-link"}>
                <span>Home</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "footer-link active" : "footer-link"}>
                <span>About Us</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/academics" className={location.pathname === "/academics" ? "footer-link active" : "footer-link"}>
                <span>Academics</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/team" className={location.pathname === "/team" ? "footer-link active" : "footer-link"}>
                <span>Our Team</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "footer-link active" : "footer-link"}>
                <span>Contact</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          <ul className="footer-links">
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "footer-link active" : "footer-link"}>
                <span>Contact Us</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/about#principal-message" className="footer-link">
                <span>Principal's Message</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link to="/about#our-story" className="footer-link">
                <span>Our Story</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon">📍</span>
              <span>Kamalbinayak-10, Bhaktapur, Nepal</span>
            </li>
            <li>
              <span className="footer-contact-icon">📞</span>
              <span>+977-01-6620200</span>
              <span>+977-01-6612925</span>
            </li>
            <li>
              <span className="footer-contact-icon">✉️</span>
              <span>globallifesch@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">
          © 2026 Global Life School. All rights reserved.
        </div>
        <div className="footer-bottom-badge">
          Built with React by Swikar Napit
        </div>
      </div>
    </footer>
  )
}

export default Footer