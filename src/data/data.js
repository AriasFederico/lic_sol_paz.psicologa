// imagenes con nombre de profesionales
import imagen_ref from '../assets/ref.png'
//

const clinicInfo = {
  name: 'Lic. Sol Paz',
  phone_number: '',
  hours: 'Atención con turno previo',
  location: 'Atención presencial y online',
};

const { name, phone_number } = clinicInfo;

const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

// data estatica
export const landing_data = {
  header: {
    logo: {
      // en caso de usar logo
      src: '',
      href: '/',
      alt: clinicInfo.name,
      text: clinicInfo.name,
    },

    nav_links: [
      { id: 'about', label: 'Sobre mí', href: '#team' },
      { id: 'services', label: 'Servicios', href: '#services' },
      { id: 'faq', label: 'Preguntas frecuentes', href: '#faq' },
      { id: 'location', label: 'Contacto', href: '#location' },
    ],
    cta: {
      icon: 'message',
      label: 'Reserva de turnos',
      href: buildWaLink('Hola Lic. Sol Paz, quisiera consultar por un turno.'),
      size: 'sm',
      variant: 'secondary',
    },
  },

  hero: {
    badge: 'Psicoanálisis Infanto-Juvenil',
    title: 'Un espacio de escucha y acompañamiento',
    subtitle:'Brindo un espacio cálido, seguro y libre de juicios para acompañar a cada paciente respetando sus tiempos y particularidades.',
    ctas: [{
      icon: 'message',
      label: 'Agendar consulta',
      href: '#',
      size: '',
      variant: 'secondary',
    },
    {
      label: 'Servicios',
      href: '#services',
      size: '',
      variant: 'primary',}]
  },

  services: {
    title: 'Servicios y Áreas de Atención',
    subtitle: 'Acompañamiento especializado adaptado a cada etapa del desarrollo.',

    // cards
    items: [
      {
        icon: 'child',
        id: 1,
        title: 'Psicología Infantil',
        desc: 'Espacio terapéutico a través del juego y la palabra para abordar dificultades emocionales, conductuales o escolares en los más chicos.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink('Hola Lic. Sol Paz, quisiera consultar sobre la atención en Psicología Infantil.'),
        },
        delay: '.15',
      },
      {
        icon: 'user',
        id: 2,
        title: 'Atención a Púberes y Adolescentes',
        desc: 'Acompañamiento en etapas de cambio, duelo, manejo de ansiedades, identidad y vínculos en la transición hacia la juventud.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink('Hola Lic. Sol Paz, quisiera consultar sobre la atención en Psicología Infantil.'),
        },
        delay: '.15',
      },
      {
        icon: 'users',
        id: 3,
        title: 'Orientación a Padres y Familias',
        desc: 'Espacio de asesoramiento y escucha para padres frente a los desafíos en la crianza y la dinámica familiar.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: buildWaLink('Hola Lic. Sol Paz, quisiera consultar sobre Orientación a Padres/Familias.'),
        },
        delay: '.15',
      },]},



  team: {
    title: 'Profesional a cargo',
    subtitle: 'Atención personalizada y compromiso ético.',
    items: [
      {
        id: 2,
        image: {
          src: imagen_ref,
          alt: 'Profesional',
        },
        name: 'Lic. Sol Evelyn Paz',
        speciality: 'Psicóloga clínica',
        cta: {
          icon: 'message',
          label: 'Reservar turno',
          href: '#',
        },
      },
    ],
    about: [
      '¿Quién soy? — Soy Evelyn Paz, psicóloga clínica. Elegí la psicología porque siempre me interesó comprender lo que hay detrás de lo que sentimos, pensamos y hacemos.',
      'Creo profundamente en la importancia de tener un espacio donde podamos hablar sin sentirnos juzgados.',
      '¿Por qué elegí Psicología? — Elegí esta profesión porque quería acompañar a las personas en momentos en los que quizás no encuentran cómo poner en palabras lo que les pasa. Porque detrás de una conducta, un enojo, un silencio o una dificultad, siempre hay algo que necesita ser escuchado.',
      '¿Para qué estudié? — Me formé para poder brindar herramientas que ayuden a comprender lo que sucede, desarrollar recursos y transitar las dificultades de una manera diferente. La terapia no se trata solamente de "resolver un problema", sino también de conocerse, expresarse y construir nuevas posibilidades.',
      'Mi forma de trabajar — Busco construir un espacio cálido, seguro y sin juicios, donde cada persona pueda sentirse escuchada y comprendida. Trabajo respetando los tiempos y las particularidades de cada paciente.']
  },

  about: {
    title: 'Consultorio',
    subtitle: 'Subtítulo de referencia del contenido.',
    slides: [
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4907e4d45_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4907e4d45_generated_image.webp',
        alt: '2',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4ad7e40e5_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4ad7e40e5_generated_image.webp',
        alt: '1',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/09563da99_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/09563da99_generated_image.webp',
        alt: '4',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/7716add0e_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/7716add0e_generated_image.webp',
        alt: '3',
      },
    ],
  },

  reviews_section: {
    badge: {icon:'star', label:'escucha y acompañamiento'},
    title: 'Testimonios',
    subtitle:'Por razones éticas y de confidencialidad, los testimonios se comparten preservando la identidad de pacientes y familias.',

    items: [
      {
        id: 1,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Nos sentimos contenidos durante todo el proceso',
      },
      {
        id: 2,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Pudimos comprender mejor lo que le estaba pasando a nuestro hijo.',
      },
      {
        id: 3,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Encontramos un espacio de confianza para hablar',
      },
    ],

    cta: {
      label: 'Ver todas las opiniones en Google',
      href: '', // link a google coments
      variant: '',
    },
  },

  cta_section: {
    title: '¿Necesitás coordinar una primera entrevista?',
    text: 'Escribime para despejar tus dudas o agendar un turno. Construyamos juntos un espacio de escucha para acompañar a tu hijo o familia.',
    cta: [
      {
        icon: 'message',
        label: 'Reservar turno',
        variant: 'secondary',
        href:buildWaLink('Hola Lic. Sol Paz, quisiera agendar una primera entrevista.'),
      },
      {
        icon: '',
        label: 'Ubicación',
        variant: '',
        href:'#location'
      },
    ],
  },

  faq_section: {
    title: 'Preguntas frecuentes',

    items: [
      {
        id: 1,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 6,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 7,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  coverage_section: {
    title: 'Obras sociales y prepagas',
    items: [
      'OSDE',
      'OMINT',
      'OSPJN',
      'SANCOR',
      'AVALIAN',
      'AMFFA',
      'OPDEA',
      'OSMISS',
    ],
  },

  location_section: {
    title: 'Dónde estamos',
    subtitle: 'Texto de referencia — reemplazá con la dirección real.',
    coordenates: `34°56'21.2"S 57°58'26.9"W`,
    items: [
      {
        icon: 'location',
        name: 'Dirección',
        info: clinicInfo.location,
      },
      {
        icon: 'clock',
        name: 'Horarios',
        info: clinicInfo.hours,
      },
      { icon: 'tel', name: 'Teléfono', info: clinicInfo.phone_number },
    ],
    ctas: [
      { label: 'Google Maps', href: '#', variant: 'secondary' },
      { label: 'Reservar turno', href: '#', variant: 'primary' },
    ],
  },

  footer: {
    logo: clinicInfo.name,
    cta: { icon: 'message', label: 'Reserva de turnos', variant: '' },

    rrss: [
      { icon: 'facebook', href: 'https://www.facebook.com/groups/974306967539760/user/100000068052718/?locale=es_LA' },
      { icon: 'instagram', href: 'https://www.instagram.com/lic_sol_paz.psicologa/?hl=es-la' },
    ],

    copyright: `© 2026 ${clinicInfo.name}. Todos los derechos reservados.`,
  },
};
