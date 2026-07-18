import { Link } from "react-router"
import "./Team.css"
import principalPhoto from "../assets/principal.jpg"

function PhotoSlot({ name, photo }) {
  if (photo) {
    return (
      <div className="tm-card-photo">
        <img src={photo} alt={name} />
      </div>
    )
  }

  return (
    <div className="tm-card-photo tm-card-photo--placeholder" aria-hidden="true">
      <svg className="tm-card-silhouette" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="28" r="14" fill="currentColor" />
        <path
          d="M12 72c0-15.5 12.5-28 28-28s28 12.5 28 28"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

function TeamCard({ person }) {
  return (
    <article className="tm-card">
      <PhotoSlot name={person.name} photo={person.photo} />
      <div className="tm-card-body">
        <h3 className="tm-card-name">{person.name}</h3>
        <span className="tm-card-role">{person.role}</span>
        {person.bio ? <p className="tm-card-bio">{person.bio}</p> : null}
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
    photo: principalPhoto,
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
              <TeamCard key={person.name} person={person} />
            ))}
          </div>

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
              <TeamCard key={person.name} person={person} />
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
            If you care about discipline, character, and the long haul of
            a child's education — we'd like to hear from you.
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
