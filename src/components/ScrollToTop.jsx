import { useEffect } from "react"
import { useLocation } from "react-router"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // if the URL includes a hash (e.g. /about#our-story), let the target
    // page handle scrolling to that anchor instead of resetting to top
    if (hash) return

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname, hash])

  return null
}

export default ScrollToTop