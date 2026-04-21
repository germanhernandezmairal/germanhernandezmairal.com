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

// ─── Stripe Payment Links ────────────────────────────────────────────────────
// Replace each value with your real Stripe Payment Link URL from the Stripe dashboard.
// Example: https://buy.stripe.com/live_XXXXXXXXXXXX
const STRIPE_LINKS = {
  fundamentos:      'https://buy.stripe.com/REPLACE_fundamentos',
  autoridad:        'https://buy.stripe.com/REPLACE_autoridad',
  ecosistema:       'https://buy.stripe.com/REPLACE_ecosistema',
  fotografia:       'https://buy.stripe.com/REPLACE_fotografia',
  audiovisual:      'https://buy.stripe.com/REPLACE_audiovisual',
  redes:            'https://buy.stripe.com/REPLACE_redes',
  diseno:           'https://buy.stripe.com/REPLACE_diseno',
  copywriting:      'https://buy.stripe.com/REPLACE_copywriting',
  directos:         'https://buy.stripe.com/REPLACE_directos',
  autoridadOrganica:'https://buy.stripe.com/REPLACE_autoridad_organica',
  webMarca:         'https://buy.stripe.com/REPLACE_web_marca',
  webApp:           'https://buy.stripe.com/REPLACE_web_app',
};

const CALENDLY_URL = 'https://calendly.com/gerhm19';

// ─── Data ────────────────────────────────────────────────────────────────────

