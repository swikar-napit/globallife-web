/* ------------------------------------------------------------------
   ALBUM DATA
   Shared by Gallery.jsx (the album grid) and AlbumPage.jsx (a single
   album's own page). Each album's photos are pulled in automatically
   from its folder in src/assets — add/remove/rename photos in the
   folder and nothing here needs to change.

   Folder names must match your actual folder names in src/assets
   exactly (case-sensitive on Linux/Mac).
------------------------------------------------------------------ */

function loadPhotos(globResult) {
  return Object.entries(globResult)
    .map(([path, src]) => ({
      filename: path.split("/").pop(),
      src,
    }))
    // natural sort so Evt_2 comes before Evt_10, etc.
    .sort((a, b) =>
      a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: "base" })
    )
}

function pickCover(photos, coverFilename) {
  const match = photos.find(
    (p) => p.filename.toLowerCase() === coverFilename.toLowerCase()
  )
  return match ? match.src : photos[0]?.src
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// One glob per folder — extend the extension list here if you ever add .png/.webp photos.
const hikingPhotos = loadPhotos(
  import.meta.glob("../assets/ChangunarayanHiking/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  })
)

const environmentPhotos = loadPhotos(
  import.meta.glob("../assets/Environment_Day/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  })
)

const preschoolPhotos = loadPhotos(
  import.meta.glob("../assets/Pre_school_graduation/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  })
)

const welcomePhotos = loadPhotos(
  import.meta.glob("../assets/Welcome_program/*.{jpg,jpeg,JPG,JPEG,png,PNG}", {
    eager: true,
    import: "default",
  })
)

const RAW_ALBUMS = [
  {
    id: "welcome-program",
    slug: "welcome_and_cultural",
    tag: "Events",
    title: "Welcome and Cultural Program",
    subtitle: "2083",
    cover: pickCover(welcomePhotos, "Cover.jpg"),
    photos: welcomePhotos,
  },
  {
    id: "preschool-graduation",
    slug: "pre_school_graduation",
    tag: "Events",
    title: "Pre-School Graduation Ceremony",
    subtitle: "2083",
    cover: pickCover(preschoolPhotos, "Pre_1.jpg"),
    photos: preschoolPhotos,
  },
  {
    id: "environment-day",
    slug: "environment_day",
    tag: "Events",
    title: "Environment Day Program",
    subtitle: "2083",
    cover: pickCover(environmentPhotos, "Evt_8.jpg"),
    photos: environmentPhotos,
  },
  {
    id: "changunarayan-hiking",
    slug: "changunarayan_hiking",
    tag: "Excursion",
    title: "Changunarayan Hiking",
    subtitle: "2083",
    cover: pickCover(hikingPhotos, "Hiking.jpg"),
    photos: hikingPhotos,
  },
]

// Slugs come straight from the "slug" field above — edit them there
// to change any album's URL (e.g. /gallery/welcome_and_cultural).
export const ALBUMS = RAW_ALBUMS

export function getAlbumBySlug(slug) {
  return ALBUMS.find((a) => a.slug === slug) || null
}