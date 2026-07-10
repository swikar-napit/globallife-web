import { Link } from "react-router"
import { useEffect, useRef, useState } from "react"
import "./About.css"
import crest from "../assets/global.jpg"
import principalPhoto from "../assets/principal.jpg"
import ctaPhoto from "../assets/global1.jpg"

const milestones = [
  {
    year: "2009",
    title: "Global Life School is founded",
    text: "Opened our doors with a single building, a handful of classrooms, and a promise to put every child's growth first.",
  },
  {
    year: "2013",
    title: "Boarding facilities open",
    text: "Introduced safe, home-like boarding houses, welcoming students from across the region for the first time.",
  },
  {
    year: "2017",
    title: "Secondary level launched",
    text: "Expanded through Class 10, giving students a full academic journey without ever needing to change schools.",
  },
  {
    year: "2021",
    title: "500th student enrolled",
    text: "Crossed a major milestone in enrollment, a mark of the trust families across the community placed in us.",
  },
  {
    year: "2024",
    title: "98% board pass rate achieved",
    text: "Our graduating class posted our strongest results yet, a reflection of years of disciplined academic groundwork.",
  },
]

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Students" },
  { value: 40, suffix: "+", label: "Teachers" },
]

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime = null
    let frameId

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [active, target, duration])

  return value
}

function StatCounter({ value, suffix, label, active }) {
  const count = useCountUp(value, active)
  return (
    <div className="about-hero-stat">
      <span className="about-hero-stat-num">{count}{suffix}</span>
      <span className="about-hero-stat-label">{label}</span>
    </div>
  )
}

