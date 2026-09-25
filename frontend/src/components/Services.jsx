import React from 'react';
import { Sparkles, Globe, Lightbulb, Check } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Sparkles: Sparkles,
  Globe: Globe,
  Lightbulb: Lightbulb
};

const Services = () => {
  const { services } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Creamos experiencias inolvidables que conectan tu marca con las personas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#d6007f] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="w-full bg-black text-white hover:bg-[#d6007f] py-3 rounded-lg font-medium transition-all duration-300 shadow-none border border-white/10"
                  >
                    Más Información
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="mt-20 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(244, 212, 0, 0.7) 0%, rgba(168, 217, 42, 0.7) 18%, rgba(52, 198, 215, 0.7) 42%, rgba(239, 176, 197, 0.7) 68%, rgba(216, 0, 122, 0.7) 100%), url(${mockData.hero.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para crear experiencias inolvidables?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo podemos llevar tu marca al siguiente nivel
            </p>
            <button
              onClick={scrollToContact}
              className="bg-black text-white hover:bg-[#d6007f] px-10 py-4 rounded-full text-lg font-black tracking-wide transition-all hover:scale-105 border border-white/10 shadow-none"
            >
              ¡Agenda Ahora GRATIS!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
