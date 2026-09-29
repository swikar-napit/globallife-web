import { useState, useEffect, useCallback, useRef } from "react"
import { Link, useParams, Navigate } from "react-router"
import { getAlbumBySlug } from "../data/albums"
import "./Gallery.css"

function AlbumPage() {
  const { slug } = useParams()
  const album = getAlbumBySlug(slug)

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const historyPushedRef = useRef(false)

  const photos = album ? album.photos : []
  const isLightboxOpen = lightboxIndex !== null

  const openLightbox = (index) => {
    // Push the history entry right here, in the click handler — not in a
    // useEffect. React's StrictMode intentionally runs effects twice in
    // development, which would push this entry twice and leave a hidden
    // extra step the back button has to silently consume first.
    window.history.pushState({ glLightbox: true }, "")
    historyPushedRef.current = true
    setLightboxIndex(index)
  }

  const closeLightbox = useCallback(() => {
    if (historyPushedRef.current) {
      // Consume the history entry we pushed when opening, so the
      // browser's back button doesn't land on an already-closed lightbox.
      // Clear the flag first so a second call can never go "back" twice
      // (which would leave the album page entirely).
      historyPushedRef.current = false
      window.history.back()
    } else {
      setLightboxIndex(null)
    }
  }, [])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length))
  }, [photos.length])

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
  }, [photos.length])

  // Reset the lightbox if the album itself changes (navigating between albums)
  useEffect(() => {
    setLightboxIndex(null)
  }, [slug])

  // Listen for the browser/mouse "back" button while the lightbox is open,
  // so it closes the lightbox instead of leaving the page. The history
  // entry itself is pushed once, in openLightbox — not here — so this
  // effect only attaches/detaches a listener and is safe to re-run.
  useEffect(() => {
    if (!isLightboxOpen) return

    const handlePopState = () => {
      historyPushedRef.current = false
      setLightboxIndex(null)
    }

    window.addEventListener("popstate", handlePopState)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("popstate", handlePopState)
      document.body.style.overflow = ""
    }
  }, [isLightboxOpen])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "ArrowLeft") showPrev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isLightboxOpen, closeLightbox, showNext, showPrev])

  if (!album) {
    return <Navigate to="/gallery" replace />
  }

  const activePhoto = lightboxIndex !== null ? photos[lightboxIndex] : null

  return (
    <>
      <section className="gl-hero gl-hero--compact">
        <div className="gl-hero-grid" aria-hidden="true"></div>
        <div className="gl-hero-glow" aria-hidden="true"></div>
        <div className="gl-hero-content">
          <nav className="gl-breadcrumb">
            <Link to="/">Home</Link>
            <div className="gl-breadcrumb-sep"></div>
            <Link to="/gallery">Gallery</Link>
            <div className="gl-breadcrumb-sep"></div>
            <span className="gl-breadcrumb-current">
              {album.title} {album.subtitle}
            </span>
          </nav>
          <span className="gl-hero-eyebrow">
            <span className="gl-hero-eyebrow-dot"></span>
            Life at Global Life School
          </span>
          <h1 className="gl-hero-title">{album.title}</h1>
          <p className="gl-hero-sub">
            A closer look at {album.title.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="gl-inner">
          <div className="gl-count-bar">
            <div className="gl-count">
              <span className="gl-count-dot"></span>
              {photos.length} photos
            </div>
          </div>

          {photos.length === 0 ? (
            <p className="gl-empty-msg">No photos found in this album's folder yet.</p>
          ) : (
            <div className="gl-grid gl-animate-fade">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  className="gl-card"
                  key={photo.filename}
                  onClick={() => openLightbox(index)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={`${album.title} photo ${index + 1}`}
                    className="gl-card-img"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {activePhoto && (
        <div className="gl-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button
            className="gl-lightbox-close"
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            aria-label="Close"
          >
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
            <img
              src={activePhoto.src}
              alt={`${album.title} photo ${lightboxIndex + 1}`}
              className="gl-lightbox-img"
            />
            <div className="gl-lightbox-caption">
              {album.title}
              <span className="gl-lightbox-count">{lightboxIndex + 1} / {photos.length}</span>
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

export default AlbumPage