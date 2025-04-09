import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import ExtraCurricular from './components/ExtraCurricular';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <ExtraCurricular />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;