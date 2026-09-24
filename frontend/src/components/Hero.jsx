import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt="FEMEGA Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-orange-600/80 to-pink-700/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
              {hero.subtitle}
            </p>

            <p className="text-lg text-white/80 max-w-xl">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
              >
                {hero.ctaText}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button
                onClick={() => {
                  const element = document.getElementById('casos-exito');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105"
              >
                <Play className="mr-2" size={20} />
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {mockData.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
