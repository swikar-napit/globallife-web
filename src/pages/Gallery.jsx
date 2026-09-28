import { Link } from "react-router"
import { ALBUMS } from "../data/albums"
import "./Gallery.css"

function Gallery() {
  return (
    <>
      <section className="gl-hero">
        <div className="gl-hero-grid" aria-hidden="true"></div>
        <div className="gl-hero-glow" aria-hidden="true"></div>
        <div className="gl-hero-content">
          <nav className="gl-breadcrumb">
            <Link to="/">Home</Link>
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
            Browse our albums to see everyday learning, celebrations, and the
            moments that make Global Life School feel like home.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="gl-inner">
          <div className="gl-intro-header">
            <div className="gl-intro-text">
              <span className="gl-eyebrow">Photo Albums</span>
              <h2 className="gl-heading">Browse by Album</h2>
            </div>
            <div className="gl-count">
              <span className="gl-count-dot"></span>
              {ALBUMS.length} albums
            </div>
          </div>

          <div className="gl-album-grid">
            {ALBUMS.map((album) => (
              <Link
                to={`/gallery/${album.slug}`}
                className="gl-album-card"
                key={album.id}
                aria-label={`Open album: ${album.title}`}
              >
                {album.cover ? (
                  <img src={album.cover} alt={album.title} className="gl-album-img" loading="lazy" />
                ) : (
                  <div className="gl-album-empty">No photos found in this folder yet</div>
                )}
                <div className="gl-album-count-pill">
                  {album.photos.length} Photos
                </div>
                <div className="gl-album-overlay">
                  <span className="gl-album-tag">{album.tag}</span>
                  <h3 className="gl-album-title">
                    {album.title} {album.subtitle && <span className="gl-album-subtitle">{album.subtitle}</span>}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery