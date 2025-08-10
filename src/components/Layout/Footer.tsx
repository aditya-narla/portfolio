import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>I'm always interested in new opportunities and collaborations!</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-links">
            <a href="mailto:narla.a@northeastern.edu" className="footer-link">
              📧 narla.a@northeastern.edu
            </a>
            <a href="tel:+18574249599" className="footer-link">
              📱 (857) 424-9599
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-links">
            <a href="https://linkedin.com/in/aditya-narla" target="_blank" rel="noopener noreferrer" className="footer-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com/aditya-narla" target="_blank" rel="noopener noreferrer" className="footer-link">
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Aditya Narla. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;