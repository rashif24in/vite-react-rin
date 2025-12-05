export function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">About Me</h1>
          <h2 className="text-primary mb-3">Rashif Ilmi Nurzaman</h2>
          <h4 className="text-muted mb-4">Software Engineer</h4>
          <p className="lead mb-4">
            <p>
          I am a results-driven Software Engineer with over 4 years of experience 
          in backend web development and around 9 months of experience acting as a co-tech lead.
          My background combines strong technical execution with hands-on leadership,
          guiding teammates, handling client discussions, and ensuring timely, 
          high-quality project delivery.
            </p>
            <p>
          Specializing in .NET, C#, and SQL, I have built and maintained scalable systems 
          for enterprise clients while improving performance, reliability, and maintainability. 
          I thrive in collaborative environments, often bridging the gap between technical teams 
          and business stakeholders to align solutions with real-world needs.
            </p>
            <p>
          Approachable and supportive by nature, I take pride in helping others grow 
          and in creating an environment where teamwork drives results. I am now looking to contribute 
          my technical expertise and leadership experience to a Senior Developer or Tech Lead role, 
          continuing to build impactful systems and strengthen cross-team collaboration.
            </p>


          
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
            src="/images/rashif-jotaro-part4.png" 
            alt="Rashif Ilmi Nurzaman" 
            style={{ 
              maxWidth: '500px', 
              width: '100%', 
              borderRadius: '10px'
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
                  <p className="text-muted mb-1">Maranatha Christian University</p>
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