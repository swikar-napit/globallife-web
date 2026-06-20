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
const features = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    text: "A rigorous curriculum designed to challenge and inspire every learner."
  },
  {
    icon: "🏠",
    title: "Safe Boarding Life",
    text: "Comfortable, secure boarding facilities that feel like a second home."
  },
  {
    icon: "🌍",
    title: "Holistic Growth",
    text: "Sports, arts, and clubs that nurture confidence beyond the classroom."
  },
  {
    icon: "🤝",
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
     <section className="features-section">
  <div className="features-bento">
    <div className="feature-card feature-big">
      <span className="feature-question">Why Choose<br />Global Life?</span>
      <p className="feature-answer">
        Because we believe every child deserves a place where academics,
        character, and confidence grow together — guided by teachers who
        truly care about their journey.
      </p>
    </div>

    <div className="feature-stack">
      <div className="feature-card feature-small">
        <div className="feature-icon">{features[1].icon}</div>
        <h3 className="feature-title">{features[1].title}</h3>
        <p className="feature-text">{features[1].text}</p>
      </div>
      <div className="feature-card feature-small">
        <div className="feature-icon">{features[2].icon}</div>
        <h3 className="feature-title">{features[2].title}</h3>
        <p className="feature-text">{features[2].text}</p>
      </div>
    </div>

    <div className="feature-card feature-big">
      <div className="feature-icon">{features[3].icon}</div>
      <h3 className="feature-title">{features[3].title}</h3>
      <p className="feature-text">{features[3].text}</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Home
