import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import femegaLogoWhite from '../assets/logo-femega-slogan-white-esp-svg.svg';
import femegaLogoBlack from '../assets/logo-femega-slogan-black-esp-svg.svg';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const renderLanguageOptions = (id) => (
    <div
      id={id}
      role="group"
      aria-label="Opciones de idioma"
      className="mt-2 rounded-md border border-gray-200 bg-white p-1 shadow-lg"
    >
      <button
        type="button"
        aria-pressed="true"
        onClick={() => setIsLanguageSelectorOpen(false)}
        className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
      >
        Español
        <Check size={16} aria-hidden="true" />
      </button>
      <button
        type="button"
        disabled
        className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm text-gray-400"
      >
        English
        <span className="text-xs">Próximamente</span>
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-20 pt-4 pb-2 sm:pt-0 sm:pb-0">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={isScrolled ? femegaLogoBlack : femegaLogoWhite}
              alt="FEMEGA logo"
              className="h-auto w-[176px] max-w-full object-contain transition-all duration-300 md:w-[168px] lg:w-[196px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className={`text-[1.1rem] leading-5 font-bold transition-colors hover:text-[#d6007f] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('casos-exito')}
              className={`text-[1.1rem] leading-5 font-bold transition-colors hover:text-[#d6007f] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className={`text-[1.1rem] leading-5 font-bold transition-colors hover:text-[#d6007f] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`text-[1.1rem] leading-5 font-bold transition-colors hover:text-[#d6007f] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-black text-white hover:bg-[#d6007f] px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 shadow-none border border-white/10"
            >
              ¡Consultoría Gratis!
            </Button>
            <div className="relative">
              <button
                type="button"
                aria-label="Seleccionar idioma: Español"
                aria-expanded={isLanguageSelectorOpen}
                aria-controls="desktop-language-options"
                onClick={() => setIsLanguageSelectorOpen(!isLanguageSelectorOpen)}
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 ${
                  isScrolled
                    ? 'border-gray-300 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50'
                    : 'border-white/30 bg-black/20 text-white hover:border-white/60 hover:bg-white/10'
                }`}
              >
                <Globe size={18} />
              </button>
              {isLanguageSelectorOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-48">
                  {renderLanguageOptions('desktop-language-options')}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsLanguageSelectorOpen(false);
            }}
            className={`xl:hidden p-3 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 bg-white rounded-lg shadow-xl mt-2">
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-orange-500 text-left py-2 font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('casos-exito')}
                className="text-gray-700 hover:text-orange-500 text-left py-2 font-medium"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-700 hover:text-orange-500 text-left py-2 font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-orange-500 text-left py-2 font-medium"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-black text-white hover:bg-[#d6007f] w-full rounded-full font-medium shadow-none border border-white/10"
              >
                Agenda Gratis
              </Button>
              <div className="border-t border-gray-200 pt-3">
                <button
                  type="button"
                  aria-expanded={isLanguageSelectorOpen}
                  aria-controls="mobile-language-options"
                  onClick={() => setIsLanguageSelectorOpen(!isLanguageSelectorOpen)}
                  className="flex w-full items-center justify-between py-2 font-medium text-gray-700 hover:text-[#d6007f]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Globe size={18} aria-hidden="true" />
                    Español
                  </span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform ${isLanguageSelectorOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isLanguageSelectorOpen && renderLanguageOptions('mobile-language-options')}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
