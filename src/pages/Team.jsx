import { useState } from "react"
import "./Team.css"

const AVATAR_TONES = ["navy", "blue", "slate", "teal", "indigo", "steel"]

const PERSON_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
)

function getTone(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i) * (i + 1)) % AVATAR_TONES.length
  }
  return AVATAR_TONES[hash]
}

import principalPhoto from "../assets/principal.jpg"

function TeamCard({ person }) {
  const tone = getTone(person.name)

  return (
    <article className="tm-card">
      <div className={`tm-card-photo-wrapper tm-avatar--${tone}`}>
        <span className="tm-avatar-shine"></span>
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="tm-card-photo" />
        ) : (
          <div className="tm-card-placeholder">
            <span className="tm-card-placeholder-icon">{PERSON_ICON}</span>
          </div>
        )}
      </div>
      <div className="tm-card-body">
        <h3 className="tm-card-name">{person.name}</h3>
        <span className="tm-card-role">{person.role}</span>
      </div>
    </article>
  )
}

const TEAM_DATA = [
  {
    name: "Madhu Sharma",
    role: "Principal",
    category: "administration",
    photo: principalPhoto
  },
  {
    name: "Unknown",
    role: "Vice Principal",
    category: "administration"
  },
  {
    name: "Unknown",
    role: "Director",
    category: "administration"
  },
  {
    name: "Unknown",
    role: "Accountant",
    category: "administration"
  },
  {
    name: "Unknown",
    role: "Founder",
    category: "administration"
  },
  //lowersecondary
  {
    name: "Unknown",
    role: "Mathematics Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "English Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Science Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Social Studies Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Nepali Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Computer Science Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Health & PE Teacher",
    category: "lower-secondary"
  },
  {
    name: "Unknown",
    role: "Mathematics Teacher",
    category: "lower-secondary"
  },
  // Primary
  {
    name: "Unknown",
    role: "Grade 5 Class Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "English Instructor",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Science Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Nepali Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Creative Arts Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Social Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Math Teacher",
    category: "primary"
  },
  {
    name: "Unknown",
    role: "Moral Education Teacher",
    category: "primary"
  },

  // Pre-Primary (8 cards)
  {
    name: "Unknown",
    role: "Pre-Primary Coordinator",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "Nursery Lead Teacher",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "LKG Class Teacher",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "UKG Class Teacher",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "Nursery Assistant",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "Playgroup Supervisor",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "Storytelling Instructor",
    category: "pre-primary"
  },
  {
    name: "Unknown",
    role: "Art & Play Instructor",
    category: "pre-primary"
  }
]

// Dynamic descriptions matching categories
const CATEGORY_META = {
  "administration": {
    heading: "Our Administration Team",
    sub: "School leadership and support staff guiding academics, operations, and student care across all departments."
  },
  "lower-secondary": {
    heading: "Our Lower Secondary & Secondary Team",
    sub: "Subject specialists who inspire learning, guide academic performance, and prepare students for secondary education."
  },
  "primary": {
    heading: "Our Primary Team",
    sub: "Primary teachers who focus on strong foundations in mathematics, sciences, languages, and creative arts."
  },
  "pre-primary": {
    heading: "Our Pre-Primary Team",
    sub: "Early childhood educators specializing in Montessori techniques, cognitive development, and creative play."
  }
}

function Team() {
  const [activeTab, setActiveTab] = useState("administration")
  const currentMeta = CATEGORY_META[activeTab]
  const filteredMembers = TEAM_DATA.filter((p) => p.category === activeTab)

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
          {/* Options / Tabs switcher directly after hero */}
          <div className="tm-tabs-wrapper">
            <div className="tm-tabs">
              <button
                className={`tm-tab ${activeTab === "administration" ? "is-active" : ""}`}
                onClick={() => setActiveTab("administration")}
              >
                Administration
              </button>
              <button
                className={`tm-tab ${activeTab === "lower-secondary" ? "is-active" : ""}`}
                onClick={() => setActiveTab("lower-secondary")}
              >
                Secondary
              </button>
              <button
                className={`tm-tab ${activeTab === "primary" ? "is-active" : ""}`}
                onClick={() => setActiveTab("primary")}
              >
                Primary
              </button>
              <button
                className={`tm-tab ${activeTab === "pre-primary" ? "is-active" : ""}`}
                onClick={() => setActiveTab("pre-primary")}
              >
                Pre-Primary
              </button>
            </div>
          </div>

          {/* Dynamic header and animating panels */}
          <div key={activeTab} className="tm-animate-fade">
            <div className="tm-intro-header">
              <div className="tm-intro-text">
                <span className="tm-eyebrow">Staff Profiles</span>
                <h2 className="tm-heading">{currentMeta.heading}</h2>
                <p className="tm-intro-sub">{currentMeta.sub}</p>
              </div>
              <div className="tm-member-count">
                <span className="tm-member-count-dot"></span>
                {filteredMembers.length} members
              </div>
            </div>

            <div className={activeTab === "administration" ? "tm-grid tm-grid--administration" : "tm-grid tm-grid--faculty"}>
              {filteredMembers.map((person) => (
                <TeamCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team