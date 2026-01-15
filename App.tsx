
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'achievements', 'career', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[120px] animate-soft-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-amber-900/10 rounded-full blur-[100px] animate-soft-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="about" className="py-24 md:py-40"><About /></section>
        <section id="skills" className="py-24 md:py-40 bg-slate-900/20"><Skills /></section>
        <section id="achievements" className="py-24 md:py-40"><Achievements /></section>
        <section id="career" className="py-24 md:py-40 bg-slate-900/20"><Career /></section>
        <section id="contact" className="py-24 md:py-40"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
