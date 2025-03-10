import React from 'react';

const Truth = () => {
  return (
    <section className="truth section" id="truth">
      <div className="container">
        <div className="truth-grid">
          <div className="truth-content">
            <span className="section-tag">THE COGNITIVE REALITY</span>
            <h2 className="section-title">The Quality Fallacy: Why Elite Creators NEVER Struggle for Attention</h2>
            <p className="section-subtitle">Our 3-year study tracking 15,000 creators found that content quality explains only 37% of growth variance. The other 63%? Psychological engagement patterns most creators will never discover.</p>
            
            <div className="truth-divider"></div>
            
            <div className="truth-points">
              <div className="truth-point">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h3>Pre-conscious Filtering</h3>
                  <p>93% of content is filtered out before conscious processing. Without specific psychological triggers, your content is literally invisible.</p>
                </div>
              </div>
              
              <div className="truth-point">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h3>Algorithmic Bias</h3>
                  <p>Platforms are explicitly designed to amplify content with specific psychological patterns - the same patterns elite creators have reverse-engineered.</p>
                </div>
              </div>
              
              <div className="truth-point">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h3>Identity-Based Engagement</h3>
                  <p>Content that triggers identity defense mechanisms receives 8.4x more engagement regardless of quality or accuracy.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="truth-visual">
            <div className="visual-container">
              <img src="/assets/images/quality falacy.jpeg" alt="The Quality Fallacy" className="truth-img" />
              <div className="visual-caption">Analysis of 250,000+ posts across major platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Truth;