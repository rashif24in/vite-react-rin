import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - About */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="text-white mb-2">About This Portfolio</h5>
            <p className="text-light mb-0 small" style={{ opacity: 0.8 }}>
              A modern showcase built with React, TypeScript, and Bootstrap.
            </p>
          </div>
          
          {/* Right Side - Connect With Me */}
          <div className="col-md-6 text-md-end">
            <h5 className="text-white mb-2">Connect With Me</h5>
            <div className="social-links">
              <a 
                href="mailto:rashif.ilmi@gmail.com" 
                className="text-light"
                title="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a 
                href="tel:+62896566062813" 
                className="text-light"
                title="Phone"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rashif-ilmi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="https://github.com/rashif24in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-3 bg-secondary" />
        
        <div className="text-center text-light small" style={{ opacity: 0.7 }}>
          <small>© {new Date().getFullYear()} Rashif Ilmi Nurzaman. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}