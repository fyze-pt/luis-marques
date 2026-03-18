export type Language = "pt" | "en";

export interface Content {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    yearsPainter: string;
    yearsExperience: string;
    projects: string;
  };
  services: {
    title: string;
    wallPainting: {
      title: string;
      desc: string;
    };
    artisticMurals: {
      title: string;
      desc: string;
    };
    restoration: {
      title: string;
      desc: string;
    };
    serviceArea: {
      title: string;
      desc: string;
    };
  };
  about: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export const translations: Record<Language, Content> = {
  pt: {
    nav: {
      services: "Serviços",
      portfolio: "Portfólio",
      about: "Sobre",
      contact: "Contacto",
    },
    hero: {
      title: "Tradição e Qualidade em Cada Pincelada",
      subtitle:
        "Luís Marques: 20 anos a transformar espaços com excelência e dedicação. Experiência que se sente no detalhe.",
      cta: "Pedir Orçamento",
    },
    stats: {
      yearsPainter: "Anos de Experiência",
      yearsExperience: "Projetos de Pintura",
      projects: "Clientes Satisfeitos",
    },
    services: {
      title: "O que faço",
      wallPainting: {
        title: "Pintura de Paredes",
        desc: "Acabamentos impecáveis para interiores e exteriores com a mestria de 2 décadas.",
      },
      artisticMurals: {
        title: "Pintura Decorativa",
        desc: "Transformo espaços com técnicas de pintura decorativa personalizadas.",
      },
      restoration: {
        title: "Restauro e Detalhe",
        desc: "Recuperação de superfícies e atenção minuciosa aos pormenores clássicos.",
      },
      serviceArea: {
        title: "Área de Atuação",
        desc: "Trabalho em Cascais e arredores, servindo toda a região da margem norte do Tejo com dedicação.",
      },
    },
    about: {
      title: "Duas Décadas de Dedicação",
      text: "Chamo-me Luís Marques. Comecei a minha jornada no mundo da pintura há 20 anos, dominando as técnicas de pintura de paredes que garantem durabilidade e beleza. Ao longo destas duas décadas, consolidei-me como um pintor especializado, fundindo técnica e precisão em cada projeto.",
    },
    contact: {
      title: "Vamos conversar?",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar Mensagem",
    },
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Tradition and Quality in Every Brushstroke",
      subtitle:
        "Luís Marques: 20 years transforming spaces with excellence and dedication. Experience you can feel in every detail.",
      cta: "Get a Quote",
    },
    stats: {
      yearsPainter: "Years of Experience",
      yearsExperience: "Painting Projects",
      projects: "Happy Clients",
    },
    services: {
      title: "What I do",
      wallPainting: {
        title: "Wall Painting",
        desc: "Impeccable finishes for interiors and exteriors with 2 decades of mastery.",
      },
      artisticMurals: {
        title: "Decorative Painting",
        desc: "Transforming spaces with personalized decorative painting techniques.",
      },
      restoration: {
        title: "Restoration & Detail",
        desc: "Surface recovery and meticulous attention to classic details.",
      },
      serviceArea: {
        title: "Service Area",
        desc: "I work in the Cascais area and surroundings, serving the entire northern bank of the Tagus with dedication.",
      },
    },
    about: {
      title: "Two Decades of Dedication",
      text: "My name is Luís Marques. I began my journey in the world of painting 20 years ago, mastering wall painting techniques that ensure durability and beauty. Over these two decades, I have established myself as a specialized painter, merging technique and precision in every project.",
    },
    contact: {
      title: "Let's talk?",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
  },
};
