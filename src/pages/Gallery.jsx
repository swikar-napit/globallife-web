import { useState, useEffect, useCallback } from "react"
import "./Gallery.css"
import "../components/Cta.css"
import { Link } from "react-router"

// Swap these imports out for your real photos whenever you have them.
// Each entry just needs an image, a caption, and a category so the
// tabs below can filter correctly.
import photo1 from "../assets/global1.jpg"
import photo2 from "../assets/global2.jpg"
import photo3 from "../assets/global3.jpg"
import photo5 from "../assets/global5.jpg"
import principalPhoto from "../assets/principal.jpg"

const GALLERY_DATA = [
  { id: 1, src: photo5, caption: "Welcome Program", category: "events" },
  { id: 2, src: photo2, caption: "Dance Performance", category: "events" },
  { id: 3, src: photo3, caption: "Orientation Program", category: "events" },
  { id: 4, src: photo1, caption: "A Home Away From Home", category: "boarding" },
  { id: 5, src: photo3, caption: "Campus Grounds", category: "campus" },
  { id: 6, src: photo1, caption: "Boarding House", category: "boarding" },
  { id: 7, src: photo2, caption: "Cultural Day", category: "events" },
  { id: 8, src: photo5, caption: "Classroom Session", category: "academics" },
  { id: 9, src: principalPhoto, caption: "Our Principal", category: "academics" },
  { id: 10, src: photo3, caption: "Sports Day", category: "sports" },
  { id: 11, src: photo1, caption: "School Building", category: "campus" },
  { id: 12, src: photo2, caption: "Annual Function", category: "events" },
]

const TABS = [
  { id: "all", label: "All Photos" },
  { id: "campus", label: "Campus" },
  { id: "events", label: "Events" },
  { id: "academics", label: "Academics" },
  { id: "sports", label: "Sports" },
  { id: "boarding", label: "Boarding Life" },
]

function Gallery() {
  const [activeTab, setActiveTab] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    activeTab === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((p) => p.category === activeTab)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))
  }, [filtered.length])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])

  // Reset to a valid slide whenever the tab changes while the lightbox is open
  useEffect(() => {
    setLightboxIndex(null)
  }, [activeTab])

  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightboxIndex, showNext, showPrev])

  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      <section className="gl-hero">
        <div className="gl-hero-grid" aria-hidden="true"></div>
        <div className="gl-hero-glow" aria-hidden="true"></div>
        <div className="gl-hero-content">
          <nav className="gl-breadcrumb">
            <a href="/">Home</a>
            <div className="gl-breadcrumb-sep"></div>
            <span className="gl-breadcrumb-current">Gallery</span>
          </nav>
          <span className="gl-hero-eyebrow">
            <span className="gl-hero-eyebrow-dot"></span>
            Life at Global Life School
          </span>
          <h1 className="gl-hero-title">
            Our School <em>Gallery</em>
          </h1>
          <p className="gl-hero-sub">
            A look at everyday learning, celebrations, and the moments that
            make Global Life School feel like home.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="gl-inner">
          <div className="gl-tabs-wrapper">
            <div className="gl-tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`gl-tab ${activeTab === tab.id ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gl-intro-header">
            <div className="gl-intro-text">
              <span className="gl-eyebrow">Photo Gallery</span>
              <h2 className="gl-heading">
                {TABS.find((t) => t.id === activeTab)?.label}
              </h2>
            </div>
            <div className="gl-count">
              <span className="gl-count-dot"></span>
              {filtered.length} photos
            </div>
          </div>

          <div key={activeTab} className="gl-grid gl-animate-fade">
            {filtered.map((photo, index) => (
              <button
                type="button"
                className="gl-card"
                key={photo.id}
                onClick={() => openLightbox(index)}
                aria-label={`View photo: ${photo.caption}`}
              >
                <img src={photo.src} alt={photo.caption} className="gl-card-img" loading="lazy" />
                <div className="gl-card-overlay">
                  <span className="gl-card-caption">{photo.caption}</span>
                  <span className="gl-card-zoom" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-photo" style={{ backgroundImage: `url(${photo1})` }} aria-hidden="true" />
          <div className="cta-overlay" aria-hidden="true" />
          <div className="cta-content">
            <span className="cta-eyebrow">Now Enrolling</span>
            <h2 className="cta-heading">Want to see it in person?</h2>
            <p className="cta-text">
              Photos only tell part of the story. Come visit our campus and
              see what everyday life at Global Life School looks like.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-btn-primary">Schedule a Visit</Link>
              <Link to="/academics" className="cta-btn-secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {activePhoto && (
        <div className="gl-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="gl-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className="gl-lightbox-nav gl-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="gl-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.caption} className="gl-lightbox-img" />
            <div className="gl-lightbox-caption">
              {activePhoto.caption}
              <span className="gl-lightbox-count">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>

          <button
            className="gl-lightbox-nav gl-lightbox-next"
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery