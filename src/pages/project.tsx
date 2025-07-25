import { useState } from 'react'
import { projects } from '../data/project'
import { Project } from '../models/project'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="w-100 py-5">
      <div className="container">
        <h1 className="text-center mb-5">My Projects</h1>
        
        <div className="row g-4">
          {projects.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card h-100">
                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map(tech => (
                      <span key={tech} className="badge bg-secondary me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img src={selectedProject.imageUrl} className="img-fluid rounded mb-3" alt={selectedProject.title} />
                    <h6>Technologies:</h6>
                    <div>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="badge bg-primary me-1 mb-1">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6>Responsibilities:</h6>
                    <ul>
                      {selectedProject.responsibilities?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}