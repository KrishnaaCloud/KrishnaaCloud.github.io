import React from 'react';
import './index.css';
import BackgroundGlow from './components/BackgroundGlow';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      <BackgroundGlow />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
