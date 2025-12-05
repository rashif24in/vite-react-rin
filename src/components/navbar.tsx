import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const location = useLocation()

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  // Auto-close navbar when route changes
  useEffect(() => {
    closeNav()
  }, [location])

  // Close navbar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('.navbar')
      const toggle = document.querySelector('.custom-toggler')
      
      if (isNavOpen && 
          navbar && 
          !navbar.contains(event.target as Node) &&
          toggle &&
          !toggle.contains(event.target as Node)) {
        closeNav()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isNavOpen])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeNav}>
          MyPortfolio
        </Link>
        
        {/* Toggle Button with Custom Animation */}
        <button 
          className="navbar-toggler custom-toggler"
          type="button" 
          onClick={toggleNav}
          aria-controls="navbarNav" 
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <div className={`animated-hamburger ${isNavOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        {/* Navbar Links with Custom Animation - Remove Bootstrap collapse classes */}
        <div 
          className={`navbar-collapse-custom ${isNavOpen ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/" 
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about" 
                onClick={closeNav}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
                to="/projects" 
                onClick={closeNav}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}