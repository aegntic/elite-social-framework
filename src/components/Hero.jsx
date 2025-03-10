import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [countdown, setCountdown] = useState('47:09:03');

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      const parts = countdown.split(':');
      let hours = parseInt(parts[0], 10);
      let minutes = parseInt(parts[1], 10);
      let seconds = parseInt(parts[2], 10);
      
      seconds--;
      
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
          
          if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            clearInterval(timer);
          }
        }
      }
      
      setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span>RESEARCH-BACKED FRAMEWORK</span>
            </div>
            <h1 className="hero-title">Why Some Voices Cut Through While <span className="text-gradient">Others Get Ignored</span></h1>
            <p className="hero-subtitle">The controversial truth about what REALLY drives social media growth in 2025. Hint: it's not what 93% of creators think.</p>
            
            <div className="hero-actions">
              <a href="#application" className="btn btn-lg btn-gradient">Apply for Framework Access</a>
              <a href="#research" className="btn btn-lg btn-outline btn-with-icon">
                <i className="fas fa-brain"></i>
                <span>Explore the Research</span>
              </a>
            </div>
            
            <div className="social-proof">
              <div className="proof-icons">
                <img src="/assets/images/logos/forbes.svg" alt="Forbes" className="proof-logo" />
                <img src="/assets/images/logos/inc.svg" alt="Inc." className="proof-logo" />
                <img src="/assets/images/logos/fast-company.svg" alt="Fast Company" className="proof-logo" />
              </div>
              <p>"The most sophisticated system for leveraging social platform algorithms we've encountered."</p>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <img src="/assets/images/dashboard-mockup.png" alt="vibeCascade Framework Dashboard" className="main-visual" />
              
              <div className="stats-card">
                <div className="stat-item">
                  <span className="stat-value">572%</span>
                  <span className="stat-label">Average Engagement Increase</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">15,000+</span>
                  <span className="stat-label">Creators Analyzed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">97.8%</span>
                  <span className="stat-label">Implementation Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;