import { Link } from "react-router"
import "./Team.css"

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

const leadership = [
  {
    name: "Mrs. Madhu Sharma",
    role: "Principal",
    bio: "15+ years leading Global Life School with a focus on discipline, character, and academic rigor.",
  },
  {
    name: "Mr. Ramesh Adhikari",
    role: "Vice Principal",
    bio: "Oversees day-to-day academics and student affairs across all grade levels.",
  },
  {
    name: "Mrs. Sunita Karki",
    role: "Head of Academics",
    bio: "Guides curriculum planning and exam preparation, ensuring NEB alignment throughout.",
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
            Experienced leaders and dedicated teachers working together to
            guide every student toward academic excellence and personal
            growth.
          </p>
        </div>
      </section>

      <section className="tm-section">
        <div className="tm-inner">
          <div className="tm-intro">
            <span className="tm-eyebrow">Leadership</span>
            <h2 className="tm-heading">
              Guiding the school <em>forward</em>
            </h2>
            <p className="tm-intro-sub">
              Our leadership team brings together years of experience in
              education, administration, and student care.
            </p>
          </div>

          <div className="tm-leadership-row">
            {leadership.map((person) => (
              <div className="tm-lead-card" key={person.name}>
                <div className="tm-avatar">{initials(person.name)}</div>
                <h3 className="tm-lead-name">{person.name}</h3>
                <span className="tm-lead-role">{person.role}</span>
                <p className="tm-lead-bio">{person.bio}</p>
              </div>
            ))}
          </div>

          <div className="tm-intro">
            <span className="tm-eyebrow">Faculty</span>
            <h2 className="tm-heading">
              Our <em>Teaching Staff</em>
            </h2>
            <p className="tm-intro-sub">
              Subject specialists dedicated to helping every student reach
              their full potential, in and out of the classroom.
            </p>
          </div>

          <div className="tm-faculty-grid">
            {faculty.map((person) => (
              <div className="tm-faculty-card" key={person.name}>
                <div className="tm-faculty-avatar">{initials(person.name)}</div>
                <h3 className="tm-faculty-name">{person.name}</h3>
                <span className="tm-faculty-role">{person.role}</span>
                <br />
                <span className="tm-faculty-subject">{person.subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-join-section">
        <div className="tm-join-inner">
          <span className="tm-join-eyebrow">We're Hiring</span>
          <h2 className="tm-join-heading">
            Want to <em>join our team?</em>
          </h2>
          <p className="tm-join-text">
            We're always looking for passionate educators who share our
            commitment to discipline, values, and student growth.
          </p>
          <Link to="/contact" className="tm-join-btn">
            Get in Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Team