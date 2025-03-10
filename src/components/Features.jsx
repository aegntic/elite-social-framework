import React from 'react';

const Features = () => {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE FRAMEWORK COMPONENTS</span>
          <h2 className="section-title">Six Cognitive Triggers That <span className="text-gradient">Actually Work</span> in 2025</h2>
          <p className="section-subtitle">Unlike outdated "value-based" approaches, these sophisticated triggers operate at a neurological level.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="feature-title">Cognitive Dissonance Activation</h3>
            <p className="feature-desc">Strategic creation of information gaps that the brain is neurologically compelled to resolve. Research shows this activation increases engagement by up to 78%.</p>
            <a href="#application" className="feature-link">Implement This <i className="fas fa-arrow-right"></i></a>
          </div>
          
          {/* Additional feature cards will be added here */}
        </div>
      </div>
    </section>
  );
};

export default Features;