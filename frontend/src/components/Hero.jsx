import React from 'react';
import { ArrowRight, Play, Award, BriefcaseBusiness, CalendarRange, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';
import heartIcon from '../assets/corazon_cool.png';
import experienceIcon from '../assets/experience.png';

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
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hero.videoDesktop || hero.videoMobile ? (
          <>
            <div className="hidden sm:block absolute inset-0">
              <iframe
                title="FEMEGA hero background video desktop"
                className="h-full w-full pointer-events-none"
                src={hero.videoDesktop || hero.videoMobile}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                frameBorder="0"
                style={{
                  filter: 'brightness(0.7) contrast(1.1)',
                  objectFit: 'contain',
                  objectPosition: 'center center'
                }}
              />
            </div>
            <div className="block sm:hidden absolute inset-x-0 top-0 z-0" style={{ height: '56.25vw', maxHeight: '72vh' }}>
              <iframe
                title="FEMEGA hero background video mobile"
                className="pointer-events-none"
                src={hero.videoMobile || hero.videoDesktop}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                frameBorder="0"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.7) contrast(1.1)',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transform: 'translateY(0px)'
                }}
              />
            </div>
          </>
        ) : (
          <img
            src={hero.image}
            alt="FEMEGA Hero"
            className="w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(225deg, rgba(244, 212, 0, 0.82) 0%, rgba(167, 217, 42, 0.72) 18%, rgba(52, 198, 215, 0.75) 42%, rgba(239, 176, 197, 0.72) 68%, rgba(216, 0, 122, 0.82) 100%)'
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-0 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div
            className="text-white space-y-8 rounded-2xl p-4 mt-24 sm:mt-0"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.28)',
              width: '100%'
            }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] whitespace-pre-line">
              {hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-black max-w-2xl">
              {hero.subtitle}
            </p>

            <p className="text-lg text-white/80 max-w-xl font-medium">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => {
                  const element = document.getElementById('casos-exito');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-black text-white hover:bg-[#d6007f] px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105 shadow-none border border-white/10"
              >
                <Play className="mr-2" size={20} />
                Ver Casos de Éxito
              </Button>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-black text-white hover:bg-[#d6007f] px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105 shadow-none border border-white/10"
              >
                ¡Consultoría Gratis!
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {mockData.stats.map((stat, index) => {
                const statIcons = [Award, BriefcaseBusiness, CalendarRange, Smile];
                const Icon = statIcons[index] || Award;

                return (
                  <div key={index} className="flex flex-col items-center justify-center text-center">
                    <div className="mb-3 flex items-center justify-center text-white/80">
                      {index === 2 ? (
                        <img src={experienceIcon} alt="" className="h-24 w-24 object-contain" />
                      ) : index === 3 ? (
                        <img src={heartIcon} alt="" className="h-24 w-24 object-contain" />
                      ) : (
                        <Icon className="h-24 w-24" />
                      )}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 mt-1 text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
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
