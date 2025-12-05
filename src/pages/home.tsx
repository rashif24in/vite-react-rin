import { skills } from '../data/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { getYearExperience } from '../data/yearExperience'

export function Home() {
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <h5 className="text-primary">Hello, It's Me</h5>
              <h1 className="display-4 fw-bold">Rashif Ilmi Nurzaman</h1>
              <h3 className="text-muted mb-4">And I'm a <span className="text-primary">Software Engineer</span></h3>
              
              <p className="lead mb-4">
                Experienced Software Engineer with {getYearExperience()} years in backend development and leadership in .NET, SQL, and Agile. 
                Passionate about solving complex challenges and ready to excel as a Senior Developer or Tech Lead.
              </p>
              
              <div className="hero-buttons mb-4">
                <a
                  className="btn btn-primary btn-lg me-3"
                  href="https://www.canva.com/design/DAGe9OQVN1c/ZC1jUc74vudMZPRdpzDTAA/view?utm_content=DAGe9OQVN1c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b9da34a92"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download CV
                </a>
              </div>
              
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 text-center">
            <div className="hero-image">
              <img 
                src="/images/profile.jpg" 
                alt="Rashif Ilmi Nurzaman" 
                className="img-fluid rounded-circle"
                style={{ maxWidth: '400px', border: '5px solid #6e8efb' }}
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <h2 className="text-center mb-4">My Skills</h2>
            <div className="d-flex flex-wrap justify-content-center">
              {skills.map(skill => (
                <span key={skill} className="skill-badge badge bg-primary p-2 m-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}