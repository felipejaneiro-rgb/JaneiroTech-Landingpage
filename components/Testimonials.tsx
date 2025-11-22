import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Content } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialsProps {
  content: Content['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.items.length]);

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{content.title}</h2>
        </div>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <Quote className="mx-auto text-secondary mb-6 opacity-50" size={48} />
              <p className="text-xl md:text-2xl text-slate-100 font-light italic mb-8 leading-relaxed">
                "{content.items[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">{content.items[currentIndex].name}</h4>
                <span className="text-secondary">{content.items[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-secondary w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;