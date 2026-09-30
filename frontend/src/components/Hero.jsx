import React from 'react';
import { ArrowRight, Play, Award, BriefcaseBusiness, CalendarRange, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';
import heartIcon from '../assets/corazon_cool.png';
import experienceIcon from '../assets/experience.png';
import planetIcon from '../assets/planeta.png';
import targetIcon from '../assets/target.png';
import jacketImage from '../assets/FEMEGA_Chaqueta.png';

const Hero = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hero.videoDesktop || hero.videoMobile ? (
          <>
            <div className="hidden lg:block absolute inset-0">
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
            <div className="block lg:hidden absolute inset-x-0 top-24 z-0 aspect-video overflow-hidden">
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
                  objectPosition: 'center top'
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
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="hidden lg:block absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="block lg:hidden absolute inset-x-0 top-24 z-[1] aspect-video pointer-events-none" aria-hidden="true">
        <img
          src={jacketImage}
          alt=""
          className="absolute right-0 bottom-0 h-4/5 w-auto object-contain object-bottom"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2 w-full"
          style={{ background: 'linear-gradient(90deg, #34c6d7 0%, #a7d92a 18%, #f4d400 42%, #efb0c5 68%, #d8007f 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-0 lg:px-8 pt-[calc(56.25%+6rem)] pb-0 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-4 xl:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div
            className="text-white space-y-3 sm:space-y-4 rounded-none lg:rounded-2xl p-3 sm:p-4 mt-0"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.28)',
              width: '100%'
            }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-black leading-[0.9] whitespace-pre-line">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-lg text-white/90 font-bold leading-snug max-w-2xl">
              {hero.subtitle}
            </p>

            <p className="text-sm sm:text-base lg:text-sm text-white/80 leading-snug max-w-xl font-medium">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <Button
                onClick={() => {
                  const element = document.getElementById('casos-exito');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="h-10 px-4 py-2 text-sm sm:flex-1 bg-black text-white hover:bg-[#d6007f] rounded-full font-semibold transition-all hover:scale-105 shadow-none border border-white/10"
              >
                <Play className="mr-2" size={20} />
                Ver Casos de Éxito
              </Button>

              <Button
                onClick={scrollToContact}
                size="lg"
                className="h-10 px-4 py-2 text-sm sm:flex-1 bg-black text-white hover:bg-[#d6007f] rounded-full font-semibold transition-all hover:scale-105 shadow-none border border-white/10"
              >
                ¡Consultoría Gratis!
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 pt-3 sm:pt-4">
              {mockData.stats.map((stat, index) => {
                const statIcons = [Award, BriefcaseBusiness, CalendarRange, Smile];
                const Icon = statIcons[index] || Award;

                return (
                  <div key={index} className="flex flex-col items-center justify-center text-center">
                    <div className="mb-1 flex items-center justify-center text-white/80">
                      {index === 0 ? (
                        <img src={targetIcon} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
                      ) : index === 1 ? (
                        <img src={planetIcon} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
                      ) : index === 2 ? (
                        <img src={experienceIcon} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
                      ) : index === 3 ? (
                        <img src={heartIcon} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
                      ) : (
                        <Icon className="h-14 w-14 sm:h-16 sm:w-16" />
                      )}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-bold mt-1 text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block" aria-hidden="true"></div>
        </div>
      </div>

      <img
        src={jacketImage}
        alt="FEMEGA"
        className="hidden lg:block absolute right-0 bottom-0 z-10 h-[min(75vh,42vw)] xl:h-[min(80vh,42vw)] w-auto max-w-full object-contain object-bottom pointer-events-none"
      />

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
