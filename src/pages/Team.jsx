import { useState } from "react"
import { Link } from "react-router"
import "./Team.css"
import ctaPhoto from "../assets/global1.jpg"

const AVATAR_TONES = ["navy", "blue", "slate", "teal", "indigo", "steel"]

const SUBJECT_ICONS = {
  math: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  ),
  science: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12" />
      <path d="M12 3v12" />
      <path d="M9 12h6" />
      <path d="M12 15c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z" />
    </svg>
  ),
  english: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  computer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  nepali: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  art: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.32143 19.4629 5.37897 20.2061 5.06013 20.7402C4.77093 21.2246 4.96025 21.8499 5.4673 22C5.64161 22.0515 5.82194 22.0777 6.00287 22H12Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor"/>
      <circle cx="11.5" cy="7.5" r="1" fill="currentColor"/>
      <circle cx="16.5" cy="9.5" r="1" fill="currentColor"/>
    </svg>
  ),
  sports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
      <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
    </svg>
  ),
  earlychildhood: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  general: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

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

import principalPhoto from "../assets/principal.jpg"

function Avatar({ name, iconKey }) {
  // Unused but kept for reference or compatibility if needed
  return null
}

function TeamCard({ person }) {
  const initials = getInitials(person.name)
  const tone = getTone(person.name)
  const icon = person.iconKey ? SUBJECT_ICONS[person.iconKey] : null

  return (
    <article className="tm-card">
      <div className={`tm-card-photo-wrapper tm-avatar--${tone}`}>
        <span className="tm-avatar-shine"></span>
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="tm-card-photo" />
        ) : (
          <div className="tm-card-placeholder">
            {icon ? (
              <span className="tm-card-placeholder-icon">{icon}</span>
            ) : (
              <span className="tm-card-placeholder-initials">{initials}</span>
            )}
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
  // Administration (Matching the screenshot names & roles)
  {
    name: "Madhu Sharma",
    role: "Principal",
    category: "administration",
    photo: principalPhoto
  },
  {
    name: "Rajendra Phoju",
    role: "Vice Principal",
    category: "administration"
  },
  {
    name: "Ratna Bir Kisi",
    role: "Director",
    category: "administration"
  },
  {
    name: "Rajani Maiya Phaiju",
    role: "Accountant",
    category: "administration"
  },
  {
    name: "Mr. Ramesh Adhikari",
    role: "Founder",
    category: "administration"
  },

  // Lower Secondary (8 cards)
  {
    name: "Mr. Bikash Shrestha",
    role: "Mathematics Teacher",
    category: "lower-secondary",
    iconKey: "math"
  },
  {
    name: "Ms. Anita Gurung",
    role: "English Teacher",
    category: "lower-secondary",
    iconKey: "english"
  },
  {
    name: "Mr. Prakash Thapa",
    role: "Science Teacher",
    category: "lower-secondary",
    iconKey: "science"
  },
  {
    name: "Mrs. Sabina Maharjan",
    role: "Social Studies Teacher",
    category: "lower-secondary",
    iconKey: "social"
  },
  {
    name: "Mr. Dipak Bhattarai",
    role: "Nepali Teacher",
    category: "lower-secondary",
    iconKey: "nepali"
  },
  {
    name: "Ms. Kabita Rai",
    role: "Computer Science Teacher",
    category: "lower-secondary",
    iconKey: "computer"
  },
  {
    name: "Mr. Suresh Tamang",
    role: "Health & PE Teacher",
    category: "lower-secondary",
    iconKey: "sports"
  },
  {
    name: "Mr. Rajesh Khadka",
    role: "Mathematics Teacher",
    category: "lower-secondary",
    iconKey: "math"
  },

  // Primary (8 cards)
  {
    name: "Mrs. Maya Devi",
    role: "Grade 5 Class Teacher",
    category: "primary",
    iconKey: "general"
  },
  {
    name: "Mr. Sunil Jha",
    role: "English Instructor",
    category: "primary",
    iconKey: "english"
  },
  {
    name: "Ms. Rupa Shrestha",
    role: "Science Teacher",
    category: "primary",
    iconKey: "science"
  },
  {
    name: "Mrs. Geeta Pandey",
    role: "Nepali Teacher",
    category: "primary",
    iconKey: "nepali"
  },
  {
    name: "Mr. Anil Lama",
    role: "Creative Arts Teacher",
    category: "primary",
    iconKey: "art"
  },
  {
    name: "Ms. Priya KC",
    role: "Social Teacher",
    category: "primary",
    iconKey: "social"
  },
  {
    name: "Mr. Binod Acharya",
    role: "Math Teacher",
    category: "primary",
    iconKey: "math"
  },
  {
    name: "Mrs. Saraswati Joshi",
    role: "Moral Education Teacher",
    category: "primary",
    iconKey: "general"
  },

  // Pre-Primary (8 cards)
  {
    name: "Mrs. Rashmi Sen",
    role: "Pre-Primary Coordinator",
    category: "pre-primary",
    iconKey: "earlychildhood"
  },
  {
    name: "Ms. Pooja Pradhan",
    role: "Nursery Lead Teacher",
    category: "pre-primary",
    iconKey: "earlychildhood"
  },
  {
    name: "Mrs. Sneha Tuladhar",
    role: "LKG Class Teacher",
    category: "pre-primary",
    iconKey: "music"
  },
  {
    name: "Ms. Shruti Shah",
    role: "UKG Class Teacher",
    category: "pre-primary",
    iconKey: "math"
  },
  {
    name: "Mrs. Neha Dixit",
    role: "Nursery Assistant",
    category: "pre-primary",
    iconKey: "art"
  },
  {
    name: "Ms. Aarati Thapa",
    role: "Playgroup Supervisor",
    category: "pre-primary",
    iconKey: "earlychildhood"
  },
  {
    name: "Mrs. Deepa Bhandari",
    role: "Storytelling Instructor",
    category: "pre-primary",
    iconKey: "music"
  },
  {
    name: "Ms. Rekha Chaudhary",
    role: "Art & Play Instructor",
    category: "pre-primary",
    iconKey: "art"
  }
]

// Dynamic descriptions matching categories
const CATEGORY_META = {
  "administration": {
    heading: "Our Administration Team",
    sub: "School leadership and support staff guiding academics, operations, and student care across all departments."
  },
  "lower-secondary": {
    heading: "Our Lower Secondary Team",
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
                Lower Secondary
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

