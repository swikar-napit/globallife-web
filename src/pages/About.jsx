import { Link, useLocation } from "react-router"
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

const coreValues = [
  {
    title: "Discipline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6.5V12c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6.5L12 3Z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </svg>
    ),
  },
  {
    title: "Compassion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.5s-7-4.35-9.3-8.8C1.4 8.6 3 5 6.4 5c1.9 0 3.3 1 4.6 2.6C12.3 6 13.7 5 15.6 5c3.4 0 5 3.6 3.7 6.7-2.3 4.45-9.3 8.8-9.3 8.8Z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 14.5 9.5 21 12 14.5 14.5 12 21 9.5 14.5 3 12 9.5 9.5 Z" />
      </svg>
    ),
  },
]

function About() {
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.slice(1)
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)

    return () => clearTimeout(timer)
  }, [location.hash])

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
      <section className="abt-hero">
        <div className="abt-hero-grid" aria-hidden="true"></div>
        <div className="abt-hero-glow" aria-hidden="true"></div>
        <div className="abt-hero-inner">
          <div className="abt-hero-content">
            <nav className="abt-breadcrumb">
              <a href="/">Home</a>
              <div className="abt-breadcrumb-sep"></div>
              <span className="abt-breadcrumb-current">About</span>
            </nav>
          <span className="abt-hero-eyebrow">
            <span className="abt-hero-eyebrow-dot"></span>
            Our Story & Values
          </span>
          <h1 className="abt-hero-title">
            About <em>Global Life</em> School
          </h1>
          <p className="abt-hero-sub">
            A boarding and day school dedicated to academic excellence,
            discipline, values, and the holistic growth of every child who
            walks through our doors.
          </p>

          <div className="abt-hero-stats" ref={statsRef}>
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={statsActive} />
            ))}
          </div>
        </div>

        <div className="abt-hero-crest-wrap">
          <img src={crest} alt="Global Life School Crest" className="abt-hero-crest" />
        </div>
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

          <div className="mv-statement">
            <div className="mv-statement-main-wrap">
              <svg className="mv-quote-mark" viewBox="0 0 64 52" aria-hidden="true">
                <path d="M0 52V30.7Q0 15.4 9 7 18 -1.4 32 0.6L30 10.9Q21.1 10.2 16.3 15 11.5 19.8 12.2 28.2H25.6V52ZM38.4 52V30.7Q38.4 15.4 47.4 7 56.4 -1.4 70.4 0.6L68.4 10.9Q59.5 10.2 54.7 15 49.9 19.8 50.6 28.2H64V52Z" />
              </svg>
              <p className="mv-statement-main">
                We nurture every child through disciplined academics, strong
                values, and genuine care — giving each learner the confidence
                and skills to grow into a responsible, capable individual.
              </p>
            </div>

            <div className="mv-statement-side">
              <div className="mv-side-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 L14.5 9.5 21 12 14.5 14.5 12 21 9.5 14.5 3 12 9.5 9.5 Z" />
                </svg>
              </div>
              <span className="mv-side-label">Our Vision</span>
              <p className="mv-side-text">
                A school known across the region for producing thoughtful,
                future-ready leaders, alumni who carry Global Life's balance
                of excellence and character into the world.
              </p>
            </div>
          </div>

          <div className="values-strip">
            {coreValues.map((v) => (
              <div className="value-item" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <span className="value-label">{v.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="story-section" id="our-story">
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

      <section className="principal-section" id="principal-message">
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
                <span className="principal-name">Mr. Madhu Sharma</span>
                <span className="principal-title">Principal</span>
              </div>
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