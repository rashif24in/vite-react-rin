export function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>About Me</h1>
          <h2 className="text-primary">John Doe</h2>
          <h4>Software Developer</h4>
          <p className="lead mt-4">
            I'm a passionate developer with experience building web applications using modern technologies.
          </p>
          
          <div className="mt-5">
            <h3>Experience</h3>
            <p>5+ years of professional experience</p>
            
            <h3 className="mt-4">Education</h3>
            <p>Bachelor's in Computer Science</p>
            
            <h3 className="mt-4">Location</h3>
            <p>San Francisco, CA</p>
          </div>
        </div>
        <div className="col-lg-6">
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            className="img-fluid rounded-circle shadow" 
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h3>My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>Current Position</h4>
              <p>Senior Developer at XYZ Company</p>
              <p className="text-muted">2020 - Present</p>
            </div>
            <div className="timeline-item">
              <h4>Previous Position</h4>
              <p>Software Developer at ABC Corp</p>
              <p className="text-muted">2018 - 2020</p>
            </div>
            <div className="timeline-item">
              <h4>Education</h4>
              <p>Bachelor's in Computer Science</p>
              <p className="text-muted">2014 - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}