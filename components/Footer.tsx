import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Content } from '../types';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-10">
           <div className="font-bold text-3xl text-white tracking-tight mb-2">
              Felipe<span className="text-primary">Janeiro</span>
          </div>
          <p className="text-base text-slate-500">IT Solutions for Business</p>
        </div>

        {/* Socials - Highlighted */}
        <div className="flex justify-center space-x-6 mb-10">
          <a 
            href={SOCIAL_LINKS.instagram} 
            target="_blank" 
            rel="noreferrer" 
            className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/30 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]"
            aria-label="Instagram"
          >
            <Instagram size={26} />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-slate-300 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#0077b5]/30"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} />
          </a>
           <a 
            href={SOCIAL_LINKS.email} 
            className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-slate-300 hover:bg-primary hover:text-[#f5f5dc] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/30"
            aria-label="Email"
          >
            <Mail size={26} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 w-full max-w-md text-center text-xs text-slate-600">
          &copy; {year} Felipe Janeiro. {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;