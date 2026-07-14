import "./Academics.css"

const levels = [
  {
    level: "Early Years",
    grades: "Nursery – Class 1",
    title: "Pre-Primary",
    text: "A caring start with playful learning, language development, social confidence, and healthy routines for young learners, following NEB's early childhood development framework.",
    subjects: ["English", "Nepali", "Numeracy", "Environment Studies", "Art & Craft", "Rhymes & Music"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-9" />
        <path d="M12 12C12 7 8 5 4 5c0 5 3 8 8 8Z" />
        <path d="M12 12c0-4 3-6 7-6 0 4-2 7-7 7" />
      </svg>
    ),
  },
  {
    level: "Foundation Years",
    grades: "Class 1 – Class 5",
    title: "Primary Level",
    text: "Strong core learning aligned with the National Education Board curriculum, building fluency in languages, mathematics, science, and social studies alongside arts and values education.",
    subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Computer", "Moral Education"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9a1 1 0 0 0 1 1h4v-5h2v5h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    level: "Middle & Secondary Level",
    grades: "Class 6 – Class 10",
    title: "Lower Secondary & Secondary",
    text: "Disciplined academic preparation for the SEE examinations, with subject depth in sciences and mathematics, critical thinking, exam readiness, and continued co-curricular growth.",
    subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Computer Science", "Health & Population", "Optional Subject"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2 8l10 5 10-5-10-5Z" />
        <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
        <path d="M22 8.3V14" />
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
            <span className="acp-eyebrow">Program Levels</span>
            <h2 className="acp-heading">
              Three stages, <em>one continuous journey</em>
            </h2>
            <p className="acp-intro-sub">
              Students move seamlessly from early childhood learning through
              secondary education without ever needing to change schools.
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