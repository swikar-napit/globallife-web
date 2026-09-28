import { Link } from "react-router"
import { ALBUMS } from "../data/albums"
import "./HomeGallery.css"

const FEATURED_ALBUMS = ALBUMS.slice(0, 3)

function HomeGallery() {
  return (
    <section className="hg-section">
      <div className="hg-inner">
        <div className="hg-header">
          <div className="hg-header-text">
            <span className="hg-eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <path d="M21 7v12a2 2 0 0 1-2 2H7" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m17 13-3.5-3.5L6 17" />
              </svg>
              Gallery
            </span>
            <h2 className="hg-heading">
              School life in <em>pictures</em>
            </h2>
            <p className="hg-sub">
              A look at celebrations, activities, achievements, and everyday
              moments from Global Life School.
            </p>
          </div>

          <Link to="/gallery" className="hg-more-btn">
            View More <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hg-grid">
          {FEATURED_ALBUMS.map((album) => (
            <Link
              to={`/gallery/${album.slug}`}
              className="hg-card"
              key={album.id}
              aria-label={`Open album: ${album.title}`}
            >
              {album.cover && (
                <img
                  src={album.cover}
                  alt={album.title}
                  className="hg-card-img"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="hg-card-overlay">
                <span className="hg-card-tag">{album.tag}</span>
                <h3 className="hg-card-title">
                  {album.title} {album.subtitle}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeGallery