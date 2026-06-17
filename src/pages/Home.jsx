import { Link } from "react-router"
import heroImg from "../assets/global.jpg"

function Home() {
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
          <div className="hero-image-placeholder">
            <img src={heroImg} alt="Students at Global Life School" className="hero-img" />
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