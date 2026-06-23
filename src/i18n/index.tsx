import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'en' | 'es';

/* ────────────────────────────────────────────────────────────
   English is the source-of-truth shape. Spanish must mirror it.
   Components read the resolved dictionary via `const { t } = useI18n()`.
   Proper nouns (Mazhar Creative Agency, client/person names, WhatsApp,
   Instagram) are intentionally left untranslated.
   ──────────────────────────────────────────────────────────── */
const en = {
  nav: {
    about: 'About',
    services: 'Services',
    work: 'Work',
    team: 'Team',
    process: 'Process',
    contact: 'Contact',
    cta: 'Start a Project',
    tagline: 'Creative Agency',
    langLabel: 'Language',
  },
  hero: {
    eyebrow: 'Mazhar Creative Agency',
    line1: 'Crafting Visuals',
    line2: 'that make',
    line3: 'brands unforgettable.',
    subtitle:
      'We create exceptional websites, branding systems, digital experiences, and creative assets for businesses around the globe.',
    stats: [
      { v: '6+', l: 'Years Experience' },
      { v: '200+', l: 'Satisfied Clients' },
      { v: 'Global', l: 'Reach' },
    ],
    ctaPrimary: 'Book Free Consultation',
    ctaSecondary: 'View Our Work',
    scroll: 'Scroll',
  },
  marquee: [
    'Brand Identity', 'Web Design', 'UI / UX', 'Graphic Design',
    'Social Media', 'App Development', 'Art Direction', 'Motion',
  ],
  about: {
    label: 'About Us',
    headingLead: 'A studio built on ',
    headingAccent: 'passion & precision',
    intro:
      'We are a creative agency dedicated to building extraordinary visual identities, digital experiences, and brand systems that leave lasting impressions.',
    stats: [
      { suffix: '+', label: 'Years Experience', desc: 'Over six years delivering creative excellence across industries and continents.' },
      { suffix: '+', label: 'Satisfied Clients', desc: 'Trusted by over two hundred businesses who rely on us for their visual identity.' },
    ],
    pillars: [
      { label: 'International Projects', text: 'Delivering premium creative solutions to clients across the globe.' },
      { label: 'Affordable Premium', text: 'World-class design quality without the world-class price tag.' },
    ],
    quote: '"Premium quality is not a luxury — it is the standard every brand deserves."',
    quoteAuthor: '— Abdul Hanan, Founder & CEO',
  },
  services: {
    label: 'What We Do',
    headingLead: 'Services built for ',
    headingAccent: 'excellence',
    intro:
      'Every service we offer is delivered with premium craftsmanship, strategic thinking, and an obsessive attention to detail.',
    items: [
      { title: 'Website Design & Redesign', desc: 'Bespoke websites built for performance, beauty, and conversion — from concept to launch.' },
      { title: 'Graphic Design', desc: 'Striking visuals crafted to communicate your brand story with clarity and lasting impact.' },
      { title: 'Brand Identity Optimization', desc: 'Refine and elevate your brand identity to stand apart in competitive markets.' },
      { title: 'Branding & Social Media Templates', desc: 'Consistent, on-brand templates that make your social presence unmistakable.' },
      { title: 'Digital Catalog & Promotional Materials', desc: 'Premium catalogs and marketing collateral designed to captivate and convert.' },
      { title: 'Marketing Materials & Brand Experience', desc: 'End-to-end brand experience materials that tell your story at every touchpoint.' },
      { title: 'App Development & UI/UX Design', desc: 'Intuitive, beautiful interfaces and powerful apps built for modern users.' },
      { title: 'Social Media & Ads Management', desc: 'Data-driven campaigns and content strategies that grow your audience and ROI.' },
    ],
  },
  portfolio: {
    label: 'Featured Work',
    headingLead: 'Stories told through ',
    headingAccent: 'design',
    intro:
      'Designed for clients across the globe — each project a unique story crafted with intent and precision.',
    projects: [
      { category: 'Photography', desc: 'Elegant photography portfolio capturing stories through cinematic light and authentic emotion.' },
      { category: 'Beauty Studio', desc: 'Sophisticated beauty studio website blending luxury aesthetics with a seamless booking experience.' },
      { category: 'Beauty & Permanent Makeup', desc: 'A bold black-and-gold beauty brand for brows, lashes, microblading and piercing — built to win bookings.' },
    ],
    exploreMore: 'Explore More',
    instagramCta: 'Full Portfolio',
  },
  clients: {
    label: 'Our Clients',
    headingLead: "Trusted by the world's ",
    headingAccent: 'finest brands',
    intro:
      "We're proud to craft visuals for leading hospitality and lifestyle names across the globe.",
    nowShowing: 'Now showing',
  },
  team: {
    label: 'The Team',
    headingLead: 'Creative minds behind ',
    headingAccent: 'the magic',
    intro:
      'A tight-knit team of specialists united by a singular obsession: creating work that makes brands stand apart.',
    photo: 'Photo',
    members: [
      { role: 'Founder & CEO', bio: 'Visionary leader with 6+ years driving creative excellence and strategic growth for clients worldwide.' },
      { role: 'Developer', bio: 'Full-stack developer crafting powerful, performant digital experiences from code to deployment.' },
      { role: 'Graphics & UI/UX Designer', bio: 'Creative designer specializing in intuitive interfaces and stunning visual identities.' },
    ],
  },
  why: {
    label: 'Why Choose Us',
    headingLead: 'The difference that defines ',
    headingAccent: 'us',
    intro:
      'We combine creative innovation, strategic thinking, and relentless dedication to deliver results that truly matter.',
    reasons: [
      { title: 'Creative Excellence', desc: 'Every project is a masterpiece. We push creative boundaries to deliver work that sets new industry standards.' },
      { title: 'Affordable Pricing', desc: 'World-class design quality made accessible. Premium results without compromise on your budget.' },
      { title: 'Global Reach', desc: 'We work with clients across continents, bringing diverse perspectives and international design sensibility.' },
      { title: 'Fast Delivery', desc: 'Agile workflows and a dedicated team mean your projects are delivered on time, every time.' },
      { title: 'Premium Quality', desc: 'Meticulous attention to detail at every stage ensures the final output consistently exceeds expectations.' },
      { title: 'Client Satisfaction', desc: 'Your success is our success. We are committed to long-term partnerships built on trust and results.' },
    ],
  },
  process: {
    label: 'How We Work',
    headingLead: 'A simple, transparent ',
    headingAccent: 'process',
    intro:
      'From first deposit to final delivery, every step is clear, fair, and built around your peace of mind.',
    stepLabel: 'Step',
    steps: [
      { title: '50% Advance Deposit', desc: 'We confirm your selected service with a simple 50% advance — securing your slot and our full commitment to your project.' },
      { title: 'Gather & Prepare', desc: 'We collect and organize every asset, detail, and requirement needed to bring your vision to life with precision.' },
      { title: 'Deliver & Finalize', desc: 'We deliver your project on time, you review the finished work, and settle the remaining 50% — no surprises.' },
    ],
    ctaText: 'Ready to begin your project?',
    ctaButton: 'Start Your Project',
  },
  contact: {
    label: 'Get In Touch',
    headingLead: "Let's Build Something ",
    headingAccent: 'Extraordinary',
    intro:
      "Tell us about your project and let's create something that makes your brand truly unforgettable.",
    panelTitle: 'Start Your Project',
    panelDesc: 'Fill out the form and your message will be sent directly to our WhatsApp. We respond within 24 hours.',
    howItWorks: 'How it works',
    howItWorksText: 'Fill the form and choose WhatsApp or Email — your details are pre-filled, ready to send to our team. No WhatsApp? Email works just the same.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'your@email.com',
    serviceLabel: 'Selected Service',
    servicePlaceholder: 'Select a service…',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project, goals, and timeline…',
    submitWhatsapp: 'Send via WhatsApp',
    submitEmail: 'Send via Email',
    chooseHelper: 'Pick whichever suits you — WhatsApp or Email. We reply within 24 hours.',
    successTitle: 'WhatsApp Opened!',
    successText: "Your message has been pre-filled in WhatsApp. Just hit send and we'll get back to you within 24 hours.",
    successTitleEmail: 'Email Ready!',
    successTextEmail: "Your message has been pre-filled in your email app. Just hit send and we'll get back to you within 24 hours.",
    sendAnother: 'Send Another',
    serviceOptions: [
      'Website Design & Redesign',
      'Graphic Design',
      'Brand Identity Optimization',
      'Branding & Social Media Templates',
      'Digital Catalog & Promotional Materials',
      'Marketing Materials & Brand Experience',
      'App Development & UI/UX Design',
      'Social Media & Ads Management',
      'Other',
    ],
    wa: {
      title: 'New Project Inquiry — Mazhar Creative Agency',
      name: 'Name',
      email: 'Email',
      service: 'Selected Service',
      message: 'Message',
      na: 'N/A',
    },
  },
  footer: {
    desc: 'Crafting visuals that make brands unforgettable. Premium creative excellence delivered to clients worldwide.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    serviceList: ['Website Design', 'Graphic Design', 'Brand Identity', 'Social Media Templates', 'App Development', 'Ads Management'],
    rights: 'All rights reserved.',
    tagline: 'Crafting visuals that make brands unforgettable',
  },
  whatsapp: {
    tooltip: 'Chat on WhatsApp',
  },
};

