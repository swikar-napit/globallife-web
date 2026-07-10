import { Link } from "react-router"
import "./About.css"
import crest from "../assets/global.jpg"
import principalPhoto from "../assets/principal.jpg"

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
      <section className="story-section">
        <div className="story-inner">
          <div className="mv-intro">
            <span className="mv-eyebrow">Our Story</span>
            <h2 className="mv-heading">
              Fifteen years of <em>growing together</em>
            </h2>
          </div>

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
    </>
  )
}

export default About