const PACKAGES = [
  {
    id: 'fundamentos',
    name: 'Fundamentos',
    subtitle: 'Presencia Profesional',
    tagline:
      'Ideal para marcas que quieren construir una presencia digital coherente y profesional desde el inicio.',
    features: [
      'Gestión estratégica de redes sociales',
      'Producción audiovisual mensual (reels / vídeos clave)',
      'Diseño visual alineado a identidad',
      'Copywriting optimizado',
      'Calendario de contenidos',
      'Seguimiento de métricas clave mensual',
    ],
    focus: 'Coherencia y calidad profesional.',
    price: 'Desde €900/mes',
    priceRef: 'Ref. US/UK: $1,800/mo',
    stripeKey: 'fundamentos',
    highlight: false,
  },
  {
    id: 'autoridad',
    name: 'Autoridad',
    subtitle: 'Posicionamiento Estratégico',
    tagline:
      'Ideal para fundadores y marcas personales que quieren posicionarse como referentes en su sector.',
    features: [
      'Sistema de Autoridad Orgánica (Servicio Completo)',
      'Gestión y producción de contenido',
      'Delegación estructurada de edición/diseño',
      'Estrategia de títulos y posicionamiento',
      'Optimización de distribución',
      'Informe estratégico mensual',
    ],
    focus: 'Convertir atención en autoridad.',
    price: 'Desde €1,800/mes',
    priceRef: 'Ref. US/UK: $3,500/mo',
    stripeKey: 'autoridad',
    highlight: true,
    badge: 'Más popular',
  },
  {
    id: 'ecosistema',
    name: 'Ecosistema',
    subtitle: 'Infraestructura Digital',
    tagline:
      'Ideal para marcas que quieren controlar su autoridad y construir su propia infraestructura digital.',
    features: [
      'Sistema de Autoridad Orgánica (Servicio Completo)',
      'Gestión integral de redes sociales',
      'Desarrollo web para marca personal',
      'Optimización técnica (SEO + rendimiento)',
      'Integración con herramientas de conversión',
      'Soporte técnico y evolución digital',
    ],
    focus: 'Autoridad + propiedad digital.',
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
      'Fotografías profesionales alineadas con la identidad estratégica de tu marca y optimizadas para maximizar el impacto en redes.',
    features: [
      'Cobertura de eventos',
      'Fotografía de producto y corporativa',
      'Edición y optimización para redes sociales',
      'Adaptación a distintos formatos y plataformas',
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
      'Vídeos dinámicos optimizados para redes sociales, diseñados para captar atención desde el primer segundo y reforzar tu posicionamiento.',
    features: [
      'Grabación vertical y horizontal',
      'Reels, vídeos promocionales y de resumen',
      'Cobertura de eventos',
      'Edición optimizada para cada plataforma',
      'Adaptación a tendencias actuales',
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
      'Gestión de tu presencia digital para asegurar coherencia estratégica, consistencia operativa y crecimiento sostenible.',
    features: [
      'Planificación y calendario de contenidos',
      'Publicación estratégica',
      'Gestión de comentarios y mensajes',
      'Seguimiento de métricas y optimización progresiva',
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
      'Piezas visuales alineadas con tu identidad de marca que transmiten profesionalidad y coherencia en cada publicación.',
    features: [
      'Diseño de carruseles y creatividades',
      'Adaptaciones visuales por plataforma',
      'Plantillas reutilizables',
      'Coherencia gráfica y tipográfica',
      'Identidad visual adaptable a distintos formatos',
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
      'Textos persuasivos y claros orientados a generar interacción, claridad y posicionamiento de marca en cada publicación.',
    features: [
      'Redacción de captions',
      'Optimización de mensajes clave',
      'Estructuración de llamadas a la acción',
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
      'Configuración y gestión de transmisiones en directo profesionales para marcas, instituciones y eventos.',
    features: [
      'Setup técnico (OBS, ATEM, cámaras)',
      'Configuración de overlays y gráficos',
      'Integración de multicámara',
      'Coordinación y supervisión en tiempo real',
      'Optimización para archivo y reutilización',
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
      'Un sistema estratégico que convierte atención en autoridad y autoridad en crecimiento sostenible para tu marca personal.',
    features: [
      'Análisis de mercado y estrategia de atención',
      'Optimización de setup y presencia a cámara',
      'Delegación eficiente de edición y diseño',
      'Publicación estratégica por plataforma',
      'Construcción progresiva de comunidad',
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
      'Páginas web profesionales que transforman tu marca personal en una plataforma digital sólida, clara y orientada a conversión.',
    features: [
      'Diseño y desarrollo responsive (mobile-first)',
      'Estructuración estratégica de secciones',
      'Optimización de velocidad y rendimiento',
      'Integración con herramientas externas',
      'SEO técnico básico',
      'CTAs orientadas a conversión',
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
      'Aplicaciones web funcionales y escalables orientadas a resolver necesidades específicas de tu negocio o comunidad.',
    features: [
      'Desarrollo frontend y backend',
      'Arquitectura estructurada y escalable',
      'Integración con APIs externas',
      'Gestión de bases de datos y autenticación',
      'Optimización de rendimiento',
      'Preparación para crecimiento y futuras iteraciones',
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
        className={`font-inter text-sm leading-relaxed mb-5 ${
          pkg.highlight ? 'text-blue-200' : 'text-gray-600'
        }`}
      >
        {pkg.tagline}
      </p>

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
          className={`flex items-center justify-center gap-2 font-montserrat font-bold text-sm py-3 px-4 rounded-lg transition-colors ${
            pkg.highlight
              ? 'bg-brand-amber text-brand-blue hover:bg-amber-400'
              : 'bg-brand-blue text-white hover:bg-blue-900'
          }`}
        >
          <FaCalendarAlt /> Reservar llamada gratuita
        </button>
        <a
          href={STRIPE_LINKS[pkg.stripeKey]}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 font-montserrat font-semibold text-sm py-3 px-4 rounded-lg border-2 transition-colors ${
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
        className="flex items-center justify-center gap-2 font-montserrat font-semibold text-sm py-2.5 px-4 rounded-lg bg-brand-blue text-white hover:bg-blue-900 transition-colors"
      >
        <FaCalendarAlt className="text-xs" /> Reservar llamada
      </button>
      <a
        href={STRIPE_LINKS[service.stripeKey]}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 font-montserrat font-semibold text-sm py-2.5 px-4 rounded-lg border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
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
          content="Paquetes y servicios de community management, producción audiovisual, desarrollo web y estrategia digital para marcas y creadores."
        />
      </Helmet>

      {/* ── Page Header ── */}
      <section className="bg-brand-blue pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
            Mis <span className="highlight-amber">Servicios</span>
          </h1>
          <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto">
            Soluciones digitales adaptadas a empresas, emprendedores y marcas personales. Desde presencia en redes hasta infraestructura web completa.
          </p>
        </div>
      </section>

      {/* ── Packages Section ── */}
      <section className="bg-gray-50 py-20 px-4" id="paquetes">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-brand-amber-dark mb-2">
              Soluciones integrales
            </p>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Elige tu <span className="highlight-amber">Paquete</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Tres niveles diseñados para adaptarse al momento en que se encuentra tu marca.
              Todos incluyen seguimiento continuo y estrategia personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onBookCall={openCalendly} />
            ))}
          </div>

          <p className="text-center font-inter text-sm text-gray-400 mt-8">
            * Precios orientativos para el mercado español. Mercado US/UK indicado como referencia.
            Precio final según alcance y personalización.
          </p>
        </div>
      </section>

      {/* ── Individual Services Section ── */}
      <section className="bg-white py-20 px-4" id="servicios">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-brand-amber-dark mb-2">
              À la carte
            </p>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Servicios <span className="highlight-amber">Individuales</span>
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Contrata exactamente lo que necesitas. Cada servicio puede integrarse en una
              estrategia más amplia o funcionar de forma independiente.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
              <button
                onClick={() => setServicesTab('community')}
                className={`font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg transition-all ${
                  servicesTab === 'community'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Comunidad y Marca
              </button>
              <button
                onClick={() => setServicesTab('web')}
                className={`font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg transition-all ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {COMMUNITY_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} onBookCall={openCalendly} />
              ))}
            </div>
          )}

          {/* Web dev services grid */}
          {servicesTab === 'web' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {WEB_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} onBookCall={openCalendly} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Book a Call / Calendly Section ── */}
      <section className="bg-gray-50 py-20 px-4" id="reservar">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
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
          </div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-card border border-gray-100"
            data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
            style={{ minWidth: '320px', height: '700px' }}
          />

          {/* Fallback button if widget hasn't loaded */}
          <div className="text-center mt-6">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm bg-brand-blue text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors"
            >
              <FaCalendarAlt /> Abrir calendario en ventana
            </button>
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-12">
            ¿Cómo trabajamos <span className="underline-amber">juntos</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Nos conocemos',
                desc: 'Conversamos sobre tus objetivos, necesidades y el alcance del proyecto.',
              },
              {
                step: '02',
                title: 'Diseñamos el plan',
                desc: 'Defino la estrategia y el plan de trabajo personalizado para tu caso.',
              },
              {
                step: '03',
                title: 'Ejecutamos',
                desc: 'Llevo a cabo el trabajo con calidad, manteniéndote informado en todo momento.',
              },
              {
                step: '04',
                title: 'Entregamos y mejoramos',
                desc: 'Entrego los resultados y estoy disponible para ajustes y mejoras.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-brand-blue text-white font-montserrat font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-amber py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl text-brand-blue mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="font-inter text-brand-blue text-lg mb-8 opacity-80">
            Cuéntame tu idea y te digo cómo puedo ayudarte a hacerla realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg"
            >
              <FaCalendarAlt /> Reservar llamada
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-colors text-lg"
            >
              Enviar mensaje <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
