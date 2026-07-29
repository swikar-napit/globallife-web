import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router"
import crest from "../assets/global.jpg"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar${hidden && !isOpen ? " nav-hidden" : ""}`}>
      <div className="navbar-content">
        <NavLink to="/" className="brand">
          <img src={crest} alt="Global Life School Logo" className="crest" />
          <div className="brand-divider"></div>
          <span className="brand-text">
            <span className="school-name">Global Life School</span>
            <span className="school-tag">Boarding &amp; Day School</span>
          </span>
        </NavLink>

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
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/academics">Academics</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/contact" className="enquiry-btn">Enquire Now</NavLink></li>
      </ul>
      </div>
    </header>
  )
}

export default Navbar