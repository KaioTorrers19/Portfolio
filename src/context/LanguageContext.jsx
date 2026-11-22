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
      beforeSlide: "Haciendo",
      words: ["Ideas", "concepto", "Código"],
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
        "Sommelier Digital: Software Interactivo para Tótem Vertical de Vinhos",
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
            "Tuve la oportunidad de trabajar como becario en la empresa Beeid, donde perfeccioné mis habilidades en depuración de sistemas, desenvolvimento e manutenção de software y também en soporte técnico a máquinas.",
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

const FlagLoader = ({ targetLang }) => {
  if (!targetLang) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-300">
      <div className="flex flex-col items-center gap-5">
        <div className="relative overflow-hidden rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.15)] border border-white/15 animate-pulse">
          {targetLang === "es" ? (
            /* Bandeira da Espanha com escudo mais largo e centralizado na faixa amarela */
            <svg className="w-28 h-20" viewBox="0 0 750 500">
              {/* Faixas vermelho e amarelo */}
              <rect width="750" height="500" fill="#AA151B" />
              <rect width="750" height="250" y="125" fill="#F1BF00" />

              {/* Escudo largo centralizado no meio da faixa amarela */}
              <g transform="translate(155, 138) scale(0.92)">
                {/* Coroa superior larga */}
                <path
                  d="M20 20 L90 20 L82 34 L28 34 Z"
                  fill="#F1BF00"
                  stroke="#AA151B"
                  strokeWidth="3.5"
                />
                <circle cx="55" cy="13" r="5.5" fill="#AA151B" />
                <circle cx="32" cy="17" r="4.5" fill="#004C99" />
                <circle cx="78" cy="17" r="4.5" fill="#004C99" />

                {/* Corpo do escudo largo */}
                <path
                  d="M10 36 L100 36 L100 144 Q100 188 55 205 Q10 188 10 144 Z"
                  fill="#FFFFFF"
                  stroke="#AA151B"
                  strokeWidth="4.5"
                />

                {/* Quadrante 1: Castelo (Castela) */}
                <rect x="12" y="38" width="43" height="53" fill="#AA151B" />
                <rect x="21" y="54" width="25" height="29" fill="#F1BF00" />
                <rect x="18" y="48" width="8" height="10" fill="#F1BF00" />
                <rect x="41" y="48" width="8" height="10" fill="#F1BF00" />
                <rect x="29" y="69" width="9" height="14" fill="#AA151B" />

                {/* Quadrante 2: Leão (Leão) */}
                <rect x="55" y="38" width="43" height="53" fill="#F7F7F7" />
                <path
                  d="M66 79 Q76.5 54 87 79 M70 62 L83 62 M76.5 49 L76.5 81"
                  stroke="#9B1C71"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Quadrante 3: Aragão */}
                <rect x="12" y="91" width="43" height="53" fill="#F1BF00" />
                <line
                  x1="19"
                  y1="91"
                  x2="19"
                  y2="144"
                  stroke="#AA151B"
                  strokeWidth="4"
                />
                <line
                  x1="28.5"
                  y1="91"
                  x2="28.5"
                  y2="144"
                  stroke="#AA151B"
                  strokeWidth="4"
                />
                <line
                  x1="38"
                  y1="91"
                  x2="38"
                  y2="144"
                  stroke="#AA151B"
                  strokeWidth="4"
                />
                <line
                  x1="47.5"
                  y1="91"
                  x2="47.5"
                  y2="144"
                  stroke="#AA151B"
                  strokeWidth="4"
                />

                {/* Quadrante 4: Navarra */}
                <rect x="55" y="91" width="43" height="53" fill="#AA151B" />
                <path
                  d="M60 95 L93 140 M93 95 L60 140 M76.5 95 L76.5 140 M60 117.5 L93 117.5"
                  stroke="#F1BF00"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Base: Granada */}
                <path
                  d="M12 144 L98 144 Q90 182 55 202 Q20 182 12 144 Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M46 168 Q55 153 64 168 Q60 182 55 187 Q50 182 46 168 Z"
                  fill="#AA151B"
                />
                <path
                  d="M51 155 L55 148 L59 155"
                  stroke="#1E7F34"
                  strokeWidth="3.5"
                  fill="none"
                />

                {/* Centro: Flores de lis (Borbón) */}
                <rect
                  x="41"
                  y="76"
                  width="28"
                  height="33"
                  fill="#004C99"
                  stroke="#AA151B"
                  strokeWidth="3.5"
                />
                <circle cx="55" cy="92.5" r="5.5" fill="#AA151B" />
              </g>
            </svg>
          ) : (
            /* Bandeira do Brasil */
            <svg className="w-28 h-20" viewBox="0 0 720 504">
              <rect width="720" height="504" fill="#009B3A" />
              <polygon points="360,60 660,252 360,444 60,252" fill="#FEDF00" />
              <circle cx="360" cy="252" r="115" fill="#002776" />
              <path
                d="M 248 228 Q 360 195 472 258"
                stroke="#FFFFFF"
                strokeWidth="16"
                fill="none"
              />
            </svg>
          )}
        </div>

        <div className="w-40 h-1.5 bg-white/15 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[flagProgress_1.8s_ease-in-out_forwards]" />
        </div>

        <p className="text-xs tracking-[0.25em] uppercase text-white-50 font-medium">
          {targetLang === "es"
            ? "Cargando Español..."
            : "Carregando Português..."}
        </p>
      </div>
    </div>
  );
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("app_lang") || "pt";
  });
  const [loadingLang, setLoadingLang] = useState(null);

  useEffect(() => {
    localStorage.setItem("app_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = (selectedLang) => {
    const nextLang =
      selectedLang === "pt" || selectedLang === "es"
        ? selectedLang
        : lang === "pt"
        ? "es"
        : "pt";

    if (nextLang === lang || loadingLang) return;

    setLoadingLang(nextLang);

    setTimeout(() => {
      setLang(nextLang);
    }, 400);

    setTimeout(() => {
      setLoadingLang(null);
    }, 1400);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      <FlagLoader targetLang={loadingLang} />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);