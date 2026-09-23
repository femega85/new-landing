# PRD - FEMEGA Landing Page

## Información del Proyecto
**Fecha de Inicio:** 24 de Diciembre, 2025
**Cliente:** FEMEGA - Agencia de Marketing y Experiencias de Marca
**Objetivo:** Construir una landing page moderna, dinámica y atractiva para captar leads y mostrar casos de éxito

## Problema Original
Construir una página de aterrizaje moderna, dinámica, atractiva para FEMEGA basada en el contenido del PDF del brochure digital que cuente con los siguientes elementos:

1. Formulario de registro de 3 campos para leads (nombre, email y WhatsApp)
2. Galería tipo Slideshow para videos de casos de éxito
3. Slider con marcas de clientes
4. Botones de llamado a la acción en segmentos estratégicos
5. Chatbot de WhatsApp con Brevo Conversations
6. Footer con redes sociales
7. Galería multimedia de testimonios de clientes

## Información de FEMEGA

### Datos de la Empresa
- **Nombre:** FEMEGA
- **Tagline:** "¡El futuro de su marca, HOY!"
- **Descripción:** Agencia especializada en crear experiencias inolvidables para marcas
- **Teléfono:** +57 606 345 4050
- **Móvil:** +57 304 353 6326
- **Email:** consultor@femega.com
- **WhatsApp:** +57 304 353 6326

### Servicios
1. **Eventos Experienciales**
   - Eventos multimedia
   - Stands interactivos
   - Activaciones de marca
   - Convenciones empresariales

2. **Experiencias Digitales**
   - Sitios web
   - Recorridos virtuales 360°
   - Embudos de ventas automatizados
   - Realidad virtual y aumentada

3. **Creatividad Estratégica**
   - Consultorías
   - Benchmarking
   - Diseño de Marca
   - Investigación de mercados

### Redes Sociales
- LinkedIn: https://www.linkedin.com/in/femega/
- Instagram: https://www.instagram.com/femega/
- Facebook: https://www.facebook.com/femega/
- TikTok: https://www.tiktok.com/@femega
- YouTube: https://www.youtube.com/@Femega85
- WhatsApp: https://api.whatsapp.com/send?phone=573043536326

### Videos de Casos de Éxito (YouTube)
1. Memorias Convención Ventas Knauf 2025 - sPRUPnoTNp0
2. Video 10 años Knauf - q4Hed4XMz0A
3. Encuentro Líderes Knauf Colombia 2025 - zkB23Xl11k8
4. Megalabs - Latinos de Corazón - OKyarwBOuoU
5. Knauf - Convención de Ventas 2024 - ixzf5ePwkvw

### Clientes
KNAUF, SAINT-GOBAIN, AXA, Adidas, ABInBev, Samsung, DiDi, Isover, Megalabs, Drugstore, y más

## Arquitectura Técnica

### Frontend
- **Framework:** React 19.0.0
- **Estilos:** Tailwind CSS + Custom CSS
- **Componentes UI:** Shadcn UI
- **Routing:** React Router DOM
- **Notificaciones:** Sonner (toasts)
- **Iconos:** Lucide React

### Integraciones
1. **Retell AI** - Chatbot con Voz y AI Conversacional
   - API Key: key_3af3b584bd81cd31d03437dc77a5
   - Widget integrado en componente RetellChatWidget
   - **Capacidades:** Conversación por voz, chatbot inteligente, interacciones naturales
   - **Estado:** IMPLEMENTADO (requiere configuración de agente en dashboard)
   - **Nota:** Se requiere crear un agente en el dashboard de Retell AI para activar completamente

2. **Brevo Conversations** - Chatbot de WhatsApp/AI (Fallback)
   - ID: 640f80eb9bfdf06f4c16ec61
   - Script integrado en el componente Home
   - **Estado:** ACTIVO como respaldo

3. **Brevo API** - Captura de leads
   - API Key: [REDACTED]
   - Endpoint: https://api.brevo.com/v3/contacts
   - **Estado:** PENDIENTE (Mock implementado)

## Estructura de Componentes Implementados

