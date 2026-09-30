import { Link, useLocation } from "react-router"
import { useEffect, useRef, useState } from "react"
import "./About.css"
import crest from "../assets/crest-hires.png"
import principalPhoto from "../assets/principal.jpg"

const journey = [
  {
    title: "Foundation for Growth",
    text: "Global Life School was established with a vision to provide quality education in a caring boarding and day environment.",
  },
  {
    title: "Academic Development",
    text: "We strengthened classroom learning, student care, co-curricular activities, and exam preparation.",
  },
  {
    title: "Global Life Today",
    text: "We continue to serve students through academics, values, leadership, and holistic development.",
  },
]

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 200, suffix: "+", label: "Students" },
  { value: 20, suffix: "+", label: "Teachers" },
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
          <div className="story-left">
            <span className="story-eyebrow">Our Story</span>
            <h2 className="story-heading">
              Built on care, discipline, and <em>progress</em>
            </h2>
            <p className="story-intro">
              Global Life School has grown into a trusted institution known
              for academic excellence, strong values, and holistic student
              development.
            </p>
            <Link to="/academics" className="story-btn">
              Explore Academics <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="story-list">
            {journey.map((item, index) => (
              <li className="story-list-item" key={item.title}>
                <span className="story-num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="story-title">{item.title}</h3>
                <p className="story-text">{item.text}</p>
              </li>
            ))}
          </ol>
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
                <span className="principal-badge-num">25+</span>
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

      <section className="abm-section" id="find-us">
        <div className="abm-inner">
          <div className="abm-map-card">
            <iframe
              className="abm-map"
              title="Global Life School location"
              src="https://www.google.com/maps?q=Global+Life+School,Kamalbinayak,Bhaktapur&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="abm-info-card">
            <div className="abm-info-list">
              <div className="abm-info-item">
                <span className="abm-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="abm-info-label">Address</span>
                  <span className="abm-info-value">Global Life School, Kamalbinayak, Bhaktapur, Nepal</span>
                </div>
              </div>

              <div className="abm-info-item">
                <span className="abm-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </span>
                <div>
                  <span className="abm-info-label">Phone</span>
                  <span className="abm-info-value">
                    <a href="tel:+97716612925">01-6612925</a>
                    {" , "}
                    <a href="tel:+97716620200">01-6620200</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="abm-actions">
              <Link to="/contact" className="abm-btn-primary">
                Enquire Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/academics" className="abm-btn-secondary">View Academics</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About