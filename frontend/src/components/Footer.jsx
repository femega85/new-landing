import React from 'react';
import { Linkedin, Instagram, Facebook, Music2, Youtube } from 'lucide-react';
import femegaLogoSvg from '../assets/logo-femega-svg.svg';
import { mockData } from '../data/mock';

const Footer = () => {
  const { company, socialMedia } = mockData;

  const openWhatsApp = () => {
    window.open(socialMedia.whatsapp, '_blank');
  };

  return (
    <footer className="bg-[#000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="w-[280px] max-w-full">
              <img
                src={femegaLogoSvg}
                alt="FEMEGA logo"
                className="h-20 md:h-24 w-full object-contain"
              />
            </div>
            <p className="text-xl w-[280px] max-w-full" style={{ color: '#ffffff' }}>{company.tagline}</p>
            {/* Social Media */}
            <div className="flex gap-4 mt-8">
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #0A66C2 0%, #0077B5 35%, #00A0DC 100%)',
                  color: '#fff'
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 35%, #8134AF 68%, #515BD4 100%)',
                  color: '#fff'
                }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #1877F2 0%, #3B5998 100%)',
                  color: '#fff'
                }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #00F2EA 0%, #FF0050 50%, #A855F7 100%)',
                  color: '#fff'
                }}
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a
                href={socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                  color: '#fff'
                }}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('casos-exito');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('testimonios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-orange-400 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${company.phone}`} className="hover:text-orange-400 transition-colors inline-flex items-center gap-2" style={{ color: '#ffffff' }}>
                  <span aria-hidden="true">📞</span>
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${company.mobile}`} className="hover:text-orange-400 transition-colors inline-flex items-center gap-2" style={{ color: '#ffffff' }}>
                  <span aria-hidden="true">📱</span>
                  {company.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-orange-400 transition-colors inline-flex items-center gap-2" style={{ color: '#ffffff' }}>
                  <span aria-hidden="true">✉️</span>
                  {company.email}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: '#ffffff' }}>
              © {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-orange-400 transition-colors" style={{ color: '#ffffff' }}>
                Política de Privacidad
              </button>
              <button className="hover:text-orange-400 transition-colors" style={{ color: '#ffffff' }}>
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
