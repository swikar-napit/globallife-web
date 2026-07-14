import { Link } from "react-router"
import "./Academics.css"

const levels = [
  {
    level: "Lower Secondary · Foundation",
    grades: "Grades 6, 7 & 8",
    title: "Lower Secondary Program",
    text: "Students build subject depth across sciences, mathematics, and languages, developing the study habits and academic foundation needed before entering the core secondary years.",
    subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Computer Science", "Health & Population"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    level: "Secondary · Core Phase",
    grades: "Grade 9",
    title: "Grade 9 Program",
    text: "A pivotal year of deeper subject mastery and optional-subject selection, laying the groundwork students carry directly into their SEE preparation the following year.",
    subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Computer Science", "Optional Subject"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
        <path d="M22 8.3V14" />
      </svg>
    ),
  },
  {
    level: "SEE Focus · Final Year",
    grades: "Grade 10 → SEE",
    title: "Grade 10 SEE Program",
    text: "Intensive, exam-focused preparation with structured revision, regular assessments, and close mentoring to help every student perform at their best in the SEE board examinations.",
    subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Optional Subject", "SEE Preparation"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
      </svg>
    ),
  },
]

const coreSubjects = [
  {
    name: "English",
    desc: "Reading, grammar, and communication skills built from the ground up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    name: "Nepali",
    desc: "Mother-tongue literacy, grammar, and literature rooted in our culture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M9 7h6M9 11h6" />
      </svg>
    ),
  },
  {
    name: "Mathematics",
    desc: "Numeracy, logic, and problem-solving built through steady practice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M8 17h8" />
      </svg>
    ),
  },
  {
    name: "Science",
    desc: "Hands-on experiments and inquiry across physics, chemistry, biology.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6.5L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9.5V2" />
        <path d="M9 2h6M7 15h10" />
      </svg>
    ),
  },
  {
    name: "Social Studies",
    desc: "History, geography, and civics for informed, engaged citizens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
      </svg>
    ),
  },
  {
    name: "Computer Science",
    desc: "Digital literacy and coding fundamentals for a connected world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 16v5" />
      </svg>
    ),
  },
  {
    name: "Health & Population",
    desc: "Wellbeing, hygiene, and population studies for healthy living.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.5s-7-4.35-9.3-8.8C1.4 8.6 3 5 6.4 5c1.9 0 3.3 1 4.6 2.6C12.3 6 13.7 5 15.6 5c3.4 0 5 3.6 3.7 6.7-2.3 4.45-9.3 8.8-9.3 8.8Z" />
      </svg>
    ),
  },
  {
    name: "Moral Education",
    desc: "Values, discipline, and character built alongside academics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6.5V12c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6.5L12 3Z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </svg>
    ),
  },
]

function Academics() {
  return (
    <>
      <section className="acp-hero">
        <div className="acp-hero-grid" aria-hidden="true"></div>
        <div className="acp-hero-glow" aria-hidden="true"></div>
        <div className="acp-hero-content">
          <nav className="acp-breadcrumb">
            <a href="/">Home</a>
            <div className="acp-breadcrumb-sep"></div>
            <span className="acp-breadcrumb-current">Academics</span>
          </nav>
          <span className="acp-hero-eyebrow">
            <span className="acp-hero-eyebrow-dot"></span>
            NEB-Aligned Curriculum
          </span>
          <h1 className="acp-hero-title">
            A Learning Journey Built for <em>Every Stage</em>
          </h1>
          <p className="acp-hero-sub">
            From Nursery to Class 10, our academic program follows the
            National Education Board curriculum while nurturing discipline,
            curiosity, and character at every step.
          </p>
          <div className="acp-hero-board">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3 2 8l10 5 10-5-10-5Z" />
              <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
            </svg>
            Affiliated with the National Education Board (NEB), Nepal
          </div>
        </div>
      </section>

      <section className="acp-programs">
        <div className="acp-inner">
          <div className="acp-intro">
            <span className="acp-eyebrow">Curriculum Overview</span>
            <h2 className="acp-heading">
              Programs We <em>Offer</em>
            </h2>
            <p className="acp-intro-sub">
              A structured three-phase journey through the secondary years,
              building steadily toward strong SEE results in Grade 10.
            </p>
          </div>

          <div className="acp-level-list">
            {levels.map((lvl, index) => (
              <div className="acp-level-card" key={lvl.title}>
                <span className="acp-level-num">{String(index + 1).padStart(2, "0")}</span>
                <div className="acp-level-body">
                  <span className="acp-level-pill">{lvl.level}</span>
                  <h3 className="acp-level-title">{lvl.title}</h3>
                  <span className="acp-level-grades">{lvl.grades}</span>
                  <p className="acp-level-text">{lvl.text}</p>
                  <div className="acp-level-subjects">
                    {lvl.subjects.map((s) => (
                      <span className="acp-subject-tag" key={s}>{s}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="acp-apply-btn">
                    Apply for Admission
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
                <div className="acp-level-icon">{lvl.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="acp-subjects-section">
        <div className="acp-inner">
          <div className="acp-intro">
            <span className="acp-eyebrow">Core Subjects</span>
            <h2 className="acp-heading">
              What students <em>learn with us</em>
            </h2>
            <p className="acp-intro-sub">
              A well-rounded subject mix that builds strong fundamentals
              while leaving room for curiosity and character.
            </p>
          </div>

          <div className="acp-subjects-grid">
            {coreSubjects.map((subj) => (
              <div className="acp-subject-card" key={subj.name}>
                <div className="acp-subject-icon">{subj.icon}</div>
                <h3 className="acp-subject-name">{subj.name}</h3>
                <p className="acp-subject-desc">{subj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics