import { Link } from "react-router"
import { useState, useEffect } from "react"
import slide1 from "../assets/global1.jpg"
import slide2 from "../assets/global2.jpg"
import slide3 from "../assets/global3.jpg"
import slide4 from "../assets/global5.jpg"

const slides = [
  { id: 1, img: slide4, caption: "Welcome Program" },
  { id: 2, img: slide2, caption: "Welcome Program" },
  { id: 3, img: slide3, caption: "Welcome Program" },
  { id: 4, img: slide1, caption: "Welcome Program" },
]
const programs = [
  {
    level: "Early Years",
    grades: "Nursery – Class 1",
    title: "Pre-Primary",
    text: "A caring start with playful learning, language development, social confidence, and healthy routines for young learners.",
  },
  {
    level: "Foundation Years",
    grades: "Class 1 – Class 7",
    title: "Primary",
    text: "Strong core learning in English, Nepali, mathematics, science, social studies, values, arts, and activities.",
  },
  {
    level: "Grades 8 – 10",
    grades: "Class 8 – Class 10",
    title: "Lower Secondary & Secondary",
    text: "Disciplined academic preparation with subject depth, critical thinking, exam readiness, and co-curricular growth.",
  },
]
const featureIcons = {
  cap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
      <path d="M22 8.3V14" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h4v-5h2v5h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21v-9" />
      <path d="M12 12C12 7 8 5 4 5c0 5 3 8 8 8Z" />
      <path d="M12 12c0-4 3-6 7-6 0 4-2 7-7 7" />
    </svg>
  ),
  mentors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M14.5 20c.2-2.6 2.1-4.6 4.5-4.9" />
    </svg>
  ),
}

const features = [
  {
    icon: featureIcons.cap,
    title: "Academic Excellence",
    text: "A rigorous curriculum designed to challenge and inspire every learner."
  },
  {
    icon: featureIcons.home,
    title: "Safe Boarding Life",
    text: "Comfortable, secure boarding facilities that feel like a second home."
  },
  {
    icon: featureIcons.sprout,
    title: "Holistic Growth",
    text: "Sports, arts, and clubs that nurture confidence beyond the classroom."
  },
  {
    icon: featureIcons.mentors,
    title: "Caring Mentors",
    text: "Experienced teachers dedicated to every student's personal journey."
  },
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
            <Link to="/contact" className="hero-btn-primary">Contact Us</Link>
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

      <section className="home-about">
        <div className="home-about-inner">
          <span className="home-about-eyebrow">About Us</span>
          <h2 className="home-about-heading">
            Welcome to <span>Global Life School</span>
          </h2>
          <div className="home-about-copy">
            <p>
              Global Life School is committed to shaping future leaders through innovative learning, strong values, and academic excellence. We create an inspiring environment where students are encouraged to think creatively, explore their potential, and develop the skills needed to succeed in a rapidly changing world
            </p>
            <p>
              By combining academic excellence with creativity and critical thinking, we prepare students to become responsible, confident, and future-ready individuals.
            </p>
          </div>
          <Link to="/about" className="home-about-btn">
            About Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
            <section className="academics-section">
        <div className="acad-inner">

          <div className="acad-top">
            <span className="acad-eyebrow">Academics</span>
            <h2 className="acad-headline">
              Programs built for<br />
              <em className="acad-headline-em">every stage of growth</em>
            </h2>
          </div>

          <div className="acad-grid">
            {programs.map((program, index) => (
              <Link to="/academics" className="acad-card" key={program.title}>
                <span className="acad-card-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="acad-card-pill">
                  <span className="acad-pill-label">{program.level}</span>
                  <span className="acad-pill-grades">{program.grades}</span>
                </div>
                <h3 className="acad-card-title">{program.title}</h3>
                <p className="acad-card-text">{program.text}</p>
                <span className="acad-card-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>

          <div className="acad-footer">
            <span className="acad-count">3 programs · Est. 2009</span>
            <Link to="/academics" className="acad-cta">
              View All Programs <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      <section className="why-section">
        <div className="why-bento">
          <div className="why-hero-card">
            <span className="why-hero-eyebrow">Our Promise</span>
            <h2 className="why-hero-title">Why Choose<br />Global Life?</h2>
            <p className="why-hero-text">
              Because we believe every child deserves a place where
              academics, character, and confidence grow together — guided by
              teachers who truly care about their journey.
            </p>
            <Link to="/about" className="why-hero-cta">
              Discover Our Story <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="why-grid">
            {features.map((feature) => (
              <div className="why-card" key={feature.title}>
                <div className="why-card-icon">{feature.icon}</div>
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-heading">Ready to Join Global Life School?</h2>
          <p className="cta-text">
            Applications for the upcoming academic year are open. Take the
            first step toward a future built on excellence, character, and
            care.
          </p>
          <div className="cta-actions">
            <Link to="/academics" className="cta-btn-primary">Apply Now</Link>
            <Link to="/contact" className="cta-btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home