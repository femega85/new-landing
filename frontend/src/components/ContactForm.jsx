import React, { useState } from 'react';
import { Send, User, Mail, Phone, CheckCircle, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { toast } from 'sonner';
import gradientBar from '../assets/femega-gradient-bar.svg';
import femegaPerson from '../assets/FEMEGA_Camisa_Verde.png';
import videoCover from '../assets/Portada-Video_KNAUF_Lanzamiento-CEB_2026.jpg';
import chatIcon from '../assets/chat.png';
import calendarIcon from '../assets/Calendario.png';

const ContactForm = () => {
  const [activePath, setActivePath] = useState(null);
  const [, setIsSchedulingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpenSchedulingModal = () => {
    setIsSchedulingModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.email || !formData.whatsapp) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.detail || 'No se pudo enviar el formulario. Intenta nuevamente.');
      }
      
      setIsSuccess(true);
      toast.success('¡Registro exitoso! Nos contactaremos pronto.');
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        whatsapp: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="pt-12 pb-12 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f4d400 0%, #a8d92a 18%, #34c6d7 42%, #efb0c5 68%, #d8007a 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #f4d400 0%, #a8d92a 18%, #34c6d7 42%, #efb0c5 68%, #d8007a 100%)'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid min-w-0 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Info */}
          <div
            className="text-white min-w-0 w-full space-y-8 rounded-2xl p-4 h-full overflow-hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.28)' }}
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold break-words mb-4 inline-block px-3 py-1 rounded-md"
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  boxShadow: 'none'
                }}
              >
                ¡Agenda tu consultoría gratuita!
              </h2>
              <img src={gradientBar} alt="" className="w-full max-w-full h-auto mb-4" />
              <p className="text-xl text-white font-bold break-words leading-relaxed">
                Descubre cómo podemos transformar tu marca en una experiencia inolvidable.
                Nuestro equipo está listo para asesorarte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Consultoría Personalizada</h3>
                  <p className="text-white/80">Analizamos tus necesidades y creamos una estrategia a medida</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Sin Compromiso</h3>
                  <p className="text-white/80">Primera consultoría completamente gratuita</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Respuesta Rápida</h3>
                  <p className="text-white/80">Te contactamos en menos de 24 horas</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="bg-white min-w-0 w-full rounded-3xl p-6 xl:p-10 shadow-2xl h-full overflow-hidden">
            {!activePath ? (
              <div className="flex h-full min-h-[470px] flex-col text-center">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-gray-900 break-words mb-3">
                      ¿Quieres tu consultoría gratuita?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-bold break-words">
                      Elige la opción que prefieras para que juntos diseñemos esa experiencias que sueñas para tu marca.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Button
                      type="button"
                      onClick={() => setActivePath('contact')}
                      className="px-4 py-3 w-full min-h-12 h-auto bg-black text-white hover:bg-[#d6007f] text-base xl:text-lg font-semibold rounded-lg transition-all shadow-none border border-white/10 whitespace-normal"
                    >
                      <span className="grid w-full grid-cols-[minmax(0,1fr)_36px] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_40px]">
                        <span className="min-w-0 text-center leading-tight">Quiero que me contacten</span>
                        <img src={chatIcon} alt="" className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10" />
                      </span>
                    </Button>
                    <Button
                      type="button"
                      onClick={handleOpenSchedulingModal}
                      className="px-4 py-3 w-full min-h-12 h-auto bg-[#e90083] text-white hover:bg-[#15803d] text-base xl:text-lg font-semibold rounded-lg transition-colors shadow-none border border-transparent whitespace-normal"
                    >
                      <span className="grid w-full grid-cols-[minmax(0,1fr)_36px] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_40px]">
                        <span className="min-w-0 text-center leading-tight">¡Agendar mi consultoría ahora!</span>
                        <img src={calendarIcon} alt="" className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10" />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="mt-6 grid min-h-[160px] grid-cols-[minmax(0,1fr)_minmax(88px,0.58fr)] items-end gap-2 md:mt-auto md:min-h-[245px] md:flex-1">
                  <div className="min-w-0 md:max-lg:mt-[2%]">
                    <p className="mb-2 px-1 text-left text-sm font-semibold leading-tight text-gray-900">
                      Mira nuestra última experiencia
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      aria-label="Reproducir video de las mejores experiencias"
                      className="group relative flex aspect-auto min-h-[136px] min-w-0 w-full items-center justify-center overflow-hidden rounded-2xl bg-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6007f] focus-visible:ring-offset-2 sm:aspect-video sm:min-h-0"
                    >
                      <img
                        src={videoCover}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-lg transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 fill-current text-black" aria-hidden="true" />
                      </span>
                    </button>
                  </div>
                  <img
                    src={femegaPerson}
                    alt="Representante de FEMEGA"
                    className="h-[160px] w-full max-w-[180px] justify-self-end object-contain object-bottom sm:h-[190px] md:h-full md:max-h-[220px]"
                  />
                </div>
              </div>
            ) : isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ¡Registro Exitoso!
                </h3>
                <p className="text-gray-600">
                  Gracias por tu interés. Nos contactaremos contigo muy pronto.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setActivePath(null)}
                  className="text-sm font-semibold text-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6007f] focus-visible:ring-offset-2 rounded-sm"
                >
                  ← Volver a opciones
                </button>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 break-words mb-2">
                      Dejanos tus datos
                  </h3>
                  <p className="text-gray-600 font-bold break-words">
                    ¡Creemos juntos esa gran experiencias para tu marca!
                  </p>
                </div>

                {/* Nombre Field */}
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-gray-700 font-medium">
                    Nombre Completo *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Juan Pérez"
                      className="pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Correo Electrónico *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                {/* WhatsApp Field */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-gray-700 font-medium">
                    WhatsApp *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                      className="pl-10 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                    className="px-4 py-3 w-full min-h-12 h-auto bg-black text-white hover:bg-[#d6007f] text-base sm:text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-none border border-white/10 whitespace-normal disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex flex-wrap items-center justify-center text-center leading-tight">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Agenda tu consultoría GRATIS!
                      <Send className="ml-2" size={20} />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario aceptas recibir comunicaciones de FEMEGA
                </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl border-0 bg-black p-0 text-white">
          <DialogTitle className="sr-only">Video de las mejores experiencias</DialogTitle>
          {isVideoModalOpen && (
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/SCvHd9uhipY?autoplay=1&rel=0"
                title="Video de las mejores experiencias"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
