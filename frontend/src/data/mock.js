// Mock data for FEMEGA landing page
import femegaTeam from '../assets/femega_team.jpg';
import adidasLogo from '../assets/logo_adidas.png';
import axaLogo from '../assets/logo_axa_xl.png';
import abinbevLogo from '../assets/logo_bavaria_ab.png';
import didiLogo from '../assets/logo_didi.png';
import drugstoreLogo from '../assets/logo_drugstore.png';
import isoverLogo from '../assets/logo_fiberglass-isover.png';
import knaufLogo from '../assets/logo_knauf.png';
import megalabsLogo from '../assets/logo_megalabs.png';
import oneLogo from '../assets/logo_one.png';
import saintGobainLogo from '../assets/logo_saint-gobain.png';
import samsungLogo from '../assets/logo_samsung.png';
import testimonyLinda from '../assets/testimony_BCB_Linda.jpg';
import testimonyFrank from '../assets/testimony_TXG_Frank.jpg';
import testimonyMichael from '../assets/testimony_AB-Inbev_Michael.jpg';
import testimonyPaola from '../assets/testimony_knauf_paola.jpg';
import testimonyJuan from '../assets/testimony_knauf_juan.jpg';
import testimonyDiana from '../assets/testimony_saint-gobain_diana.jpg';
import testimonyXimena from '../assets/testimony_Canales_Ximena.jpg';
import testimonyAlberto from '../assets/testimony_megalabs_alberto.jpg';

