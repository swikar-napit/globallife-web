import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"

const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Team = lazy(() => import("./pages/Team"))
const Academics = lazy(() => import("./pages/Academics"))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App