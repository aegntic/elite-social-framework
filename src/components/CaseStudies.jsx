import React from 'react';

const CaseStudies = () => {
  return (
    <section className="case-studies section" id="case-studies">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">IMPLEMENTATION RESULTS</span>
          <h2 className="section-title">From Ignored to <span className="text-gradient">Algorithm Favorite</span></h2>
          <p className="section-subtitle">Real outcomes from framework implementers who applied our psychological principles.</p>
        </div>
        
        <div className="studies-grid">
          <div className="case-study-card">
            <div className="case-header">
              <img src="/assets/images/case-study-1.jpg" alt="Jamie T." className="case-avatar" />
              <div>
                <h4 className="case-name">Jamie T.</h4>
                <p className="case-role">Economic Analysis</p>
              </div>
            </div>
            
            <div className="case-metrics">
              <div className="metric">
                <span className="metric-value">14x</span>
                <span className="metric-label">Growth</span>
              </div>
              <div className="metric">
                <span className="metric-value">782%</span>
                <span className="metric-label">Engagement</span>
              </div>
              <div className="metric">
                <span className="metric-value">7</span>
                <span className="metric-label">Viral Posts</span>
              </div>
            </div>
            
            <div className="case-quote">
              <p>"I applied the Cognitive Dissonance and Authority Positioning frameworks to my economic analysis, leading to a 14x increase in high-value followers including fund managers and financial journalists."</p>
            </div>
            <div className="case-implementation">
              <h5>Implementation:</h5>
              <p>Jamie restructured his economic commentaries using precision communication architecture while incorporating strategic information gaps to drive engagement.</p>
            </div>
          </div>
          
          {/* Additional case study cards will be added here */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;