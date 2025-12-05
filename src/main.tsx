import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Add this line

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faEye } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faPhone, faEye, faLinkedin, faGithub)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)