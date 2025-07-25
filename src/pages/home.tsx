import { skills } from '../data/skills'

export function Home() {
  return (
    <div className="w-100">
      {/* Hero Section */}
      <div className="hero-section w-100">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
          <p className="lead">I build modern web applications with cutting-edge technologies</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-5 w-100">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h2>About Me</h2>
                  <a href="/about" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            {/* Add other cards similarly */}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-5 bg-light w-100">
        <div className="container">
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
  )
}