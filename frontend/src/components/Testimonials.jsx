import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            La satisfacción de nuestros clientes es nuestro mejor indicador de éxito
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Quote className="text-orange-500" size={24} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={18}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
                    <div className="text-sm font-medium text-orange-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA After Testimonials */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres ser parte de nuestras historias de éxito?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl"
          >
            ¡Comienza Tu Transformación Hoy!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
