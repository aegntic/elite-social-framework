import React from 'react';

const Research = () => {
  return (
    <section className="research section bg-gray" id="research">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">THE DATA</span>
          <h2 className="section-title">The Growth Inflection Pattern: Three Years of Research</h2>
          <p className="section-subtitle">Our longitudinal study revealed why some creators experience exponential growth while others plateau, regardless of content quality.</p>
        </div>
        
        <div className="research-item">
          <div className="research-content">
            <span className="research-badge">KEY FINDING</span>
            <h3 className="research-title">The Cognitive Filter Effect</h3>
            <p className="research-text">We discovered that up to 93% of content is filtered out of consciousness before the audience even consciously processes it. This pre-cognitive filtering happens based on specific psychological triggers that most creators completely miss.</p>
            
            <ul className="research-points">
              <li>
                <i className="fas fa-check-circle"></i>
                <div>
                  <strong>Pattern Recognition:</strong> Content that creates mild cognitive tension is 7.4x more likely to break through pre-filtering mechanisms.
                </div>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <div>
                  <strong>Information Gaps:</strong> Strategic incompleteness creates what neuroscientists call "open loops" that the brain is compelled to resolve through engagement.
                </div>
              </li>
            </ul>
          </div>
          
          <div className="research-visual">
            <img src="/assets/images/cognitive-filter-diagram.png" alt="Cognitive Filter Effect Diagram" className="research-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;