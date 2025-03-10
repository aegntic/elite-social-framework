import React from 'react';

const Program = () => {
  return (
    <section className="program section" id="program">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE IMPLEMENTATION</span>
          <h2 className="section-title">The vibeCascade <span className="text-gradient">Implementation System</span></h2>
          <p className="section-subtitle">A comprehensive system for implementing advanced psychological frameworks that increase engagement while maintaining your authentic voice and expertise.</p>
        </div>
        
        <div className="program-grid">
          <div className="program-content">
            <h3 className="program-subtitle">What You'll Implement</h3>
            
            <div className="program-features">
              <div className="program-feature">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="feature-content">
                  <h4>The Complete Framework</h4>
                  <p>Full implementation system with all six cognitive frameworks, including detailed templates and examples.</p>
                </div>
              </div>
              
              <div className="program-feature">
                <div className="feature-icon">
                  <i className="fas fa-video"></i>
                </div>
                <div className="feature-content">
                  <h4>Implementation Modules</h4>
                  <p>8 detailed modules with step-by-step implementation guides for each framework component.</p>
                </div>
              </div>
              
              {/* Additional program features will be added here */}
            </div>
          </div>
          
          <div className="program-sidebar">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Framework Enrollment</h3>
                <p className="pricing-subtitle">Limited Spots Available</p>
              </div>
              
              <div className="pricing-amount">
                <span className="pricing-currency">$</span>
                <span className="pricing-value">997</span>
                <span className="pricing-period">one-time payment</span>
              </div>
              
              <a href="#application" className="btn btn-gradient btn-lg btn-block">Apply Now</a>
              
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>Complete Framework System</div>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>Implementation Community Access</div>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <div>Framework Swipe Files</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;