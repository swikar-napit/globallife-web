import { Link } from "react-router"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-brand-col">
          <div className="footer-brand">
            <div className="footer-logo-placeholder">GLS</div>
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
            <a href="https://www.facebook.com/profile.php?id=100035277070893" className="footer-social-btn" aria-label="Facebook">f</a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Academics</div>
          <ul className="footer-links">
            <li><Link to="/academics">Admissions</Link></li>
            <li><Link to="/academics">Curriculum</Link></li>
            <li><Link to="/academics">Gallery</Link></li>
            <li><Link to="/academics">Notices</Link></li>
            <li><Link to="/academics">Results</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon">📍</span>
              <span>Kathmandu, Bagmati Province, Nepal</span>
            </li>
            <li>
              <span className="footer-contact-icon">📞</span>
              <span>+977-01-6620200</span>
              <span>+977-01-6612925</span>
            </li>
            <li>
              <span className="footer-contact-icon">✉️</span>
              <span>info@globallifeschool.edu.np</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">
          © 2026 Global Life School. All rights reserved.
        </div>
        <div className="footer-bottom-badge">
          Built with react in Nepal
        </div>
      </div>
    </footer>
  )
}

export default Footer