import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Truth from './components/Truth';
import Features from './components/Features';
import Research from './components/Research';
import CaseStudies from './components/CaseStudies';
import Frameworks from './components/Frameworks';
import Comparison from './components/Comparison';
import Program from './components/Program';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="global-notification" id="notification-bar">
        <div className="container">
          <p>Application window closes in <span id="countdown">47:09:03</span> — <a href="#application">Apply Now</a></p>
          <button id="close-notification"><i className="fas fa-times"></i></button>
        </div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <Truth />
        <Features />
        <Research />
        <CaseStudies />
        <Frameworks />
        <Comparison />
        <Program />
      </main>
      <Footer />
    </>
  );
};

export default App;