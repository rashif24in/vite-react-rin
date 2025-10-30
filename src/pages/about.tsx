export function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">About Me</h1>
          <h2 className="text-primary mb-3">Rashif Ilmi Nurzaman</h2>
          <h4 className="text-muted mb-4">Software Engineer</h4>
          <p className="lead mb-4">
            Results-driven and collaborative Software Engineer with over 3 years of experience 
            in backend web development, complemented by 9 months serving as a co-tech lead. 
            Skilled in guiding teammates, resolving client concerns, 
            and ensuring smooth project delivery while still staying hands-on 
            with development. Proficient in .NET, SQL, and Agile methodologies,
             with a proven track record of solving complex technical issues 
             and delivering reliable, high-quality solutions. 
             Known for being approachable, supportive, and dedicated to team success,
              I am eager to contribute my technical expertise and leadership experience 
              to a Senior Developer or Tech Lead role, where I can continue 
              building impactful systems and fostering strong collaboration 
              across teams and stakeholders.
          </p>
          
          <div className="mt-5">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Experience</h5>
                    <p className="card-text fw-bold">3+ Years</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Education</h5>
                    <p className="card-text fw-bold">Bachelor's Degree</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Location</h5>
                    <p className="card-text fw-bold">Bandung, ID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img 
            src="/images/profile.jpg" 
            alt="Rashif Ilmi Nurzaman" 
            className="img-fluid rounded-circle shadow-lg" 
            style={{ 
              maxWidth: '400px', 
              border: '8px solid #6e8efb',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          />
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <h2 className="text-center mb-5">My Journey</h2>
          <div className="timeline-container">
            {/* Current Position */}
            <div className="timeline-item mb-5">
              <div className="timeline-badge bg-primary"></div>
              <div className="timeline-content card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="card-title text-primary">Current Position</h4>
                    <span className="badge bg-primary">Present</span>
                  </div>
                  <h5 className="fw-bold">Software Engineer</h5>
                  <p className="text-muted mb-1">Berlian Sistem Informasi</p>
                  <small className="text-muted">2024 - Present</small>
                </div>
              </div>
            </div>

            {/* Previous Positions */}
            <div className="timeline-item mb-5">
              <div className="timeline-badge bg-success"></div>
              <div className="timeline-content card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-success mb-3">Previous Positions</h4>
                  
                  <div className="position-item mb-3 pb-3 border-bottom">
                    <h5 className="fw-bold">Loan Engineer</h5>
                    <p className="text-muted mb-1">Nawadata Solutions</p>
                    <small className="text-muted">2022 - 2024</small>
                  </div>
                  
                  <div className="position-item">
                    <h5 className="fw-bold">Backend Developer</h5>
                    <p className="text-muted mb-1">Gigaming</p>
                    <small className="text-muted">2020</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="timeline-item">
              <div className="timeline-badge bg-info"></div>
              <div className="timeline-content card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-info mb-2">Education</h4>
                  <h5 className="fw-bold">Bachelor's in Electrical Engineering</h5>
                  <p className="text-muted mb-1">University</p>
                  <small className="text-muted">2014 - 2019</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}