### Componentes Principales
```
/app/frontend/src/
├── components/
│   ├── Header.jsx            ✅ Header sticky con navegación
│   ├── Hero.jsx              ✅ Sección hero con CTA y estadísticas
│   ├── Services.jsx          ✅ 3 servicios en cards con imágenes
│   ├── VideoShowcase.jsx     ✅ Carousel de videos de YouTube
│   ├── ClientsSlider.jsx     ✅ Slider automático de logos
│   ├── Testimonials.jsx      ✅ 5 testimonios con foto + texto
│   ├── ContactForm.jsx       ✅ Formulario de 3 campos (MOCK)
│   ├── Footer.jsx            ✅ Footer con redes sociales y enlaces
│   └── RetellChatWidget.jsx  ✅ Widget de Retell AI con voz
├── data/
│   └── mock.js               ✅ Datos mock para la landing page
├── App.js                    ✅ Componente principal con widgets
└── App.css                   ✅ Animaciones y estilos personalizados
```

### Características Implementadas

#### ✅ Completadas (Frontend Only - Mock Data)
1. **Header Responsive**
   - Navegación sticky con efecto scroll
   - Menú móvil con hamburguesa
   - Navegación smooth scroll a secciones

2. **Hero Section**
   - Título dinámico con animaciones
   - 2 CTAs principales
   - 4 estadísticas destacadas
   - Background con overlay gradient
   - Efectos de partículas animadas

3. **Sección de Servicios**
   - 3 cards con imágenes profesionales
   - Iconos de Lucide React
   - Lista de características con checkmarks
   - Hover effects y transiciones
   - CTA adicional al final

4. **Video Showcase**
   - Carousel de 5 videos de YouTube
   - Thumbnails navegables
   - Modal para reproducción
   - Navegación con flechas
   - Auto-play en modal

5. **Slider de Clientes**
   - 10 logos de marcas
   - Auto-scroll infinito
   - Efecto grayscale con hover
   - Gradientes laterales

6. **Testimonios**
   - 5 cards con testimonios
   - Fotos de clientes
   - Ratings con estrellas
   - Información de cargo y empresa
   - CTA al final

7. **Formulario de Contacto**
   - 3 campos: Nombre, Email, WhatsApp
   - Validación básica
   - Estado de carga
   - Mensaje de éxito
   - Iconos en inputs
   - **Mock:** Actualmente guarda en console.log

8. **Footer**
   - 4 columnas de información
   - 5 iconos de redes sociales
   - Enlaces a secciones
   - Información de contacto
   - Botón de WhatsApp
   - Copyright y términos

9. **Chatbot Retell AI con Voz**
   - Widget de Retell AI integrado
   - Capacidad de conversación por voz
   - Chatbot inteligente con IA conversacional
   - **Requiere:** Configuración de agente en dashboard de Retell AI

10. **Chatbot Brevo (Fallback)**
   - Script integrado en useEffect
   - Widget flotante automático
   - Funciona como respaldo

11. **Animaciones y Efectos**
    - FadeInUp, FadeIn, SlideIn
    - Hover effects en botones
    - Scroll smooth
    - Parallax backgrounds
    - Loading states

## Próximos Pasos (Backend Integration)

### P0 - Alta Prioridad - INMEDIATO

1. **Configuración de Retell AI**
   - [ ] Acceder al dashboard de Retell AI: https://dashboard.retellai.com
   - [ ] Crear un agente llamado "FEMEGA Assistant"
   - [ ] Configurar el prompt del agente con información de servicios de FEMEGA
   - [ ] Obtener el Agent ID generado
   - [ ] Actualizar RetellChatWidget.jsx con el Agent ID real (línea 9)
   - [ ] Probar el widget de voz en la landing page
   
   **Prompt sugerido para el agente:**
   ```
   Eres el asistente virtual de FEMEGA, una agencia de marketing especializada en crear experiencias inolvidables para marcas.
   
   Servicios principales:
   1. Eventos Experienciales - Diseñamos eventos y activaciones de marca
   2. Experiencias Digitales - Sitios web, recorridos virtuales 360°, realidad virtual
   3. Creatividad Estratégica - Consultorías, benchmarking, diseño de marca
   
   Tu objetivo es ayudar a los visitantes a:
   - Entender nuestros servicios
   - Agendar una consultoría gratuita
   - Responder preguntas sobre marketing y experiencias de marca
   
   Sé amable, profesional y entusiasta. Siempre ofrece agendar una consultoría al final de la conversación.
   
   Contacto: +57 304 353 6326 | consultor@femega.com
   ```

