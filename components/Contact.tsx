import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Content, ServiceCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  content: Content['contact'];
  initialService: ServiceCategory;
}

const Contact: React.FC<ContactProps> = ({ content, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    conditionalAnswer: ''
  });
  const [serviceType, setServiceType] = useState<ServiceCategory>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Update service type when initialService prop changes
  useEffect(() => {
    setServiceType(initialService);
    // Optional: Reset conditional answer when service changes automatically via prop
    setFormData(prev => ({ ...prev, conditionalAnswer: '' }));
  }, [initialService]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      // Clear error as user types if they fix it
      if (emailError) setEmailError('');
    }

    if (name === 'serviceType') {
      setServiceType(value as ServiceCategory);
      setFormData(prev => ({ ...prev, conditionalAnswer: '' })); // Reset conditional answer
    } else {
      // TypeScript Fix: Assert that name is a key of formData
      setFormData(prev => ({ ...prev, [name as keyof typeof prev]: value }));
    }
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError(content.form.emailError);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submit
    if (!validateEmail(formData.email)) {
      setEmailError(content.form.emailError);
      return;
    }

    setIsSubmitting(true);

    // Simulate network request and then open whatsapp client
    setTimeout(() => {
      let body = `Nome: ${formData.name}\n`;
      body += `Empresa: ${formData.company}\n`;
      body += `Email: ${formData.email}\n`;
      body += `Telefone: ${formData.phone}\n`;
      body += `Tipo de Serviço: ${content.form.services[serviceType]}\n`;
      
      if (serviceType === 'automation') {
        body += `Processo para automatizar: ${formData.conditionalAnswer}\n`;
      } else if (serviceType === 'data') {
        body += `Fontes de dados: ${formData.conditionalAnswer}\n`;
      } else if (serviceType === 'web') {
        body += `Possui design: ${formData.conditionalAnswer}\n`;
      }
      
      body += `\nMensagem:\n${formData.message}`;

      // Create WhatsApp Body with bold headers
      const whatsappBody = `*Novo Contato via Site*\n\n${body}`;
      const whatsappLink = `https://wa.me/5527996142978?text=${encodeURIComponent(whatsappBody)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappLink, '_blank');
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '', conditionalAnswer: '' });
      setServiceType('general');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/90 dark:bg-slate-950/90 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info & WhatsApp CTA */}
          <div className="text-left pt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 shadow-lg shadow-green-500/30">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{content.form.successTitle}</h3>
                  <p className="text-slate-300 mb-8">{content.form.successMessage}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary-light font-semibold hover:text-white transition-colors underline"
                  >
                    {content.form.sendNew}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.nameLabel}</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.companyLabel}</label>
                      <input 
                        type="text" 
                        name="company" 
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.emailLabel}</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleEmailBlur}
                          className={`w-full px-4 py-3 bg-slate-900/50 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-primary focus:ring-primary'}`}
                        />
                        {emailError && (
                          <span className="absolute -bottom-5 left-1 text-xs text-red-400 font-medium">{emailError}</span>
                        )}
                      </div>
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.phoneLabel}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.serviceLabel}</label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        required
                        value={serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="general" className="bg-slate-900">{content.form.services.general}</option>
                        <option value="data" className="bg-slate-900">{content.form.services.data}</option>
                        <option value="web" className="bg-slate-900">{content.form.services.web}</option>
                        <option value="automation" className="bg-slate-900">{content.form.services.automation}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  <AnimatePresence>
                    {serviceType !== 'general' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <label className="block text-sm font-medium text-primary-light mb-1 ml-1">
                          {serviceType === 'automation' && content.form.conditional.automation}
                          {serviceType === 'data' && content.form.conditional.data}
                          {serviceType === 'web' && content.form.conditional.web}
                        </label>
                        <input 
                          type="text" 
                          name="conditionalAnswer"
                          required
                          value={formData.conditionalAnswer}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800/80 border border-primary/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">{content.form.messageLabel}</label>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-slate-700 text-white rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        {content.form.sending}
                      </>
                    ) : (
                      content.form.submitButton
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;