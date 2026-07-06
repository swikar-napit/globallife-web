import { Link } from "react-router"
import "./About.css"
import crest from "../assets/global.jpg"

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-eyebrow">Our Story & Values</span>
          <h1 className="about-hero-heading">
            About <em>Global Life</em> School
          </h1>
          <p className="about-hero-subtext">
            A boarding and day school dedicated to academic excellence,
            discipline, values, and the holistic growth of every child who
            walks through our doors.
          </p>

          <div className="about-hero-stats">
            <div className="about-hero-stat">
              <span className="about-hero-stat-num">15+</span>
              <span className="about-hero-stat-label">Years of Excellence</span>
            </div>
            <div className="about-hero-stat">
              <span className="about-hero-stat-num">500+</span>
              <span className="about-hero-stat-label">Students</span>
            </div>
            <div className="about-hero-stat">
              <span className="about-hero-stat-num">40+</span>
              <span className="about-hero-stat-label">Teachers</span>
            </div>
          </div>
        </div>

        <div className="about-hero-crest-wrap">
          <img src={crest} alt="Global Life School Crest" className="about-hero-crest" />
        </div>
      </section>

      <section className="mv-section">
        <div className="mv-inner">
          <div className="mv-intro">
            <span className="mv-eyebrow">Our Foundation</span>
            <h2 className="mv-heading">
              What drives <em>everything</em> we do
            </h2>
          </div>

          <div className="mv-grid">
            <div className="mv-box mv-box--mission">
              <div className="mv-sticker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.3" fill="currentColor" />
                </svg>
              </div>
              <span className="mv-box-label">Our Mission</span>
              <h3 className="mv-box-title">What we do, every day</h3>
              <p className="mv-box-text">
                We nurture every child through disciplined academics, strong
                values, and genuine care, giving each learner the confidence
                and skills to grow into a responsible, capable individual.
              </p>
            </div>

            <div className="mv-box mv-box--vision">
              <div className="mv-sticker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 L14.5 9.5 21 12 14.5 14.5 12 21 9.5 14.5 3 12 9.5 9.5 Z" />
                </svg>
              </div>
              <span className="mv-box-label">Our Vision</span>
              <h3 className="mv-box-title">Where we're headed</h3>
              <p className="mv-box-text">
                We see a school known across the region for producing
                thoughtful, future-ready leaders, alumni who carry Global
                Life's balance of excellence and character into the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About