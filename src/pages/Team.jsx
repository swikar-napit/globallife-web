import { Link } from "react-router"
import "./Team.css"
import ctaPhoto from "../assets/global1.jpg"

const AVATAR_TONES = ["navy", "blue", "slate", "teal", "indigo", "steel"]

function getInitials(name) {
  return name
    .split(" ")
    .filter((part) => !/^(Mrs?|Ms|Dr)\.?$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

function getTone(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i) * (i + 1)) % AVATAR_TONES.length
  }
  return AVATAR_TONES[hash]
}

function Avatar({ name, size = "md" }) {
  const initials = getInitials(name)
  const tone = getTone(name)

  return (
    <div
      className={`tm-avatar tm-avatar--${size} tm-avatar--${tone}`}
      aria-hidden="true"
    >
      <span className="tm-avatar-shine"></span>
      <span className="tm-avatar-initials">{initials}</span>
    </div>
  )
}

function LeadershipCard({ person }) {
  return (
    <article className="tm-card tm-card--leadership">
      <Avatar name={person.name} size="lg" />
      <div className="tm-card-body">
        <span className="tm-card-role">{person.role}</span>
        <h3 className="tm-card-name">{person.name}</h3>
        {person.bio ? <p className="tm-card-bio">{person.bio}</p> : null}
      </div>
    </article>
  )
}

function FacultyCard({ person }) {
  return (
    <article className="tm-card tm-card--faculty">
      <Avatar name={person.name} size="md" />
      <div className="tm-card-body">
        <h3 className="tm-card-name">{person.name}</h3>
        <span className="tm-card-role">{person.role}</span>
        {person.subject ? (
          <span className="tm-card-subject">{person.subject}</span>
        ) : null}
      </div>
    </article>
  )
}

const leadership = [
  {
    name: "Mrs. Madhu Sharma",
    role: "Principal",
    bio: "Has led Global Life School for over fifteen years — keeping standards high while making sure every child feels known.",
  },
  {
    name: "Mr. Ramesh Adhikari",
    role: "Vice Principal",
    bio: "Handles the daily rhythm of classes, exams, and student matters so the school runs smoothly from morning assembly to dismissal.",
  },
  {
    name: "Mrs. Sunita Karki",
    role: "Head of Academics",
    bio: "Shapes the curriculum and exam prep across grades, always checking that classroom work stays aligned with NEB requirements.",
  },
  {
    name: "Mrs. Meena Shrestha",
    role: "School Counselor",
    bio: "Works with students and families on boarding adjustment, exam stress, and the quieter challenges that never show up on a report card.",
  },
]

const faculty = [
  { name: "Bikash Shrestha", role: "Mathematics Teacher", subject: "Mathematics" },
  { name: "Anita Gurung", role: "English Teacher", subject: "English" },
  { name: "Prakash Thapa", role: "Science Teacher", subject: "Science" },
  { name: "Sabina Maharjan", role: "Social Studies Teacher", subject: "Social Studies" },
  { name: "Dipak Bhattarai", role: "Nepali Teacher", subject: "Nepali" },
  { name: "Kabita Rai", role: "Computer Science Teacher", subject: "Computer Science" },
  { name: "Suresh Tamang", role: "Health & Population Teacher", subject: "Health & Population" },
  { name: "Nisha Poudel", role: "Boarding Warden", subject: "Student Welfare" },
]

function Team() {
  return (
    <>
      <section className="tm-hero">
        <div className="tm-hero-grid" aria-hidden="true"></div>
        <div className="tm-hero-glow" aria-hidden="true"></div>
        <div className="tm-hero-content">
          <nav className="tm-breadcrumb">
            <a href="/">Home</a>
            <div className="tm-breadcrumb-sep"></div>
            <span className="tm-breadcrumb-current">Team</span>
          </nav>
          <span className="tm-hero-eyebrow">
            <span className="tm-hero-eyebrow-dot"></span>
            The People Behind Global Life
          </span>
          <h1 className="tm-hero-title">
            Meet Our <em>Team</em>
          </h1>
          <p className="tm-hero-sub">
            Leaders and teachers who know the students by name — and
            stay with them through every grade, exam, and boarding year.
          </p>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-inner">
          <div className="tm-leadership-block">
            <div className="tm-intro">
              <span className="tm-eyebrow">Leadership</span>
              <h2 className="tm-heading">
                Guiding the school <em>forward</em>
              </h2>
              <p className="tm-intro-sub">
                Decades of classroom and administrative experience, shared
                across a small leadership group that still stays close to
                day-to-day school life.
              </p>
            </div>

            <div className="tm-grid tm-grid--leadership">
              {leadership.map((person) => (
                <LeadershipCard key={person.name} person={person} />
              ))}
            </div>
          </div>

          <div className="tm-faculty-block">
            <div className="tm-intro">
              <span className="tm-eyebrow">Faculty</span>
              <h2 className="tm-heading">
                Our <em>Teaching Staff</em>
              </h2>
              <p className="tm-intro-sub">
                Subject teachers who stay after the bell — for extra help,
                boarding check-ins, and the work that never makes the timetable.
              </p>
            </div>

            <div className="tm-grid tm-grid--faculty">
              {faculty.map((person) => (
                <FacultyCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-photo" style={{ backgroundImage: `url(${ctaPhoto})` }} aria-hidden="true" />
          <div className="cta-overlay" aria-hidden="true" />
          <div className="cta-content">
            <span className="cta-eyebrow">We're Hiring</span>
            <h2 className="cta-heading">Want to <em>join our team?</em></h2>
            <p className="cta-text">
              If you care about discipline, character, and the long haul of
              a child's education — we'd like to hear from you.
            </p>
            <div className="cta-actions" style={{ marginTop: "28px" }}>
              <Link to="/contact" className="cta-btn-primary">
                Get in Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", marginLeft: "8px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
