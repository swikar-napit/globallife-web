import { Link } from "react-router"
import "./Academics.css"

const levels = [
  {
    phase: "Phase 01",
    accent: "#3D8BFD",
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
    phase: "Phase 02",
    accent: "#3FBF8F",
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
    phase: "Phase 03",
    accent: "#F2A93B",
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
            {levels.map((lvl) => (
              <article
                className="acp-level-card"
                key={lvl.title}
                style={{ "--accent": lvl.accent }}
              >
                <div className="acp-level-top">
                  <div className="acp-level-icon">{lvl.icon}</div>
                  <div className="acp-level-top-text">
                    <span className="acp-phase-tag">{lvl.phase}</span>
                    <span className="acp-level-pill">{lvl.level}</span>
                  </div>
                  <span className="acp-level-grades">{lvl.grades}</span>
                </div>

                <h3 className="acp-level-title">{lvl.title}</h3>
                <p className="acp-level-text">{lvl.text}</p>

                <div className="acp-level-divider"></div>

                <div className="acp-level-footer">
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
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Academics