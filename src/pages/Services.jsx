import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCreditCard,
  FaCheckCircle,
  FaStar,
  FaCamera,
  FaVideo,
  FaUsers,
  FaPalette,
  FaPencilAlt,
  FaDesktop,
  FaLaptopCode,
  FaCode,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, cardVariant } from '../lib/motion';

// ─── Stripe Payment Links ────────────────────────────────────────────────────
const STRIPE_LINKS = {
  fundamentos:      'https://buy.stripe.com/aFa7sN9h43gNg3HfKB5gc00',
  autoridad:        'https://buy.stripe.com/6oU14pbpcdVr3gV7e55gc01',
  ecosistema:       'https://buy.stripe.com/aFa8wR8d07x3dVzdCt5gc02',
  fotografia:       'https://buy.stripe.com/cNi00lgJw3gN7xb2XP5gc03',
  audiovisual:      'https://buy.stripe.com/dRm8wR1OCaJf8BfgOF5gc04',
  redes:            'https://buy.stripe.com/14A7sN0Ky2cJ8BfgOF5gc05',
  diseno:           'https://buy.stripe.com/9B6aEZdxk6sZeZDcyp5gc06',
  copywriting:      'https://buy.stripe.com/cNiaEZal89Fb5p3fKB5gc07',
  directos:         'https://buy.stripe.com/dRm8wRctg04B4kZ0PH5gc08',
  autoridadOrganica:'https://buy.stripe.com/5kQ3cx1OC18FaJn2XP5gc09',
  webMarca:         'https://buy.stripe.com/9B6eVfgJw7x318NgOF5gc0a',
  webApp:           'https://buy.stripe.com/5kQ5kF9h43gN04J55X5gc0b',
};

const CALENDLY_URL = 'https://calendly.com/gerhm19';

// ─── Data ────────────────────────────────────────────────────────────────────

const PACKAGES = [
  {
    id: 'fundamentos',
    name: 'Fundamentos',
    subtitle: 'Presencia Profesional',
    tagline:
      'Ideal para empezar a publicar con regularidad y dar buena imagen desde el primer día.',
    features: [
      'Gestión de tus redes sociales',
      'Producción audiovisual mensual (reels / vídeos clave)',
      'Diseño visual coherente con tu imagen',
      'Textos claros y directos',
      'Calendario de contenidos',
      'Seguimiento de resultados cada mes',
    ],
    focus: 'Presencia clara y consistente.',
    price: 'Desde €900/mes',
    priceRef: 'Ref. US/UK: $1,800/mo',
    stripeKey: 'fundamentos',
    highlight: false,
  },
  {
    id: 'autoridad',
    name: 'Autoridad',
    subtitle: 'Visibilidad y Clientes',
    tagline:
      'Ideal para fundadores y marcas personales que quieren que más personas les encuentren y les contraten.',
    socialProof: '👉 El más elegido por marcas personales',
    features: [
      'Sistema completo de contenido para atraer clientes',
      'Calendario y planificación incluidos',
      'Edición y diseño incluidos',
      'Títulos y mensajes que atraen atención',
      'Publicación en los canales correctos',
      'Informe de resultados mensual',
    ],
    focus: 'Más visibilidad y más personas contactándote.',
    price: 'Desde €1,800/mes',
    priceRef: 'Ref. US/UK: $3,500/mo',
    stripeKey: 'autoridad',
    highlight: true,
    badge: 'Más popular',
  },
  {
    id: 'ecosistema',
    name: 'Ecosistema',
    subtitle: 'Contenido + Web',
    tagline:
      'Ideal para marcas que quieren crecer con contenido y tener una web que convierta visitas en clientes.',
    features: [
      'Sistema completo de contenido para atraer clientes',
      'Gestión integral de redes sociales',
      'Desarrollo web para marca personal',
      'SEO y velocidad de carga incluidos',
      'Botones y formularios listos para recibir contactos',
      'Soporte técnico continuo',
    ],
    focus: 'Contenido que atrae + web que convierte.',
    price: 'Desde €3,200/mes',
    priceRef: 'Ref. US/UK: $6,000/mo',
    stripeKey: 'ecosistema',
    highlight: false,
  },
];

