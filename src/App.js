import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Features from './components/Features';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleSystem from './components/ParticleSystem';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 30%, #2a2f4a 60%, #1e2a4a 100%)',
      fontFamily: 'Inter, sans-serif'
    }}>
      <ScrollProgress />
      <ParticleSystem />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;