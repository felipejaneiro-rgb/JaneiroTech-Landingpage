import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { Content, Language } from '../types';

interface NavbarProps {
  content: Content['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang, toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: content.home, href: '#hero' },
    { name: content.about, href: '#about' },
    { name: content.services, href: '#services' },
    { name: content.portfolio, href: '#portfolio' },
    { name: content.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-primary-dark dark:text-primary-light cursor-pointer tracking-tight">
            Felipe<span className="text-slate-900 dark:text-white">Janeiro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              <Languages size={20} className="mr-1" />
              <span className="uppercase font-bold text-xs">{lang}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center text-slate-600 dark:text-slate-300"
            >
              <span className="uppercase font-bold text-xs mr-1">{lang}</span>
            </button>
             <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;