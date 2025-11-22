
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTENT } from './constants';
import { Language, ServiceCategory } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isDark, setIsDark] = useState(true); // Default to Dark mode for tech feel
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ServiceCategory>('general');

  const content = CONTENT[lang];

  // Handle Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handle Scroll to Top Button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar 
        content={content.nav} 
        lang={lang} 
        setLang={setLang}
        toggleTheme={() => setIsDark(!isDark)}
        isDark={isDark}
      />
      
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Services 
          content={content.services} 
          onSelectService={setPreSelectedService}
        />
        <Process content={content.process} />
        <Portfolio content={content.portfolio} />
        <Testimonials content={content.testimonials} />
        <FAQ content={content.faq} />
        <Contact 
          content={content.contact} 
          initialService={preSelectedService}
        />
      </main>

      <Footer content={content.footer} />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg transition-all duration-300 z-40 ${
          showScrollUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;