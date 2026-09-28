import { useEffect } from "react"
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
    // use the rAF timestamp for both start and current time (same clock)
    if (startTime === null) startTime = now
    const progress = Math.min((now - startTime) / duration, 1)
    // whole pixels only, avoids jitter with fractional scroll positions
    window.scrollTo(0, Math.round(startY * (1 - easeInOutCubic(progress))))

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
    } else {
      cancelScroll()
    }
  }

  activeFrame = requestAnimationFrame(step)
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // if the URL includes a hash (e.g. /about#our-story), let the target
    // page handle scrolling to that anchor instead of resetting to top
    if (hash) return

    // Individual album pages (/gallery/some_album): open at the top instantly
    if (pathname.startsWith("/gallery/")) {
      cancelScroll()
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      return
    }

    smoothScrollToTop()
  }, [pathname, hash])

  return null
}

export default ScrollToTop