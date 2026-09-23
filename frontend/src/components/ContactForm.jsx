import React, { useState } from 'react';
import { Send, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      // Mock API call - will be replaced with actual Brevo API integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Lead registered:', formData);
      
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
      toast.error('Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ¡Agenda Tu Consultoría Gratuita!
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubre cómo podemos transformar tu marca en una experiencia inolvidable.
                Nuestro equipo está listo para asesorarte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Consultoría Personalizada</h3>
                  <p className="text-gray-400">Analizamos tus necesidades y creamos una estrategia a medida</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sin Compromiso</h3>
                  <p className="text-gray-400">Primera consultoría completamente gratuita</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Respuesta Rápida</h3>
                  <p className="text-gray-400">Te contactamos en menos de 24 horas</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-3">O contáctanos directamente:</p>
              <div className="space-y-2">
                <p className="text-white">
                  <span className="text-gray-400">📞</span> +57 606 345 4050
                </p>
                <p className="text-white">
                  <span className="text-gray-400">📱</span> +57 304 353 6326
                </p>
                <p className="text-white">
                  <span className="text-gray-400">✉️</span> consultor@femega.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            {isSuccess ? (
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Completa tus datos
                  </h3>
                  <p className="text-gray-600">
                    Y comienza tu transformación hoy
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
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Agenda Tu Consultoría GRATIS
                      <Send className="ml-2" size={20} />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario aceptas recibir comunicaciones de FEMEGA
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
