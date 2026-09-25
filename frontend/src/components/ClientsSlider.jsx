import React, { useEffect, useRef } from 'react';
import { mockData } from '../data/mock';

const ClientsSlider = () => {
  const { clients } = mockData;
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Marcas que han vivido nuestras experiencias
          </h2>
          <p className="text-xl text-gray-600">
            Hemos trabajado con las marcas más reconocidas del mercado
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-12 overflow-x-hidden items-center"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <div className="w-44 h-20 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
