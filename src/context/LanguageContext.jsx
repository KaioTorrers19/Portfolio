import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  pt: {
    nav: [
      { name: "Trabalhos", link: "#work" },
      { name: "Skills", link: "#skills" },
      { name: "Experiencia", link: "#experience" },
    ],
    hero: {
      beforeSlide: "Moldando",
      words: ["Ideias", "Conceitos", "Codigos"],
      line2: "em projetos reais",
      line3: "que entregam resultados",
      subtitle:
        "Oi, Meu nome é Kaio, Desenvolvedor Pronto para lidar com qualquer desafios.",
      cta: "trabalhos",
    },
    counters: [
      { value: 5, suffix: "+", label: "Anos de Experiência" },
      { value: 5, suffix: "+", label: "Clientes Satisfeitos" },
      { value: 17, suffix: "+", label: "Projetos Realizados" },
      { value: 100, suffix: "%", label: "Taxa de retenção de clientes" },
    ],
    showcase: {
      p1Title:
        "Solução Digital para Totem Vertical – Projeto Realizado para a The LED",
      p1Desc:
        "App em React com backend integrado (MySQL + API) e carrinho de compras funcional.",
      p2Title:
        "Fluxos Automatizados com n8n: Otimizando Processos de Marketing",
      p2Desc:
        "Automação de fluxos de trabalho e integração de APIs com n8n para otimizar tarefas e campanhas.",
      p3Title:
        "Sommelier Digital: Software Interativo para Totem Vertical de Vinhos",
      p3Desc:
        "Aplicação interativa para totens verticais com recomendação de vinhos e interface intuitiva.",
      p4Title: "Landing Page Responsiva – Zigen",
      p4Desc:
        "Landing page desenvolvida com Vite e Tailwind, incluindo animações construídas em CSS puro. (Clique na imagem para Visualizar)",
      p5Title:
        "Site Institucional Escuela Taller – Ayuntamiento de San Martín del Rey Aurelio",
      p5Desc:
        "Site oficial responsivo desenvolvido para o programa Escuela Taller do Ayuntamiento de San Martín del Rey Aurelio (Astúrias, Espanha). (Clique na imagem para Visualizar)",
    },
    abilities: [
      {
        title: "Foco Na Qualidade",
        desc: "resultados de alta qualidade, mantendo a atenção a cada detalhe.",
      },
      {
        title: "Comunicação Clara",
        desc: "Mantendo você atualizado a cada passo para garantir transparência e clareza.",
      },
      {
        title: "Entrega no prazo",
        desc: "Garantir que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes",
      },
    ],
    experience: {
      sectionTitle: "Experiência Profissional",
      sectionSub: "💼 Minha Carreira",
      responsibilitiesLabel: "Responsabilidades",
      cards: [
        {
          review:
            "Durante meu período na empresa The Led, atuei no planejamento e desenvolvimento de diversos softwares, tanto para uso interno quanto para clientes. Também contribuí com a criação de interfaces e protótipos no Figma, colaborando com o time em diferentes etapas dos projetos.",
          title: "Developer",
          date: "Abril 2022 - Out 2024",
          responsibilities: [
            "Soluções digitais responsivas e funcionais para web e totens verticais utilizando front e back.",
            "Contribuindo ativamente no desenvolvimento e aprimoramento de interfaces UI/UX.",
            "Aprimoramento Contínuo e Suporte de Software.",
          ],
        },
        {
          review:
            "Na Beeid, atuei no desenvolvimento e suporte de softwares 3D utilizados em experiências imersivas e interativas. Também colaborei com a criação de interfaces no Figma e realizei manutenções em máquinas.",
          title: "Developer Junior",
          date: "Setembro 2022 - Jun 2023",
          responsibilities: [
            "manutenção preventiva e corretiva de máquinas, garantindo o bom funcionamento dos equipamentos.",
            "Configuração e preparação de NUCs (microcomputadores) para ambientes de produção.",
            "Desenvolvimento de softwares personalizados.",
          ],
        },
        {
          review:
            "Tive a oportunidade de atuar como estagiário na empresa Beeid, onde aprimorei minhas habilidades em debug de sistemas, desenvolvimento e manutenção de software e também no suporte técnico a máquinas.",
          title: "Estágiario",
          date: "Março 2022 - Set 2022",
          responsibilities: [
            "Apoio técnico ao time de desenvolvimento, auxiliando na resolução de problemas, testes de funcionalidades",
            "Depuração de Códigos .",
          ],
        },
      ],
    },
    contact: {
      title: "Entre em contato",
      sub: "💬Tem alguma pergunta ou ideias? Vamos conversar! 🚀",
      nameLabel: "Seu nome",
      namePlaceholder: "Qual é o seu nome?",
      emailLabel: "Seu Email",
      emailPlaceholder: "Qual é o seu endereço de email?",
      messageLabel: "Sua mensagem",
      messagePlaceholder: "Como posso te ajudar?",
      sending: "enviando...",
      send: "Enviar",
      successMsg: "Mensagem enviada com sucesso!",
      errorMsg: "Erro ao enviar mensagem. Tente novamente.",
    },
    footer: {
      terms: "Termos & Condições",
      rights: "Kaio Torres. Todos os direitos reservados.",
    },
  },

  es: {
    nav: [
      { name: "Proyectos", link: "#work" },
      { name: "Skills", link: "#skills" },
      { name: "Experiencia", link: "#experience" },
    ],
    hero: {
      beforeSlide: "Transformando",
      words: ["Ideas", "Enfoque", "Código"],
      line2: "en proyectos reales",
      line3: "que entregan resultados",
      subtitle:
        "Hola, me llamo Kaio, desarrollador listo para afrontar cualquier desafío.",
      cta: "proyectos",
    },
    counters: [
      { value: 5, suffix: "+", label: "Años de Experiencia" },
      { value: 5, suffix: "+", label: "Clientes Satisfechos" },
      { value: 17, suffix: "+", label: "Proyectos Realizados" },
      { value: 100, suffix: "%", label: "Tasa de retención de clientes" },
    ],
    showcase: {
      p1Title:
        "Solución Digital para Tótem Vertical – Proyecto Realizado para The LED",
      p1Desc:
        "App en React con backend integrado (MySQL + API) y carrito de compras funcional.",
      p2Title:
        "Flujos Automatizados con n8n: Optimizando Procesos de Marketing",
      p2Desc:
        "Automatización de flujos de trabajo e integración de APIs con n8n para optimizar tareas y campañas.",
      p3Title:
        "Sommelier Digital: Software Interactivo para Tótem Vertical de Vinos",
      p3Desc:
        "Aplicación interactiva para tótems verticales con recomendación de vinos e interfaz intuitiva.",
      p4Title: "Landing Page Responsiva – Zigen",
      p4Desc:
        "Landing page desarrollada con Vite y Tailwind, incluyendo animaciones construidas en CSS puro. (Haz clic en la imagen para ver)",
      p5Title:
        "Sitio Web Institucional Escuela Taller – Ayuntamiento de San Martín del Rey Aurelio",
      p5Desc:
        "Sitio web oficial responsivo desarrollado para la Escuela Taller del Ayuntamiento de San Martín del Rey Aurelio (Asturias, España). (Haz clic en la imagen para ver)",
    },
    abilities: [
      {
        title: "Enfoque en la Calidad",
        desc: "resultados de alta calidad, cuidando cada detalle.",
      },
      {
        title: "Comunicación Clara",
        desc: "Manteniéndote al día en cada paso para garantizar transparencia y claridad.",
      },
      {
        title: "Entrega a Tiempo",
        desc: "Garantizar que los proyectos se completen a tiempo, con calidad y atención al detalle",
      },
    ],
    experience: {
      sectionTitle: "Experiencia Profesional",
      sectionSub: "💼 Mi Carrera",
      responsibilitiesLabel: "Responsabilidades",
      cards: [
        {
          review:
            "Durante mi etapa en la empresa The Led, participé en la planificación y desarrollo de varios softwares, tanto para uso interno como para clientes. También colaboré en la creación de interfaces y protótipos en Figma, trabajando con el equipo en distintas fases de los proyectos.",
          title: "Developer",
          date: "Abril 2022 - Oct 2024",
          responsibilities: [
            "Soluciones digitales responsivas y funcionales para web y tótems verticales utilizando front y back.",
            "Contribuyendo activamente en el desarrollo y mejora de interfaces UI/UX.",
            "Mejora Continua y Soporte de Software.",
          ],
        },
        {
          review:
            "En Beeid, trabajé en el desarrollo y soporte de softwares 3D utilizados en experiencias inmersivas e interactivas. También colaboré en la creación de interfaces en Figma y realicé mantenimientos en máquinas.",
          title: "Developer Junior",
          date: "Septiembre 2022 - Jun 2023",
          responsibilities: [
            "mantenimiento preventivo y correctivo de máquinas, asegurando el buen funcionamiento de los equipos.",
            "Configuración y preparación de NUCs (microcomputadoras) para entornos de producción.",
            "Desarrollo de software personalizado.",
          ],
        },
        {
          review:
            "Tuve la oportunidad de trabajar como becario en la empresa Beeid, donde perfeccioné mis habilidades en depuración de sistemas, desarrollo y mantenimiento de software y también en soporte técnico a máquinas.",
          title: "Becario / Prácticas",
          date: "Marzo 2022 - Sep 2022",
          responsibilities: [
            "Apoyo técnico al equipo de desarrollo, ayudando en la resolución de problemas y pruebas de funcionalidades",
            "Depuración de Código.",
          ],
        },
      ],
    },
    contact: {
      title: "Ponte en contacto",
      sub: "💬¿Tienes alguna pregunta o idea? ¡Hablemos! 🚀",
      nameLabel: "Tu nombre",
      namePlaceholder: "¿Cuál es tu nombre?",
      emailLabel: "Tu correo electrónico",
      emailPlaceholder: "¿Cuál es tu dirección de correo?",
      messageLabel: "Tu mensaje",
      messagePlaceholder: "¿Cómo puedo ayudarte?",
      sending: "enviando...",
      send: "Enviar",
      successMsg: "¡Mensaje enviado con éxito!",
      errorMsg: "Error al enviar el mensaje. Inténtalo de nuevo.",
    },
    footer: {
      terms: "Términos y Condiciones",
      rights: "Kaio Torres. Todos los derechos reservados.",
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("app_lang") || "pt";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = (selectedLang) => {
    if (selectedLang === "pt" || selectedLang === "es") {
      setLang(selectedLang);
    } else {
      setLang((prev) => (prev === "pt" ? "es" : "pt"));
    }
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);