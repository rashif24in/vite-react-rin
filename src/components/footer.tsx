import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About This Portfolio</h5>
            <p className="text-muted">
              A modern showcase of my projects and skills built with React, TypeScript, and Bootstrap.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Connect With Me</h5>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="mailto:youremail@example.com" className="text-white">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-muted">
          <small>© {new Date().getFullYear()} Your Name. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}