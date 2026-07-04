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
    </>
  )
}

export default About