import React from 'react';
import { FileDown } from 'lucide-react';
import gradientBar from '../assets/femega-gradient-bar.svg';
import brainIcon from '../assets/cerebro.png';
import heartIcon from '../assets/corazon_cool.png';
import salesIcon from '../assets/ventas-emociones.png';

const reasons = [
  {
    image: salesIcon,
    title: '¡Las emociones venden!',
    description: 'El marketing de experiencias conecta con las emociones y está comprobado que las ventas aumentan cuando emocionas a tus clientes.'
  },
  {
    image: brainIcon,
    title: 'Posiciona tu marca.',
    description: 'Cuando una marca conecta con los sentidos, genera experiencias memorables y fortalece el vínculo emocional con sus audiencias.'
  },
  {
    image: heartIcon,
    title: 'Fideliza a tus clientes.',
    description: 'Diseñar experiencias placenteras y sin fricciones en cada canal fidelizan a tus clientes y generan recompra.'
  }
];

const WhyExperiences = () => (
  <section id="por-que-experiencias" className="bg-black py-12 text-white md:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mx-auto mb-12 max-w-7xl text-center md:mb-16">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-5xl xl:whitespace-nowrap">
          ¿Por qué crear experiencias de marca?
        </h2>
        <img src={gradientBar} alt="" className="mb-4 h-auto w-96 max-w-full mx-auto" />
        <p className="text-xl text-white">
          El marketing de experiencias ha demostrado ser el más efectivo por estas 3 razones:
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8 lg:gap-12">
        {reasons.map(({ icon: Icon, image, title, description }) => (
          <article key={title} className="flex flex-col items-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center">
              {image ? (
                <img src={image} alt="" className="h-full w-full object-contain" />
              ) : (
                <Icon className="h-14 w-14 text-white" aria-hidden="true" strokeWidth={2.5} />
              )}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white md:min-h-10">
              {title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white xl:text-base">
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center md:mt-16">
        <a
          href="/portafolio.pdf"
          download
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-transparent bg-[#e90083] px-6 py-3 text-base font-semibold text-white shadow-none transition-colors hover:bg-[#15803d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black xl:text-lg"
        >
          Descarga nuestro portafolio
          <FileDown className="h-5 w-5 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default WhyExperiences;