export type Translation = typeof en;

const es: Translation = {
  nav: {
    about: 'Nosotros',
    services: 'Servicios',
    work: 'Proyectos',
    team: 'Equipo',
    process: 'Proceso',
    contact: 'Contacto',
    cta: 'Iniciar Proyecto',
    tagline: 'Agencia Creativa',
    langLabel: 'Idioma',
  },
  hero: {
    eyebrow: 'Mazhar Creative Agency',
    line1: 'Creamos visuales',
    line2: 'que hacen',
    line3: 'marcas inolvidables.',
    subtitle:
      'Creamos sitios web excepcionales, sistemas de marca, experiencias digitales y recursos creativos para empresas de todo el mundo.',
    stats: [
      { v: '6+', l: 'Años de Experiencia' },
      { v: '200+', l: 'Clientes Satisfechos' },
      { v: 'Global', l: 'Alcance' },
    ],
    ctaPrimary: 'Reservar Consulta Gratis',
    ctaSecondary: 'Ver Nuestro Trabajo',
    scroll: 'Desliza',
  },
  marquee: [
    'Identidad de Marca', 'Diseño Web', 'UI / UX', 'Diseño Gráfico',
    'Redes Sociales', 'Desarrollo de Apps', 'Dirección de Arte', 'Motion',
  ],
  about: {
    label: 'Nosotros',
    headingLead: 'Un estudio construido sobre ',
    headingAccent: 'pasión y precisión',
    intro:
      'Somos una agencia creativa dedicada a construir identidades visuales extraordinarias, experiencias digitales y sistemas de marca que dejan una impresión duradera.',
    stats: [
      { suffix: '+', label: 'Años de Experiencia', desc: 'Más de seis años entregando excelencia creativa en distintas industrias y continentes.' },
      { suffix: '+', label: 'Clientes Satisfechos', desc: 'La confianza de más de doscientas empresas que cuentan con nosotros para su identidad visual.' },
    ],
    pillars: [
      { label: 'Proyectos Internacionales', text: 'Entregamos soluciones creativas premium a clientes de todo el mundo.' },
      { label: 'Premium Accesible', text: 'Calidad de diseño de clase mundial sin el precio de clase mundial.' },
    ],
    quote: '"La calidad premium no es un lujo: es el estándar que toda marca merece."',
    quoteAuthor: '— Abdul Hanan, Fundador y CEO',
  },
  services: {
    label: 'Qué Hacemos',
    headingLead: 'Servicios creados para la ',
    headingAccent: 'excelencia',
    intro:
      'Cada servicio que ofrecemos se entrega con artesanía premium, pensamiento estratégico y una atención obsesiva al detalle.',
    items: [
      { title: 'Diseño y Rediseño Web', desc: 'Sitios web a medida creados para el rendimiento, la belleza y la conversión, del concepto al lanzamiento.' },
      { title: 'Diseño Gráfico', desc: 'Visuales impactantes creados para comunicar la historia de tu marca con claridad e impacto duradero.' },
      { title: 'Optimización de Identidad de Marca', desc: 'Refinamos y elevamos tu identidad de marca para destacar en mercados competitivos.' },
      { title: 'Plantillas de Marca y Redes Sociales', desc: 'Plantillas coherentes y fieles a tu marca que hacen inconfundible tu presencia social.' },
      { title: 'Catálogos Digitales y Material Promocional', desc: 'Catálogos premium y material de marketing diseñados para cautivar y convertir.' },
      { title: 'Material de Marketing y Experiencia de Marca', desc: 'Materiales de experiencia de marca integrales que cuentan tu historia en cada punto de contacto.' },
      { title: 'Desarrollo de Apps y Diseño UI/UX', desc: 'Interfaces hermosas e intuitivas y apps potentes creadas para usuarios modernos.' },
      { title: 'Gestión de Redes Sociales y Anuncios', desc: 'Campañas basadas en datos y estrategias de contenido que hacen crecer tu audiencia y tu ROI.' },
    ],
  },
  portfolio: {
    label: 'Trabajo Destacado',
    headingLead: 'Historias contadas a través del ',
    headingAccent: 'diseño',
    intro:
      'Diseñado para clientes de todo el mundo: cada proyecto es una historia única creada con intención y precisión.',
    projects: [
      { category: 'Fotografía', desc: 'Elegante portafolio de fotografía que captura historias a través de luz cinematográfica y emoción auténtica.' },
      { category: 'Estudio de Belleza', desc: 'Sofisticado sitio web de estudio de belleza que combina estética de lujo con una experiencia de reserva impecable.' },
      { category: 'Belleza y Micropigmentación', desc: 'Una marca de belleza en negro y dorado para cejas, pestañas, microblading y piercing, creada para ganar reservas.' },
    ],
    exploreMore: 'Explora Más',
    instagramCta: 'Portafolio Completo',
  },
  clients: {
    label: 'Nuestros Clientes',
    headingLead: 'La confianza de las ',
    headingAccent: 'mejores marcas del mundo',
    intro:
      'Nos enorgullece crear visuales para las principales marcas de hospitalidad y estilo de vida de todo el mundo.',
    nowShowing: 'En pantalla',
  },
  team: {
    label: 'El Equipo',
    headingLead: 'Mentes creativas detrás de ',
    headingAccent: 'la magia',
    intro:
      'Un equipo unido de especialistas con una sola obsesión: crear trabajo que hace destacar a las marcas.',
    photo: 'Foto',
    members: [
      { role: 'Fundador y CEO', bio: 'Líder visionario con más de 6 años impulsando la excelencia creativa y el crecimiento estratégico de clientes en todo el mundo.' },
      { role: 'Desarrollador', bio: 'Desarrollador full-stack que crea experiencias digitales potentes y de alto rendimiento, del código al despliegue.' },
      { role: 'Diseñador Gráfico y UI/UX', bio: 'Diseñador creativo especializado en interfaces intuitivas e identidades visuales impactantes.' },
    ],
  },
  why: {
    label: 'Por Qué Elegirnos',
    headingLead: 'La diferencia que nos ',
    headingAccent: 'define',
    intro:
      'Combinamos innovación creativa, pensamiento estratégico y dedicación incansable para entregar resultados que realmente importan.',
    reasons: [
      { title: 'Excelencia Creativa', desc: 'Cada proyecto es una obra maestra. Llevamos los límites creativos al máximo para entregar trabajo que marca nuevos estándares.' },
      { title: 'Precios Accesibles', desc: 'Calidad de diseño de clase mundial hecha accesible. Resultados premium sin comprometer tu presupuesto.' },
      { title: 'Alcance Global', desc: 'Trabajamos con clientes en distintos continentes, aportando perspectivas diversas y sensibilidad de diseño internacional.' },
      { title: 'Entrega Rápida', desc: 'Flujos de trabajo ágiles y un equipo dedicado garantizan que tus proyectos se entreguen a tiempo, siempre.' },
      { title: 'Calidad Premium', desc: 'La atención meticulosa al detalle en cada etapa asegura que el resultado final supere las expectativas.' },
      { title: 'Satisfacción del Cliente', desc: 'Tu éxito es nuestro éxito. Nos comprometemos con relaciones a largo plazo basadas en la confianza y los resultados.' },
    ],
  },
  process: {
    label: 'Cómo Trabajamos',
    headingLead: 'Un proceso simple y ',
    headingAccent: 'transparente',
    intro:
      'Desde el primer depósito hasta la entrega final, cada paso es claro, justo y pensado para tu tranquilidad.',
    stepLabel: 'Paso',
    steps: [
      { title: '50% de Anticipo', desc: 'Confirmamos el servicio seleccionado con un simple anticipo del 50%, asegurando tu lugar y nuestro compromiso total con tu proyecto.' },
      { title: 'Reunir y Preparar', desc: 'Recopilamos y organizamos cada recurso, detalle y requisito necesario para dar vida a tu visión con precisión.' },
      { title: 'Entregar y Finalizar', desc: 'Entregamos tu proyecto a tiempo, revisas el trabajo terminado y liquidas el 50% restante, sin sorpresas.' },
    ],
    ctaText: '¿Listo para empezar tu proyecto?',
    ctaButton: 'Inicia Tu Proyecto',
  },
  contact: {
    label: 'Contáctanos',
    headingLead: 'Construyamos Algo ',
    headingAccent: 'Extraordinario',
    intro:
      'Cuéntanos sobre tu proyecto y creemos algo que haga que tu marca sea verdaderamente inolvidable.',
    panelTitle: 'Inicia Tu Proyecto',
    panelDesc: 'Completa el formulario y tu mensaje se enviará directamente a nuestro WhatsApp. Respondemos en 24 horas.',
    howItWorks: 'Cómo funciona',
    howItWorksText: 'Completa el formulario y elige WhatsApp o Correo — tus datos se completan, listos para enviar a nuestro equipo. ¿Sin WhatsApp? El correo funciona igual.',
    nameLabel: 'Tu Nombre',
    namePlaceholder: 'Nombre completo',
    emailLabel: 'Correo Electrónico',
    emailPlaceholder: 'tu@correo.com',
    serviceLabel: 'Servicio Seleccionado',
    servicePlaceholder: 'Selecciona un servicio…',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Cuéntanos sobre tu proyecto, objetivos y plazos…',
    submitWhatsapp: 'Enviar por WhatsApp',
    submitEmail: 'Enviar por Correo',
    chooseHelper: 'Elige lo que prefieras — WhatsApp o Correo. Respondemos en 24 horas.',
    successTitle: '¡WhatsApp Abierto!',
    successText: 'Tu mensaje se ha completado en WhatsApp. Solo pulsa enviar y te responderemos en 24 horas.',
    successTitleEmail: '¡Correo Listo!',
    successTextEmail: 'Tu mensaje se ha completado en tu app de correo. Solo pulsa enviar y te responderemos en 24 horas.',
    sendAnother: 'Enviar Otro',
    serviceOptions: [
      'Diseño y Rediseño Web',
      'Diseño Gráfico',
      'Optimización de Identidad de Marca',
      'Plantillas de Marca y Redes Sociales',
      'Catálogos Digitales y Material Promocional',
      'Material de Marketing y Experiencia de Marca',
      'Desarrollo de Apps y Diseño UI/UX',
      'Gestión de Redes Sociales y Anuncios',
      'Otro',
    ],
    wa: {
      title: 'Nueva Consulta de Proyecto — Mazhar Creative Agency',
      name: 'Nombre',
      email: 'Correo',
      service: 'Servicio Seleccionado',
      message: 'Mensaje',
      na: 'N/D',
    },
  },
  footer: {
    desc: 'Creamos visuales que hacen inolvidables a las marcas. Excelencia creativa premium para clientes de todo el mundo.',
    navTitle: 'Navegación',
    servicesTitle: 'Servicios',
    serviceList: ['Diseño Web', 'Diseño Gráfico', 'Identidad de Marca', 'Plantillas para Redes', 'Desarrollo de Apps', 'Gestión de Anuncios'],
    rights: 'Todos los derechos reservados.',
    tagline: 'Creamos visuales que hacen inolvidables a las marcas',
  },
  whatsapp: {
    tooltip: 'Chatea por WhatsApp',
  },
};

const dictionaries: Record<Lang, Translation> = { en, es };

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'mca-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'es') return saved;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider');
  return ctx;
}