function About() {
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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

          <div className="about-hero-stats" ref={statsRef}>
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={statsActive} />
            ))}
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
      <section className="story-section">
        <div className="story-inner">
          <div className="mv-intro">
            <span className="mv-eyebrow">Our Story</span>
            <h2 className="mv-heading">
              Fifteen years of <em>growing together</em>
            </h2>
          </div>

          <div className="story-scroll-wrap">
            <div className="story-scroll">
              <div className="story-timeline">
                <div className="story-row story-row--top">
                  {milestones.map((m, index) => (
                    <div className="story-slot" key={m.year}>
                      {index % 2 === 0 && (
                        <div className="story-content">
                          <span className="story-year">{m.year}</span>
                          <h3 className="story-title">{m.title}</h3>
                          <p className="story-text">{m.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="story-row story-row--line">
                  <div className="story-line" aria-hidden="true"></div>
                  {milestones.map((m) => (
                    <div className="story-slot" key={m.year}>
                      <div className="story-dot" aria-hidden="true"></div>
                    </div>
                  ))}
                </div>

                <div className="story-row story-row--bottom">
                  {milestones.map((m, index) => (
                    <div className="story-slot" key={m.year}>
                      {index % 2 !== 0 && (
                        <div className="story-content">
                          <span className="story-year">{m.year}</span>
                          <h3 className="story-title">{m.title}</h3>
                          <p className="story-text">{m.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="story-scroll-fade" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          <div className="story-mobile-list">
            <div className="story-mobile-line" aria-hidden="true"></div>
            {milestones.map((m) => (
              <div className="story-mobile-item" key={m.year}>
                <div className="story-mobile-dot" aria-hidden="true"></div>
                <div className="story-content">
                  <span className="story-year">{m.year}</span>
                  <h3 className="story-title">{m.title}</h3>
                  <p className="story-text">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="principal-section">
        <div className="principal-inner">
          <div className="mv-intro">
            <span className="mv-eyebrow">Leadership</span>
            <h2 className="mv-heading">
              A word from our <em>Principal</em>
            </h2>
          </div>

          <div className="principal-card">
            <div className="principal-photo-wrap">
              <img src={principalPhoto} alt="Principal of Global Life School" className="principal-photo" />
              <div className="principal-photo-badge">
                <span className="principal-badge-num">15+</span>
                <span className="principal-badge-label">Years Leading</span>
              </div>
            </div>

            <div className="principal-content">
              <svg className="principal-quote-mark" viewBox="0 0 64 52" aria-hidden="true">
                <path d="M0 52V30.7Q0 15.4 9 7 18 -1.4 32 0.6L30 10.9Q21.1 10.2 16.3 15 11.5 19.8 12.2 28.2H25.6V52ZM38.4 52V30.7Q38.4 15.4 47.4 7 56.4 -1.4 70.4 0.6L68.4 10.9Q59.5 10.2 54.7 15 49.9 19.8 50.6 28.2H64V52Z" />
              </svg>

              <p className="principal-salutation">Dear Students, Parents, and Well-wishers,</p>

              <p className="principal-para">
                At Global Life School, every child is welcomed with genuine
                care, so the classroom feels less like an institution and
                more like a second home. We encourage curiosity rather than
                memorization, and we work hard to keep that spark of
                inquisitiveness burning long after the bell rings.
              </p>

              <p className="principal-para">
                We don't confine learning to four walls. Through district
                and national-level competitions, cultural festivals, and
                excursions, our students step into the wider world early,
                and come back home with both confidence and a stronger sense
                of who they are.
              </p>

              <p className="principal-para">
                None of this would mean anything without the trust our
                families place in us, and we never take that trust lightly.
                We remain grateful for it, and always open to hearing how we
                can serve our students better.
              </p>

              <div className="principal-signoff">
                <span className="principal-name">Mrs. Madhu Sharma</span>
                <span className="principal-title">Principal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values-section">
        <div className="core-values-inner">
          <div className="mv-intro">
            <span className="mv-eyebrow" style={{ color: "var(--blue-accent)" }}>What We Stand For</span>
            <h2 className="mv-heading" style={{ color: "#fff" }}>
              Our <em style={{ color: "var(--blue-accent)" }}>Core Values</em>
            </h2>
          </div>

          <div className="core-values-grid">
            <div className="core-value-card">
              <div className="core-value-icon core-value-icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" />
                </svg>
              </div>
              <h3 className="core-value-title">Discipline</h3>
              <p className="core-value-text">We believe lasting achievement is built on consistency. Students learn to show up, follow through, and take responsibility for their own progress every single day.</p>
            </div>

            <div className="core-value-card">
              <div className="core-value-icon core-value-icon--amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2Z" />
                </svg>
              </div>
              <h3 className="core-value-title">Excellence</h3>
              <p className="core-value-text">We set high expectations — not to create pressure, but to unlock potential. Every child is capable of more than they think, and we help them discover that.</p>
            </div>

            <div className="core-value-card">
              <div className="core-value-icon core-value-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12" />
                  <path d="M12 12C12 7 8 5 4 5c0 5 3 8 8 8Z" />
                  <path d="M12 12c0-4 3-6 7-6 0 4-2 7-7 7" />
                </svg>
              </div>
              <h3 className="core-value-title">Integrity</h3>
              <p className="core-value-text">Honesty and character are non-negotiable here. We guide students to do the right thing not because they're watched, but because it reflects who they truly are.</p>
            </div>

            <div className="core-value-card">
              <div className="core-value-icon core-value-icon--violet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="3" />
                  <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <circle cx="17" cy="9" r="2.4" />
                  <path d="M14.5 20c.2-2.6 2.1-4.6 4.5-4.9" />
                </svg>
              </div>
              <h3 className="core-value-title">Compassion</h3>
              <p className="core-value-text">A school is only as strong as the care within it. We nurture empathy and kindness so students grow into people who lift others up wherever they go.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-photo" style={{ backgroundImage: `url(${ctaPhoto})` }} aria-hidden="true" />
          <div className="cta-overlay" aria-hidden="true" />
          <div className="cta-content">
            <span className="cta-eyebrow">Now Enrolling</span>
            <h2 className="cta-heading">Ready to Join Global Life School?</h2>
            <p className="cta-text">
              Come see the classrooms, meet the teachers, and picture your
              child thriving here. Applications for the upcoming academic
              year are open now.
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-stat-num">500+</span>
                <span className="cta-stat-label">Students</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-num">15+</span>
                <span className="cta-stat-label">Years</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-num">98%</span>
                <span className="cta-stat-label">Pass Rate</span>
              </div>
            </div>
            <div className="cta-actions">
              <Link to="/academics" className="cta-btn-primary">Apply Now</Link>
              <Link to="/contact" className="cta-btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About