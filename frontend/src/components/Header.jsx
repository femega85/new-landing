import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import femegaLogoWhite from '../assets/femega-logo.png';
import femegaLogoBlack from '../assets/femega-logo-black.png';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            style={{ padding: '0 0 40px 0' }}
          >
            <img
              src={isScrolled ? femegaLogoBlack : femegaLogoWhite}
              alt="FEMEGA logo"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              style={{
                transform: 'scale(3)',
                transformOrigin: 'left center',
                margin: '3em 0 0 0',
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('casos-exito')}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105"
            >
              Agenda Gratis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-xl mt-2">
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
                className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full font-medium"
              >
                Agenda Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
