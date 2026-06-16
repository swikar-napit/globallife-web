import { useState } from "react"
import { Link } from "react-router"
import crest from "../assets/global.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="brand">
      <img src={crest} alt="Global Life School Logo" className="crest" />
        <div className="brand-divider"></div>
        <span className="brand-text">
          <span className="school-name">Global Life School</span>
          <span className="school-tag">Boarding &amp; Day School</span>
        </span>
      </Link>
 
      <button
        className={isOpen ? "menu-toggle open" : "menu-toggle"}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/contact" className="enquiry-btn">Enquire Now</Link></li>
      </ul>
    </header>
  )
}

export default Navbar