const COMMUNITY_SERVICES = [
  {
    id: 'fotografia',
    icon: FaCamera,
    name: 'Producción Fotográfica',
    description:
      'Fotos profesionales para que tu marca dé buena imagen en redes y en cualquier formato.',
    features: [
      'Cobertura de eventos',
      'Fotografía de producto y corporativa',
      'Edición lista para publicar en redes',
      'Adaptada a cada plataforma y formato',
    ],
    price: 'Desde €350',
    priceUnit: '/sesión',
    priceRef: 'Ref. US/UK: $700/session',
    stripeKey: 'fotografia',
  },
  {
    id: 'audiovisual',
    icon: FaVideo,
    name: 'Producción Audiovisual',
    description:
      'Vídeos pensados para redes que captan atención desde el primer segundo y refuerzan tu marca.',
    features: [
      'Grabación vertical y horizontal',
      'Reels, vídeos promocionales y de resumen',
      'Cobertura de eventos',
      'Vídeos listos para publicar',
    ],
    price: 'Desde €450',
    priceUnit: '/proyecto',
    priceRef: 'Ref. US/UK: $900/project',
    stripeKey: 'audiovisual',
  },
  {
    id: 'redes',
    icon: FaUsers,
    name: 'Gestión de Redes Sociales',
    description:
      'Me encargo de tus redes para que publiques con regularidad, des buena imagen y atraigas clientes.',
    features: [
      'Planificación y calendario de contenidos',
      'Publicación en los mejores momentos',
      'Gestión de comentarios y mensajes',
      'Seguimiento de resultados y mejoras continuas',
      'Coordinación con equipo creativo',
    ],
    price: 'Desde €700',
    priceUnit: '/mes',
    priceRef: 'Ref. US/UK: $1,400/mo',
    stripeKey: 'redes',
  },
  {
    id: 'diseno',
    icon: FaPalette,
    name: 'Diseño Visual para Redes',
    description:
      'Diseños claros y consistentes que hacen que cada publicación se vea profesional y reconocible.',
    features: [
      'Diseño de carruseles y creatividades',
      'Adaptaciones visuales por plataforma',
      'Plantillas reutilizables',
      'Imagen coherente en todos los formatos',
      'Coherencia tipográfica y de color',
    ],
    price: 'Desde €450',
    priceUnit: '/mes',
    priceRef: 'Ref. US/UK: $900/mo',
    stripeKey: 'diseno',
  },
  {
    id: 'copywriting',
    icon: FaPencilAlt,
    name: 'Copywriting para Redes',
    description:
      'Textos claros y directos que generan interacción y comunican exactamente lo que ofreces.',
    features: [
      'Redacción de captions',
      'Mensajes clave claros y directos',
      'Llamadas a la acción que funcionan',
      'Adaptación de tono según marca',
    ],
    price: 'Desde €350',
    priceUnit: '/mes',
    priceRef: 'Ref. US/UK: $700/mo',
    stripeKey: 'copywriting',
  },
  {
    id: 'directos',
    icon: FaDesktop,
    name: 'Producción de Directos',
    description:
      'Configuración y gestión de directos profesionales para que tu evento o marca luzca bien en pantalla.',
    features: [
      'Setup técnico (OBS, ATEM, cámaras)',
      'Configuración de overlays y gráficos',
      'Integración de multicámara',
      'Coordinación y supervisión en tiempo real',
      'Grabación lista para reutilizar',
    ],
    price: 'Desde €800',
    priceUnit: '/evento',
    priceRef: 'Ref. US/UK: $1,600/event',
    stripeKey: 'directos',
  },
  {
    id: 'autoridadOrganica',
    icon: FaStar,
    name: 'Sistema de Autoridad Orgánica',
    description:
      'Un proceso completo para que más personas te descubran, confíen en ti y te contacten a través del contenido.',
    features: [
      'Análisis de qué contenido atrae a tu cliente ideal',
      'Mejora de tu presencia a cámara y setup',
      'Gestión de edición y diseño',
      'Publicación en los canales donde está tu audiencia',
      'Más personas descubriendo tu marca cada mes',
    ],
    price: 'Desde €1,500',
    priceUnit: '/mes',
    priceRef: 'Ref. US/UK: $3,000/mo',
    stripeKey: 'autoridadOrganica',
  },
];

