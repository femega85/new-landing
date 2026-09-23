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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
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
                    className="w-full bg-gray-100 hover:bg-orange-500 text-gray-700 hover:text-white py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  >
                    Más Información
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para crear experiencias inolvidables?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y descubre cómo podemos llevar tu marca al siguiente nivel
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl"
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
