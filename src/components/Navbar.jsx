import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router"
import crest from "../assets/global.jpg"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

  // Eased smooth scroll to top (nicer/slower than the native "smooth" behavior)
  const smoothScrollToTop = (duration = 500) => {
    const startY = window.scrollY
    if (startY === 0) return
    const startTime = performance.now()
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, startY * (1 - easeInOutQuad(progress)))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  // If you click a link to the page you're already on, the pathname
  // doesn't change, so ScrollToTop's effect never fires. Handle it here.
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      smoothScrollToTop()
    }
  }

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
        <NavLink to="/" className="brand" onClick={() => handleNavClick("/")}>
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
        <li><NavLink to="/" end onClick={() => handleNavClick("/")}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => handleNavClick("/about")}>About Us</NavLink></li>
        <li><NavLink to="/academics" onClick={() => handleNavClick("/academics")}>Academics</NavLink></li>
        <li><NavLink to="/team" onClick={() => handleNavClick("/team")}>Team</NavLink></li>
        <li><NavLink to="/contact" onClick={() => handleNavClick("/contact")}>Contact</NavLink></li>
        <li><NavLink to="/contact" className="enquiry-btn" onClick={() => handleNavClick("/contact")}>Enquire Now</NavLink></li>
      </ul>
      </div>
    </header>
  )
}

export default Navbar