export const mockData = {
  company: {
    name: "FEMEGA",
    tagline: "¡El futuro de su marca, HOY!",
    description: "Somos una agencia especializada en crear experiencias inolvidables para tu marca",
    phone: "+57 606 370 7141",
    mobile: "+57 304 353 6326",
    email: "experiencias@femega.com",
    whatsapp: "573043536326",
    addresses: [
      "Cra 49 #94-12, Bogotá",
      "Pereira, Colombia"
    ]
  },

  hero: {
    title: "HACEMOS\nLO QUE LA I.A\nNO HACE",
    subtitle: "Experiencias diseñadas con amor por personas para otras personas",
    description: "Generamos ideas innovadoras y las convertimos en experiencias inolvidables para tu marca y sus audiencias.",
    ctaText: "¡Agenda Consultoría GRATIS!",
    image: femegaTeam,
    videoDesktop: "https://www.youtube.com/embed/yZRd3HJmHAg?autoplay=1&mute=1&loop=1&playlist=yZRd3HJmHAg&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080",
    videoMobile: "https://www.youtube.com/embed/yZRd3HJmHAg?autoplay=1&mute=1&loop=1&playlist=yZRd3HJmHAg&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
  },

  services: [
    {
      id: 1,
      icon: "Sparkles",
      title: "Eventos Experienciales",
      description: "Diseñamos eventos y activaciones de marca que conectan con las emociones de quienes los viven.",
      features: [
        "Eventos multimedia",
        "Stands interactivos",
        "Activaciones de marca",
        "Convenciones empresariales"
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwwfHx8fDE3NzQzNzk0MjJ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      icon: "Globe",
      title: "Experiencias Digitales",
      description: "Diseñamos experiencias web y contenidos multimedia que sumergen al usuario y elevan la conversión.",
      features: [
        "Sitios web",
        "Recorridos virtuales 360°",
        "Embudos de ventas automatizados",
        "Realidad virtual y aumentada"
      ],
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3NzQzNzk0Mjl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      icon: "Lightbulb",
      title: "Creatividad Estratégica",
      description: "Pensamos, reflexionamos, investigamos y analizamos para crear soluciones que rompen paradigmas.",
      features: [
        "Consultorías",
        "Benchmarking",
        "Diseño de Marca",
        "Investigación de mercados"
      ],
      image: "https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYWluc3Rvcm1pbmd8ZW58MHx8fHwxNzc0Mzc5NDM2fDA&ixlib=rb-4.1.0&q=85"
    }
  ],

  successVideos: [
    {
      id: 1,
      title: "Memorias Convención Ventas Knauf 2025",
      videoId: "2M-ETIgoQvE",
      thumbnail: "https://img.youtube.com/vi/2M-ETIgoQvE/maxresdefault.jpg",
      client: "Knauf"
    },
    {
      id: 2,
      title: "Video 10 años Knauf",
      videoId: "9boxFtb40Hw",
      thumbnail: "https://img.youtube.com/vi/9boxFtb40Hw/maxresdefault.jpg",
      client: "Knauf"
    },
    {
      id: 3,
      title: "Encuentro Líderes Knauf Colombia 2025",
      videoId: "zkB23Xl11k8",
      thumbnail: "https://img.youtube.com/vi/zkB23Xl11k8/maxresdefault.jpg",
      client: "Knauf"
    },
    {
      id: 4,
      title: "Megalabs - Latinos de Corazón",
      videoId: "OKyarwBOuoU",
      thumbnail: "https://img.youtube.com/vi/OKyarwBOuoU/maxresdefault.jpg",
      client: "Megalabs"
    },
    {
      id: 5,
      title: "Knauf - Convención de Ventas 2024",
      videoId: "ixzf5ePwkvw",
      thumbnail: "https://img.youtube.com/vi/ixzf5ePwkvw/maxresdefault.jpg",
      client: "Knauf"
    }
  ],

  clients: [
    { name: "SAINT-GOBAIN", logo: saintGobainLogo },
    { name: "AXA", logo: axaLogo },
    { name: "Adidas", logo: adidasLogo },
    { name: "ABInBev", logo: abinbevLogo },
    { name: "Samsung", logo: samsungLogo },
    { name: "DiDi", logo: didiLogo },
    { name: "Isover", logo: isoverLogo },
    { name: "Megalabs", logo: megalabsLogo },
    { name: "Drugstore", logo: drugstoreLogo },
    { name: "KNAUF", logo: knaufLogo },
    { name: "ONE", logo: oneLogo }
  ],

  testimonials: [
    {
      id: 1,
      name: "Linda Garzón",
      position: "Ex Gerente Comercial y de Mercadeo",
      company: "Greater Bogotá Convention Bureau",
      city: "Bogotá",
      image: testimonyLinda,
      text: "Trabaje con Federico en 2 de los eventos más importantes que ha recibido Bogotá en los últimos años, One Young World y la Cumbre Mundial de Premios Nobel de Paz. Fue una gran experiencia y el trabajo con el estuvo lleno de mucha creatividad, estrategia y trabajo en equipo.",
      rating: 5
    },
    {
      id: 2,
      name: "Frank Moran",
      position: "Founder",
      company: "The Experiential Group",
      city: "New York",
      image: testimonyFrank,
      text: "My team and I had the opportunity to work with Federico on a large global Samsung Latin American Conference that took place in Bogota. Federico was our main point of contact and he was an amazing partner in supporting our agency and the end client's goals. We were in Bogota so we had to put out faith and trust in Frederico and his team and they DID NOT DISAPPOINT!",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Castro",
      position: "Digital Insights Head HONES",
      company: "AB InBev",
      city: "San Salvador",
      image: testimonyMichael,
      text: "He tenido la oportunidad de trabajar muy de cerca con Federico. Desde que el acompaño nuestras Convenciones de Ventas, éstas fueron catapultadas a otro nivel. Desde el \"engagement\" con el personal, la claridad de los mensajes y los momentos de impacto, los equipos se fueron energizados del evento. Es el paquete completo!",
      rating: 5
    },
    {
      id: 4,
      name: "Paola Rojas",
      position: "Gerente de Marketing y Comunicaciones",
      company: "Knauf Colombia",
      city: "Bogotá",
      image: testimonyPaola,
      text: "Llevo más de 10 años trabajando con FEMEGA en este tipo de experiencias y la verdad somos amigos y aliados estratégicos. Estamos muy agradecidos con FEMEGA.",
      rating: 5
    },
    {
      id: 5,
      name: "Juan Felipe Sandoval",
      position: "Gerente General",
      company: "Knauf Colombia",
      city: "Bogotá",
      image: testimonyJuan,
      text: "El evento salió espectacular, la organización, la gente, muy recomendado. Lo tendremos 100% en cuenta para nuestros próximos eventos.",
      rating: 5
    },
    {
      id: 6,
      name: "Diana Correal",
      position: "Directora de Recursos Humanos",
      company: "Saint Gobain Colombia",
      city: "Bogotá",
      image: testimonyDiana,
      text: "En Saint Gobain tuvimos la oportunidad de trabajar con FEMEGA durante más de 7 años, creando experiencias para varias marcas del grupo como Fiberglass Isover, Saint Gobain Colombia y PAM. ¡Ellos son los mejores en este campo!",
      rating: 5
    },
    {
      id: 7,
      name: "Ximena Illera",
      position: "Gerente Comercial y de Mercadeo",
      company: "Canales Desarrolladores",
      city: "Bogotá",
      image: testimonyXimena,
      text: "Recomiendo Totalmente a FEMEGA, en cabeza de Federico, el cual es una persona cuidadosa, detallista y sobre todo profesional y con amplio conocimiento y experiencia en los temas digital -virtuales.",
      rating: 5
    },
    {
      id: 8,
      name: "Alberto Restrepo",
      position: "Ex Gerente de Linea Cardiovascular",
      company: "Megalabs Colombia",
      city: "Bogotá",
      image: testimonyAlberto,
      text: "Trabajamos con FEMEGA durante más de 3 años y gracias a sus experiencias virtuales pudimos crear nuestro Centro Virtual 360° que nos permitió llegar con lanzamientos digitales a un grupo de más de 800 médicos especialistas a nivel nacional.",
      rating: 5
    }
  ],

  socialMedia: {
    linkedin: "https://www.linkedin.com/in/femega/",
    instagram: "https://www.instagram.com/femega/",
    facebook: "https://www.facebook.com/femega/",
    tiktok: "https://www.tiktok.com/@femega",
    youtube: "https://www.youtube.com/@Femega85",
    whatsapp: "https://api.whatsapp.com/send?phone=573043536326&text=Hola%20quiero%20mas%20informaci%C3%B3n%20sobre%20FEMEGA"
  },

  stats: [
    { label: "Años de Experiencia", value: "15+" },
    { label: "Marcas Atendidas", value: "50+" },
    { label: "Experiencias Realizadas", value: "200+" },
    { label: "Satisfacción Cliente", value: "98%" }
  ]
};
