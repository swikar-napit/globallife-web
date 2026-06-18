import { Link, useLocation } from "react-router"
import crest from "../assets/global.jpg"
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
            <a href="https://www.facebook.com/profile.php?id=100035277070893" className="footer-social-btn" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Youtube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
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
          <div className="footer-col-title">Academics</div>
          <ul className="footer-links">
            <li>
              <Link to="/academics" className={location.pathname === "/academics" ? "footer-link active" : "footer-link"}>
                <span>Admissions</span> <span className="footer-link-arrow">→</span>
              </Link>
            </li>
            <li><Link to="/academics" className="footer-link"><span>Curriculum</span> <span className="footer-link-arrow">→</span></Link></li>
            <li><Link to="/academics" className="footer-link"><span>Gallery</span> <span className="footer-link-arrow">→</span></Link></li>
            <li><Link to="/academics" className="footer-link"><span>Notices</span> <span className="footer-link-arrow">→</span></Link></li>
            <li><Link to="/academics" className="footer-link"><span>Results</span> <span className="footer-link-arrow">→</span></Link></li>
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