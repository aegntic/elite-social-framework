import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/assets/images/VibeCascade-logo-white.svg" alt="vibeCascade Framework" className="footer-logo-img" />
            </a>
            <p className="footer-description">
              The research-backed psychological framework for elite creators looking to achieve exponential social media growth through advanced algorithm psychology.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Framework</h3>
            <ul>
              <li><a href="#research">The Research</a></li>
              <li><a href="#frameworks">The Frameworks</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#application">Apply</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} vibeCascade Framework. All rights reserved.</p>
          <p className="footer-disclaimer">Results shown are based on actual framework implementations and may vary based on individual application.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;