import { Link } from "react-router"
import { useState, useEffect } from "react"
import heroImg from "../assets/global.jpg"

const slides = [
  { id: 1, img: heroImg, caption: "Academic Excellence" },
  { id: 2, img: heroImg, caption: "Holistic Development" },
  { id: 3, img: heroImg, caption: "Boarding Life" },
  { id: 4, img: heroImg, caption: "Sports & Activities" },
]

function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Welcome to Global Life School</span>
          <h1 className="hero-heading">
            Where Every Child<br />
            <span className="hero-heading-accent">Finds Their Greatness</span>
          </h1>
          <p className="hero-subtext">
            A boarding and day school rooted in academic rigour, guided by
            compassionate teachers, and shaped by the belief that education
            is more than a result — it's a life well lived.
          </p>
          <div className="hero-actions">
            <Link to="/academics" className="hero-btn-primary">Apply for Admission</Link>
            <Link to="/about" className="hero-btn-secondary">Our Story</Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-slideshow">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.img}
                alt={slide.caption}
                className={index === current ? "slide active" : "slide"}
              />
            ))}
            <div className="slide-caption">{slides[current].caption}</div>
            <div className="slide-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={index === current ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
          <div className="hero-image-badge">
            <span className="badge-year">Est.</span>
            <span className="badge-num">2009</span>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">500<span className="stat-plus">+</span></span>
          <span className="stat-label">Students Enrolled</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">40<span className="stat-plus">+</span></span>
          <span className="stat-label">Expert Teachers</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">15<span className="stat-plus">+</span></span>
          <span className="stat-label">Years of Excellence</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">98<span className="stat-plus">%</span></span>
          <span className="stat-label">Board Pass Rate</span>
        </div>
      </div>
    </>
  )
}

export default Home