import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="logo">
              <img src="/assets/images/VibeCascade-logo.svg" alt="vibeCascade Framework" className="logo-img" id="logo-img" />
            </a>
            
            <nav className="main-nav">
              <ul className="nav-list">
                <li><a href="#research" className="nav-link">The Research</a></li>
                <li><a href="#frameworks" className="nav-link">Frameworks</a></li>
                <li><a href="#case-studies" className="nav-link">Implementation</a></li>
                <li><a href="#application" className="nav-link">Apply</a></li>
              </ul>
            </nav>
            
            <div className="header-actions">
              <a href="#application" className="btn btn-primary">Application Access</a>
            </div>
            
            <button 
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              id="mobile-toggle"
              onClick={toggleMobileMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <div className="container">
          <ul className="mobile-nav">
            <li><a href="#research" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>The Research</a></li>
            <li><a href="#frameworks" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Frameworks</a></li>
            <li><a href="#case-studies" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Implementation</a></li>
            <li><a href="#application" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Apply</a></li>
          </ul>
          <a href="#application" className="btn btn-primary btn-block mt-2" onClick={() => setMobileMenuOpen(false)}>Application Access</a>
        </div>
      </div>
    </>
  );
};

export default Header;