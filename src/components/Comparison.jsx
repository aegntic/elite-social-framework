import React from 'react';

const Comparison = () => {
  return (
    <section className="comparison section" id="comparison">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE DIFFERENCE</span>
          <h2 className="section-title">Why "Just Create Great Content" <span className="text-gradient">Is a Deliberate Lie</span></h2>
          <p className="section-subtitle">Elite creators know the secret psychological triggers that make content go viral—and they're actively hiding them from you.</p>
        </div>
        
        <div className="comparison-table">
          <div className="comparison-headers">
            <div className="comparison-header empty"></div>
            <div className="comparison-header traditional">
              <h3>Traditional "Value-First" Approach</h3>
              <p>What 93% of creators are doing</p>
            </div>
            <div className="comparison-header framework">
              <h3>VibeCascase Framework</h3>
              <p>What the elite 7% actually do</p>
            </div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-feature">
              <h4>Growth Rate</h4>
            </div>
            <div className="comparison-traditional">
              <p>Linear growth (if any). Often plateaus regardless of content quality.</p>
              <div className="comparison-rating low">
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
              </div>
            </div>
            <div className="comparison-framework">
              <p>Exponential growth pattern. Continues scaling as implementation improves.</p>
              <div className="comparison-rating high">
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
          
          {/* Additional comparison rows will be added here */}
        </div>
      </div>
    </section>
  );
};

export default Comparison;