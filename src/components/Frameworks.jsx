import React from 'react';

const Frameworks = () => {
  return (
    <section className="frameworks section bg-dark" id="frameworks">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE SYSTEMS</span>
          <h2 className="section-title">Precision-Engineered <span className="text-gradient">Cognitive Frameworks</span></h2>
          <p className="section-subtitle">The vibeCascade Framework is built on rigorous research and real-world validation, not marketing hype or quick-fix promises.</p>
        </div>
        
        <div className="framework-image-container">
          <img src="/assets/images/harmonisations.jpeg" alt="Harmonisations" className="framework-image" />
        </div>
        <div className="frameworks-grid">
          <div className="framework-card">
            <div className="framework-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 className="framework-title">Cognitive Dissonance Activation</h3>
            <p>Create information gaps that the brain is neurologically compelled to resolve, triggering automatic engagement responses.</p>
            
            <ul className="framework-points">
              <li>
                <i className="fas fa-check-circle"></i>
                <div>Strategic incompleteness positioning</div>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <div>Expectation violation sequences</div>
              </li>
            </ul>
          </div>
          
          {/* Additional framework cards will be added here */}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;