import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      
      {submitted && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Thank you for your message! I'll get back to you soon.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSubmitted(false)}
          ></button>
        </div>
      )}
      
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Other Ways to Connect</h5>
              <ul className="list-group list-group-flush">

                {/* <li className="list-group-item">
                  <i className="fas fa-envelope me-2"></i> email@example.com
                </li>
                <li className="list-group-item">
                  <i className="fas fa-phone me-2"></i> (123) 456-7890
                </li>
                <li className="list-group-item">
                  <i className="fab fa-linkedin me-2"></i> 
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </li> */}
                <li className="list-group-item">
                    <FontAwesomeIcon icon={['fas', 'envelope']} className="me-2" />
                    email@example.com
                </li>
                <li className="list-group-item">
                    <FontAwesomeIcon icon={['fas', 'phone']} className="me-2" />
                    (123) 456-7890
                </li>
                <li className="list-group-item">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="me-2" />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                </a>
                </li>

                <li className="list-group-item">
                  <i className="fab fa-github me-2"></i> 
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </li>
                <li className="list-group-item">
                  <i className="fab fa-twitter me-2"></i> 
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}