const WEB_SERVICES = [
  {
    id: 'webMarca',
    icon: FaLaptopCode,
    name: 'Web para Marca Personal',
    description:
      'Una web clara y profesional para que quien te busque entienda qué ofreces y sepa cómo contactarte.',
    features: [
      'Diseño y desarrollo responsive (mobile-first)',
      'Secciones organizadas para guiar al visitante',
      'Velocidad de carga optimizada',
      'Integración con herramientas externas',
      'SEO técnico básico',
      'Botones de contacto bien colocados',
    ],
    price: 'Desde €1,800',
    priceUnit: '',
    priceRef: 'Ref. US/UK: $3,500',
    stripeKey: 'webMarca',
  },
  {
    id: 'webApp',
    icon: FaCode,
    name: 'Desarrollo de Aplicaciones Web',
    description:
      'Aplicaciones web a medida para automatizar procesos o resolver una necesidad concreta de tu negocio.',
    features: [
      'Desarrollo frontend y backend',
      'Código limpio y preparado para crecer',
      'Integración con APIs externas',
      'Gestión de bases de datos y autenticación',
      'Rendimiento optimizado',
      'Preparada para crecer con nuevas funciones',
    ],
    price: 'Desde €3,500',
    priceUnit: '',
    priceRef: 'Ref. US/UK: $7,000',
    stripeKey: 'webApp',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const PackageCard = ({ pkg, onBookCall }) => (
  <div
    className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      pkg.highlight
        ? 'bg-brand-blue text-white shadow-xl ring-2 ring-brand-amber'
        : 'bg-white text-gray-900 shadow-card hover:shadow-card-hover border border-gray-100'
    }`}
  >
    {pkg.badge && (
      <div className="absolute top-4 right-4 bg-brand-amber text-brand-blue font-montserrat font-bold text-xs px-3 py-1 rounded-full">
        {pkg.badge}
      </div>
    )}
    <div className="p-8 flex flex-col flex-1">
      <p
        className={`font-montserrat text-xs font-semibold uppercase tracking-widest mb-1 ${
          pkg.highlight ? 'text-blue-300' : 'text-brand-amber-dark'
        }`}
      >
        {pkg.subtitle}
      </p>
      <h3
        className={`font-montserrat font-bold text-2xl mb-3 ${
          pkg.highlight ? 'text-white' : 'text-gray-900'
        }`}
      >
        {pkg.name}
      </h3>
      <p
        className={`font-inter text-sm leading-relaxed mb-2 ${
          pkg.highlight ? 'text-blue-200' : 'text-gray-600'
        }`}
      >
        {pkg.tagline}
      </p>
      {pkg.socialProof && (
        <p className={`font-inter text-sm font-semibold mb-5 ${pkg.highlight ? 'text-brand-amber' : 'text-brand-blue'}`}>
          {pkg.socialProof}
        </p>
      )}

      {/* Price block */}
      <div
        className={`rounded-xl p-4 mb-5 ${
          pkg.highlight ? 'bg-white/10' : 'bg-amber-50'
        }`}
      >
        <span
          className={`font-montserrat font-bold text-2xl ${
            pkg.highlight ? 'text-brand-amber' : 'text-brand-blue'
          }`}
        >
          {pkg.price}
        </span>
        <p
          className={`font-inter text-xs mt-0.5 ${
            pkg.highlight ? 'text-blue-300' : 'text-gray-400'
          }`}
        >
          {pkg.priceRef}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-4 flex-1">
        {pkg.features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-2 font-inter text-sm ${
              pkg.highlight ? 'text-blue-100' : 'text-gray-700'
            }`}
          >
            <FaCheckCircle
              className={`mt-0.5 shrink-0 text-base ${
                pkg.highlight ? 'text-brand-amber' : 'text-brand-blue'
              }`}
            />
            {f}
          </li>
        ))}
      </ul>

      <p
        className={`font-montserrat text-xs font-semibold mb-5 ${
          pkg.highlight ? 'text-blue-300' : 'text-gray-400'
        }`}
      >
        Enfoque: {pkg.focus}
      </p>

      {/* CTAs */}
      <div className="flex flex-col gap-3 mt-auto">
        <button
          onClick={onBookCall}
          className={`flex items-center justify-center gap-2 font-montserrat font-bold text-sm py-3 px-4 rounded-lg transition-colors active:scale-95 cursor-pointer ${
            pkg.highlight
              ? 'bg-brand-amber text-brand-blue hover:bg-amber-400'
              : 'bg-brand-blue text-white hover:bg-blue-900'
          }`}
        >
          <FaCalendarAlt /> Ver cómo conseguir más clientes
        </button>
        <a
          href={STRIPE_LINKS[pkg.stripeKey]}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 font-montserrat font-semibold text-sm py-3 px-4 rounded-lg border-2 transition-colors active:scale-95 ${
            pkg.highlight
              ? 'border-blue-400 text-blue-200 hover:border-brand-amber hover:text-brand-amber'
              : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
          }`}
        >
          <FaCreditCard /> Contratar ahora
        </a>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ service, onBookCall }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col p-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <service.icon className="text-brand-blue text-xl" />
      </div>
      <h3 className="font-montserrat font-bold text-lg text-gray-900 leading-tight">
        {service.name}
      </h3>
    </div>
    <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
      {service.description}
    </p>

    {/* Price badge */}
    <div className="flex items-baseline gap-1 bg-amber-50 rounded-lg px-3 py-2 mb-4 w-fit">
      <span className="font-montserrat font-bold text-brand-blue text-lg">
        {service.price}
      </span>
      {service.priceUnit && (
        <span className="font-montserrat font-semibold text-brand-blue text-sm">
          {service.priceUnit}
        </span>
      )}
      <span className="font-inter text-gray-400 text-xs ml-1">{service.priceRef}</span>
    </div>

    {/* Features */}
    <ul className="space-y-1.5 mb-5 flex-1">
      {service.features.map((f) => (
        <li key={f} className="flex items-start gap-2 font-inter text-sm text-gray-700">
          <span className="text-brand-amber font-bold mt-0.5 shrink-0">✓</span>
          {f}
        </li>
      ))}
    </ul>

    {/* CTAs */}
    <div className="flex flex-col gap-2">
      <button
        onClick={onBookCall}
        className="flex items-center justify-center gap-2 font-montserrat font-bold text-sm py-2.5 px-4 rounded-lg bg-brand-blue text-white hover:bg-blue-900 active:scale-95 cursor-pointer transition-colors"
      >
        <FaCalendarAlt className="text-xs" /> Hablar sobre tu caso
      </button>
      <a
        href={STRIPE_LINKS[service.stripeKey]}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 font-montserrat font-semibold text-sm py-2.5 px-4 rounded-lg border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white active:scale-95 transition-colors"
      >
        <FaCreditCard className="text-xs" /> Contratar
      </a>
    </div>
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const Services = () => {
  const [servicesTab, setServicesTab] = useState('community');

  // Load Calendly widget assets once
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <Helmet>
        <title>Servicios – Germán Hernández Mairal</title>
        <meta
          name="description"
          content="Ayudo a empresas y creadores a conseguir clientes con contenido y webs que convierten."
        />
      </Helmet>

      {/* ── Page Header ── */}
      <section className="bg-brand-blue pt-28 pb-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
            Mis <span className="highlight-amber">Servicios</span>
          </h1>
          <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto">
            Te ayudo a conseguir clientes con contenido y webs que convierten.
          </p>
          <p className="font-inter text-blue-300 text-sm max-w-2xl mx-auto mt-4">
            He trabajado creando contenido y gestionando la presencia digital de instituciones y marcas, produciendo cientos de piezas para su presencia online.
          </p>
        </motion.div>
      </section>

      {/* ── Packages Section ── */}
      <section className="bg-gray-50 py-20 px-4" id="paquetes">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-brand-amber-dark mb-2">
              Todo incluido
            </p>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Elige tu <span className="highlight-amber">Paquete</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Tres opciones según el nivel en el que estés ahora.
              Todas incluyen seguimiento continuo y trabajo personalizado.
            </p>
            <p className="font-inter text-sm text-gray-500 mt-3 max-w-xl mx-auto">
              Si no tienes claro cuál elegir, empieza por &apos;Autoridad&apos;. Es el que mejor funciona para la mayoría de marcas personales.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PACKAGES.map((pkg) => (
              <motion.div key={pkg.id} variants={cardVariant}>
                <PackageCard pkg={pkg} onBookCall={openCalendly} />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center font-inter text-sm text-gray-400 mt-8">
            * Precios orientativos para el mercado español. Mercado US/UK indicado como referencia.
            Precio final según alcance y personalización.
          </p>
        </div>
      </section>

      {/* ── Individual Services Section ── */}
      <section className="bg-white py-20 px-4" id="servicios">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-brand-amber-dark mb-2">
              Solo lo que necesitas
            </p>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Servicios <span className="highlight-amber">Individuales</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Contrata solo lo que necesitas ahora. Cada servicio funciona solo o combinado con otros.
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
              <button
                onClick={() => setServicesTab('community')}
                className={`font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg transition-all active:scale-95 cursor-pointer ${
                  servicesTab === 'community'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Comunidad y Marca
              </button>
              <button
                onClick={() => setServicesTab('web')}
                className={`font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg transition-all active:scale-95 cursor-pointer ${
                  servicesTab === 'web'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Desarrollo Web
              </button>
            </div>
          </div>

          {/* Community services grid */}
          {servicesTab === 'community' && (
            <motion.div
              key="community"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {COMMUNITY_SERVICES.map((service) => (
                <motion.div key={service.id} variants={cardVariant}>
                  <ServiceCard service={service} onBookCall={openCalendly} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Web dev services grid */}
          {servicesTab === 'web' && (
            <motion.div
              key="web"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {WEB_SERVICES.map((service) => (
                <motion.div key={service.id} variants={cardVariant}>
                  <ServiceCard service={service} onBookCall={openCalendly} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Book a Call / Calendly Section ── */}
      <section className="bg-gray-50 py-20 px-4" id="reservar">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-brand-amber-dark mb-2">
              Sin compromiso
            </p>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Reserva una <span className="highlight-amber">llamada gratuita</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Cuéntame tu proyecto, tus objetivos y lo que necesitas. En 30 minutos
              te digo exactamente cómo puedo ayudarte — sin presión ni compromiso.
            </p>
          </motion.div>

          {/* Calendly inline widget */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-card border border-gray-100"
              data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>

          {/* Fallback button if widget hasn't loaded */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm bg-brand-blue text-white py-3 px-6 rounded-lg hover:bg-blue-900 active:scale-95 cursor-pointer transition-colors"
            >
              <FaCalendarAlt /> Ver disponibilidad y reservar
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            ¿Cómo trabajamos <span className="underline-amber">juntos</span>?
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '01',
                title: 'Nos conocemos',
                desc: 'Hablamos sobre lo que necesitas y qué resultado quieres conseguir.',
              },
              {
                step: '02',
                title: 'Preparo el plan',
                desc: 'Te explico qué voy a hacer para ayudarte y cómo lo vamos a trabajar.',
              },
              {
                step: '03',
                title: 'Ejecutamos',
                desc: 'Ejecuto el trabajo con calidad y te mantengo al día.',
              },
              {
                step: '04',
                title: 'Entregamos y mejoramos',
                desc: 'Entrego los resultados y me quedo disponible para ajustes.',
              },
            ].map(({ step, title, desc }) => (
              <motion.div key={step} variants={cardVariant} className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white font-montserrat font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-amber py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl text-brand-blue mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="font-inter text-brand-blue text-lg mb-8 opacity-80">
            Cuéntame lo que necesitas y te explico cómo puedo ayudarte a conseguir más clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 active:scale-95 cursor-pointer transition-colors text-lg"
            >
              <FaCalendarAlt /> Ver cómo conseguir más clientes
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white active:scale-95 transition-colors text-lg"
            >
              Enviar mensaje <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
