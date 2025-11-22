
import React, { useState, useEffect } from 'react';
import { Database, BarChart, Layout, Globe, Workflow, Bot, X, Check, ArrowRight } from 'lucide-react';
import { Content, Service, ServiceCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesProps {
  content: Content['services'];
  onSelectService: (category: ServiceCategory) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Database,
  BarChart,
  Layout,
  Globe,
  Workflow,
  Bot
};

interface ServiceCardProps {
  service: Service;
  isMobile?: boolean;
  ctaButton: string;
  onSelect: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isMobile = false, ctaButton, onSelect }) => {
  const Icon = iconMap[service.iconName] || Database;
  return (
    <motion.div
      whileHover={!isMobile ? { y: -5 } : {}}
      className={`bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all group cursor-pointer h-full flex flex-col`}
      onClick={() => onSelect(service)}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
        <Icon size={isMobile ? 20 : 24} />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 leading-tight">
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 md:mb-6 flex-grow line-clamp-3">
        {service.shortDescription}
      </p>
      <button className="text-primary font-medium text-sm md:text-base flex items-center group-hover:gap-2 transition-all mt-auto">
        {ctaButton} <ArrowRight size={16} className="ml-1" />
      </button>
    </motion.div>
  );
};

const Services: React.FC<ServicesProps> = ({ content, onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused && window.innerWidth < 768) {
        setMobileIndex((prev) => {
          const next = prev + 2;
          return next >= content.items.length ? 0 : next;
        });
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, content.items.length]);

  const handleServiceSelection = () => {
    if (!selectedService) return;

    let category: ServiceCategory = 'general';

    // Map Service IDs to Form Categories
    if (selectedService.id === 'data-eng' || selectedService.id === 'data-analytics') {
      category = 'data';
    } else if (selectedService.id === 'landing-pages' || selectedService.id === 'websites') {
      category = 'web';
    } else if (selectedService.id === 'automations' || selectedService.id === 'ai-consulting') {
      category = 'automation';
    }

    onSelectService(category);
    setSelectedService(null);
    
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to get icon safely
  const ModalIcon = selectedService ? iconMap[selectedService.iconName] : null;

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              ctaButton={content.ctaButton}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Mobile Carousel (2 items at a time) */}
        <div 
          className="md:hidden relative"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex"
            animate={{ x: `-${mobileIndex * 50}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {content.items.map((service) => (
              <div key={service.id} className="min-w-[50%] px-2">
                <ServiceCard 
                  service={service} 
                  isMobile={true} 
                  ctaButton={content.ctaButton}
                  onSelect={setSelectedService}
                />
              </div>
            ))}
          </motion.div>

          {/* Mobile Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(content.items.length / 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx * 2)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(mobileIndex / 2) === idx 
                    ? 'bg-primary w-6' 
                    : 'bg-slate-300 dark:bg-slate-700 w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 overflow-hidden border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                {ModalIcon && <ModalIcon className="text-primary mb-4" size={40} />}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-primary font-semibold text-lg">
                  {selectedService.price}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    O que está incluído:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                        <Check size={16} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleServiceSelection}
                  className="block w-full py-4 bg-primary hover:bg-primary-dark text-white text-center rounded-lg font-bold transition-colors shadow-lg"
                >
                  {content.modalCta}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
