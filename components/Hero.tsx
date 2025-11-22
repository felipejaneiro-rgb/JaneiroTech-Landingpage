import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 -z-20"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-normal opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-normal opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark dark:text-primary-light text-sm font-semibold mb-6 tracking-wide animate-pulse">
            IT Consultant & Developer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light italic">
            "{content.subtitle}"
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {content.ctaPrimary}
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;