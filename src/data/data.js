// imagenes con nombre de profesionales
import imagen_ref from '../assets/profesional.webp';

//

const clinicInfo = {
  name: 'Lic. Sol Paz',
  phone_number: '',
  hours: 'Atención con turno previo',
  location: 'Avenida Corrientes 2330, 4to oficina 407',
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
      // { id: 'faq', label: 'Preguntas frecuentes', href: '#faq' },
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
    subtitle:
      'Brindo un espacio cálido, seguro y libre de juicios para acompañar a cada paciente respetando sus tiempos y particularidades.',
    ctas: [
      {
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
        variant: 'primary',
      },
    ],
  },

  services: {
    title: 'Servicios y Áreas de Atención',
    subtitle:
      'Acompañamiento especializado adaptado a cada etapa del desarrollo.',

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
          href: buildWaLink(
            'Hola Lic. Sol Paz, quisiera consultar sobre la atención en Psicología Infantil.',
          ),
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
          href: buildWaLink(
            'Hola Lic. Sol Paz, quisiera consultar sobre la atención en Psicología Infantil.',
          ),
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
          href: buildWaLink(
            'Hola Lic. Sol Paz, quisiera consultar sobre Orientación a Padres/Familias.',
          ),
        },
        delay: '.15',
      },
    ],
  },

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
      'Soy Sol Evelyn Paz, tengo 30 años y psicóloga y psicoanalista. Mi práctica clínica está orientada principalmente al trabajo con niños, púberes, adolescentes y sus familias, desde una perspectiva psicoanalítica. Elegí la clínica porque considero que cada persona tiene una historia singular y que, detrás de aquello que muchas veces aparece como un problema, un síntoma, una conducta o una dificultad, existe algo que merece ser escuchado. El psicoanálisis me permite sostener esa escucha sin reducir al sujeto a una etiqueta ni buscar respuestas rápidas para situaciones que requieren tiempo, palabras y elaboración.',
      'En mi trabajo clínico me interesa especialmente acompañar los distintos momentos de la infancia y la adolescencia, etapas atravesadas por importantes transformaciones subjetivas, emocionales y vinculares. Muchas veces son los padres quienes primero expresan una preocupación: cambios en la conducta, dificultades escolares, problemas en los vínculos, angustia, temores, conflictos familiares, dificultades para poner límites o situaciones que no saben cómo abordar. Por eso, considero fundamental incluir a los padres en el proceso. Trabajar con niños y adolescentes implica también poder escuchar a quienes los acompañan cotidianamente, brindarles un espacio para pensar aquello que les sucede en el vínculo con sus hijos y construir nuevas formas de acompañar. No se trata de ofrecer recetas universales sobre cómo criar, sino de poder detenerse a pensar cada situación en su particularidad. Cada niño, cada adolescente y cada familia tienen una historia, una dinámica y una manera singular de atravesar las dificultades.',
      'Desde mi perspectiva, poner límites también forma parte de acompañar. Un límite no es solamente una prohibición: puede ser una forma de cuidar, orientar y ofrecer un marco que permita al niño o al adolescente transitar diferentes etapas con mayor seguridad. Al mismo tiempo, considero importante poder diferenciar entre acompañar, sostener y habilitar espacios de autonomía.',
      'La adolescencia ocupa un lugar particularmente importante en mi práctica. Es un momento de cambios, preguntas y transformaciones en el que pueden aparecer conflictos con la familia, incertidumbres, dificultades en los vínculos, cambios en la manera de percibirse a sí mismo y preguntas respecto del propio lugar frente a los demás. Desde el psicoanálisis, considero que estos momentos no deben ser pensados únicamente desde la conducta observable. Es necesario poder escuchar qué está intentando expresar cada sujeto y qué lugar ocupa aquello que sucede dentro de su historia.',
      'Mi objetivo como profesional no es decirle a una persona qué debería sentir, pensar o hacer. Mi función es ofrecer un espacio de escucha clínica en el que pueda poner en palabras aquello que muchas veces resulta difícil expresar, darle un lugar a lo que genera malestar y comenzar a construir otras posibilidades. Entiendo el espacio terapéutico como un lugar de encuentro, pero también como un espacio de trabajo. La escucha psicoanalítica requiere tiempo, compromiso y apertura para poder interrogar aquello que se repite, aquello que genera sufrimiento y también aquello que todavía no puede ser puesto en palabras.',
      'Mi formación profesional es un recorrido continuo. Considero que la práctica clínica implica una formación permanente y que un psicólogo no deja nunca de estudiar, preguntarse y revisar su propia práctica. Por este motivo, continúo participando de espacios de formación y posgrado vinculados al psicoanálisis y a la clínica. Actualmente desarrollo mi recorrido profesional articulando la práctica clínica con la formación académica, buscando profundizar cada vez más en las herramientas necesarias para acompañar las diferentes demandas que llegan al consultorio.',
      'Creo profundamente en la importancia de construir un espacio terapéutico basado en la escucha, el respeto por la singularidad y la posibilidad de que cada sujeto pueda encontrar sus propias palabras para aquello que le sucede. Porque muchas veces consultar no significa que algo esté necesariamente "mal", sino que existe una pregunta, una preocupación o un malestar que necesita ser escuchado y es justamente allí donde comienza el trabajo clínico.',
    ],
  },

  reviews_section: {
    badge: { icon: 'star', label: 'escucha y acompañamiento' },
    title: 'Testimonios',
    subtitle:
      'Por razones éticas y de confidencialidad, los testimonios se comparten preservando la identidad de pacientes y familias.',

    items: [
      {
        id: 1,
        name: 'Nombre Apellido',
        rating: 5,
        review: 'Nos sentimos contenidos durante todo el proceso',
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
        review: 'Encontramos un espacio de confianza para hablar',
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
        href: buildWaLink(
          'Hola Lic. Sol Paz, quisiera agendar una primera entrevista.',
        ),
      },
      {
        icon: '',
        label: 'Ubicación',
        variant: '',
        href: '#location',
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
    coordenates: `34°36'17.5"S 58°23'59.6"W`,
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
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/groups/974306967539760/user/100000068052718/?locale=es_LA',
      },
      {
        icon: 'instagram',
        href: 'https://www.instagram.com/lic_sol_paz.psicologa/?hl=es-la',
      },
    ],

    copyright: `© 2026 ${clinicInfo.name}. Todos los derechos reservados.`,
  },
};
