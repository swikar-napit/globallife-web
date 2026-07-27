import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import crest from "../assets/global.jpg"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuHeight, setMenuHeight] = useState(0)
  const lastScrollY = useRef(0)
  const navLinksRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (isOpen && navLinksRef.current) {
      setMenuHeight(navLinksRef.current.scrollHeight + 8)
    } else {
      setMenuHeight(0)
    }
  }, [isOpen])

  const handleNavClick = (e, to) => {
    if (!isOpen) return
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => navigate(to), 320)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // always show near the top of the page
      if (currentScrollY < 80) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setHidden(true)
      } else {
        // scrolling up
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar${hidden && !isOpen ? " nav-hidden" : ""}`}>
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

      <ul
        className={isOpen ? "nav-links open" : "nav-links"}
        ref={navLinksRef}
        style={{ maxHeight: `${menuHeight}px` }}
      >
        <li><Link to="/" onClick={(e) => handleNavClick(e, "/")}>Home</Link></li>
        <li><Link to="/about" onClick={(e) => handleNavClick(e, "/about")}>About Us</Link></li>
        <li><Link to="/academics" onClick={(e) => handleNavClick(e, "/academics")}>Academics</Link></li>
        <li><Link to="/team" onClick={(e) => handleNavClick(e, "/team")}>Team</Link></li>
        <li><Link to="/contact" onClick={(e) => handleNavClick(e, "/contact")}>Contact</Link></li>
        <li><Link to="/contact" className="enquiry-btn" onClick={(e) => handleNavClick(e, "/contact")}>Enquire Now</Link></li>
      </ul>
    </header>
  )
}

export default Navbar