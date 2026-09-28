import { useEffect, useLayoutEffect, useRef } from "react"
import { useLocation } from "react-router"

let activeFrame = null
let stopListening = null

function cancelScroll() {
  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame)
    activeFrame = null
  }
  if (stopListening) {
    stopListening()
    stopListening = null
  }
}

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function smoothScrollToTop(duration = 600) {
  cancelScroll()

  const startY = window.scrollY
  if (startY === 0) return

  // Stop immediately if the user takes over (wheel / touch / keys),
  // otherwise the animation fights them and feels stop-and-go.
  const interrupt = () => cancelScroll()
  const events = ["wheel", "touchstart", "keydown", "mousedown"]
  events.forEach((e) => window.addEventListener(e, interrupt, { passive: true }))
  stopListening = () =>
    events.forEach((e) => window.removeEventListener(e, interrupt))

  let startTime = null

  const step = (now) => {
    if (startTime === null) startTime = now
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo(0, Math.round(startY * (1 - easeInOutCubic(progress))))

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
    } else {
      cancelScroll()
    }
  }

  activeFrame = requestAnimationFrame(step)
}

const normalize = (p) => p.replace(/\/+$/, "") || "/"

// Where the user was on the /gallery grid before opening an album
let savedGalleryY = 0

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const pathRef = useRef(normalize(pathname))
  const prevPathRef = useRef(null)

  // We handle scroll restoration ourselves, so the browser doesn't race us
  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  // Keep the current path in a ref *before* the browser reacts to the new
  // page's height, so scroll events from the route swap aren't saved as
  // the gallery position.
  useLayoutEffect(() => {
    pathRef.current = normalize(pathname)
  }, [pathname])

  // Remember the scroll position while the user is on the gallery grid
  useEffect(() => {
    const onScroll = () => {
      if (pathRef.current === "/gallery") savedGalleryY = window.scrollY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const path = normalize(pathname)
    const prevPath = prevPathRef.current
    prevPathRef.current = path

    // if the URL includes a hash (e.g. /about#our-story), let the target
    // page handle scrolling to that anchor instead of resetting to top
    if (hash) return

    // Album pages (/gallery/some_album): open at the top instantly
    if (path.startsWith("/gallery/")) {
      cancelScroll()
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      return
    }

    if (path === "/gallery") {
      // Coming back from an album: return to where the user left off
      if (prevPath && prevPath.startsWith("/gallery/")) {
        cancelScroll()
        const y = savedGalleryY
        window.scrollTo({ top: y, left: 0, behavior: "instant" })
        // one more try next frame in case the page hadn't finished laying out
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, left: 0, behavior: "instant" })
          savedGalleryY = y
        })
        return
      }
      // Coming from any other page: start fresh from the top
      savedGalleryY = 0
    }

    smoothScrollToTop()
  }, [pathname, hash])

  return null
}

export default ScrollToTop