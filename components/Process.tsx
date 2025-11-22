import React from 'react';
import { Content } from '../types';
import { motion } from 'framer-motion';

interface ProcessProps {
  content: Content['process'];
}

const Process: React.FC<ProcessProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {content.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Empty space for alternate side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Dot */}
                <div className="hidden md:flex w-2/12 justify-center relative z-10">
                  <div className="w-10 h-10 bg-white dark:bg-slate-900 border-4 border-primary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className={`relative p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group
                    ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end'}
                  `}>
                     {/* Mobile number badge */}
                    <div className="md:hidden absolute -top-4 left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 pt-2 md:pt-0 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;