import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Projects } from './pages/project'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}