2. **Integración Backend con Brevo API**
   - [ ] Crear endpoint POST /api/leads
   - [ ] Integrar con Brevo API para crear contactos
   - [ ] Validación de datos en backend
   - [ ] Manejo de errores y respuestas
   - [ ] Testing de integración

3. **Base de Datos**
   - [ ] Crear modelo de Leads en MongoDB
   - [ ] Almacenar leads localmente además de Brevo
   - [ ] Timestamps y tracking

### P1 - Media Prioridad
1. **Analytics y Tracking**
   - [ ] Google Analytics integration
   - [ ] Pixel de Facebook
   - [ ] Tracking de conversiones

2. **Optimizaciones**
   - [ ] Lazy loading de imágenes
   - [ ] Optimización de performance
   - [ ] SEO meta tags
   - [ ] Open Graph tags

### P2 - Baja Prioridad
1. **Mejoras de UX**
   - [ ] Modo oscuro
   - [ ] Multiidioma (Inglés)
   - [ ] Animaciones adicionales
   - [ ] Blog section

2. **Admin Panel**
   - [ ] Dashboard para ver leads
   - [ ] Estadísticas de conversión
   - [ ] Gestión de testimonios

## Contratos API (Para Backend)

### POST /api/leads
**Descripción:** Crear un nuevo lead y enviarlo a Brevo

**Request Body:**
```json
{
  "nombre": "string (required)",
  "email": "string (required, valid email)",
  "whatsapp": "string (required, phone format)"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Lead registrado exitosamente",
  "data": {
    "id": "string",
    "nombre": "string",
    "email": "string",
    "whatsapp": "string",
    "createdAt": "timestamp"
  }
}
```

**Response Error (400):**
```json
{
  "success": false,
  "error": "Mensaje de error",
  "details": {}
}
```

### Integración con Brevo
```javascript
// Ejemplo de llamada a Brevo API
const response = await fetch('https://api.brevo.com/v3/contacts', {
  method: 'POST',
  headers: {
    'api-key': '[REDACTED]',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: formData.email,
    attributes: {
      NOMBRE: formData.nombre,
      WHATSAPP: formData.whatsapp
    },
    updateEnabled: false
  })
});
```

## Diseño y Estilo

### Paleta de Colores
- **Principal:** Orange (#f97316, #ea580c)
- **Secundario:** Pink (#ec4899)
- **Acento:** Purple (#a855f7)
- **Neutros:** Gray scale
- **Fondo:** White, Gray-50, Gray-900

### Tipografía
- **Familia:** Inter (weights: 400, 500, 600, 700)
- **Headings:** Bold, grandes
- **Body:** Regular, line-height 1.6

### Componentes Shadcn UI Utilizados
- Button
- Card
- Input
- Label
- Toaster (Sonner)

## Notas Técnicas

### Mock Data Location
Todos los datos mock están centralizados en `/app/frontend/src/data/mock.js` para facilitar la integración con backend.

### Brevo Conversations
El chatbot se carga automáticamente al montar el componente Home. El widget aparece en la esquina inferior derecha.

### Responsive Design
Toda la landing page es completamente responsive con breakpoints en:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### Performance
- Imágenes optimizadas desde Unsplash
- Videos cargados desde YouTube (lazy loading nativo)
- Animaciones con CSS y no JavaScript para mejor performance

## Historial de Cambios

### 24 de Diciembre, 2025
- ✅ Análisis del PDF de FEMEGA
- ✅ Extracción de información de Linktree y YouTube
- ✅ Diseño y creación de componentes React
- ✅ Integración de Brevo Conversations
- ✅ Implementación de formulario con mock
- ✅ Testing visual con screenshots
- ✅ Frontend completado con datos mock

## Recursos

### Imágenes Utilizadas
- 15 imágenes profesionales de Unsplash/Pexels
- Thumbnails de YouTube para videos
- Placeholders para logos de clientes

### APIs y Servicios
- Brevo Conversations: https://conversations-widget.brevo.com/
- Brevo API: https://api.brevo.com/v3/
- YouTube Embed: https://www.youtube.com/embed/

---

**Última Actualización:** 24 de Diciembre, 2025
**Estado del Proyecto:** Frontend Completo (Mock) | Backend Pendiente
