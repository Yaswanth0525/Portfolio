// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Timeline />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;