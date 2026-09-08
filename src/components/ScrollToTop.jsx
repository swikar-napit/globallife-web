import { useEffect } from "react"
import { useLocation } from "react-router"

function smoothScrollToTop(duration = 500) {
  const startY = window.scrollY
  if (startY === 0) return
  const startTime = performance.now()
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

  const step = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY * (1 - easeInOutQuad(progress)))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // if the URL includes a hash (e.g. /about#our-story), let the target
    // page handle scrolling to that anchor instead of resetting to top
    if (hash) return

    smoothScrollToTop()
  }, [pathname, hash])

  return null
}

export default ScrollToTop