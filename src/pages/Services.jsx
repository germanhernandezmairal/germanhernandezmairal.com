import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaUsers,
  FaYoutube,
  FaBrain,
  FaArrowRight,
} from 'react-icons/fa';

const SERVICES = [
  {
    icon: <FaLaptopCode className="text-5xl text-brand-blue" />,
    title: 'Desarrollo Web',
    description:
      'Diseño y desarrollo sitios web modernos, rápidos y responsivos adaptados a tu marca y objetivos. Desde páginas de presentación hasta aplicaciones web completas.',
    features: [
      'Diseño responsivo (mobile-first)',
      'Optimización SEO y rendimiento',
      'Integración con APIs y servicios',
      'Deploy en Vercel / Netlify',
    ],
    cta: 'Pedir presupuesto',
    color: 'bg-blue-50',
    border: 'border-brand-blue',
  },
  {
    icon: <FaMobileAlt className="text-5xl text-brand-blue" />,
    title: 'Desarrollo de Apps Móviles',
    description:
      'Creo aplicaciones móviles multiplataforma con React Native, pensadas para ofrecer una experiencia de usuario excepcional en iOS y Android.',
    features: [
      'React Native (iOS & Android)',
      'UI/UX intuitivo y atractivo',
      'Integración con backends y APIs',
      'Publicación en las tiendas de apps',
    ],
    cta: 'Pedir presupuesto',
    color: 'bg-indigo-50',
    border: 'border-indigo-500',
  },
  {
    icon: <FaUsers className="text-5xl text-brand-amber-dark" />,
    title: 'Gestión de Comunidades',
    description:
      'Gestiono y hago crecer tu comunidad online con estrategias de contenido, engagement y análisis de métricas. Construyo comunidades que generan valor real.',
    features: [
      'Estrategia de contenido y calendario',
      'Gestión de redes sociales',
      'Análisis de métricas y KPIs',
      'Crecimiento orgánico de seguidores',
    ],
    cta: 'Saber más',
    color: 'bg-amber-50',
    border: 'border-brand-amber',
  },
  {
    icon: <FaYoutube className="text-5xl text-red-500" />,
    title: 'Crecimiento en YouTube',
    description:
      'Ayudo a creadores a optimizar su canal, mejorar su estrategia de contenido y hacer crecer su audiencia de manera sostenida y auténtica.',
    features: [
      'Auditoría y estrategia de canal',
      'Optimización de títulos, miniaturas y SEO',
      'Planificación editorial de contenidos',
      'Análisis de métricas y crecimiento',
    ],
    cta: 'Saber más',
    color: 'bg-red-50',
    border: 'border-red-400',
  },
  {
    icon: <FaBrain className="text-5xl text-green-600" />,
    title: 'Consultoría de Productividad',
    description:
      'Te ayudo a diseñar un sistema de hábitos y productividad personalizado que te permita rendir más, reducir el estrés y alcanzar tus metas con consistencia.',
    features: [
      'Diagnóstico de hábitos actuales',
      'Diseño de rutinas y sistemas',
      'Herramientas y técnicas probadas',
      'Seguimiento y ajuste continuo',
    ],
    cta: 'Saber más',
    color: 'bg-green-50',
    border: 'border-green-500',
  },
];

/* ─── Service Card ─── */
const ServiceCard = ({ icon, title, description, features, cta, color, border }) => (
  <div
    className={`${color} rounded-2xl border-l-4 ${border} p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col`}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-3">{title}</h3>
    <p className="font-inter text-gray-600 text-base leading-relaxed mb-5">{description}</p>
    <ul className="space-y-2 mb-6 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 font-montserrat text-sm text-gray-700">
          <span className="mt-0.5 text-brand-amber font-bold">✓</span>
          {f}
        </li>
      ))}
    </ul>
    <Link
      to="/contact"
      className="mt-auto flex items-center gap-2 font-montserrat font-semibold text-brand-blue hover:text-brand-amber transition-colors text-sm"
    >
      {cta} <FaArrowRight className="text-xs" />
    </Link>
  </div>
);

/* ─── Page ─── */
const Services = () => (
  <>
    <Helmet>
      <title>Servicios – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Servicios de desarrollo web, apps móviles, gestión de comunidades, consultoría YouTube y productividad personal por Germán Hernández Mairal."
      />
    </Helmet>

    {/* Page Header */}
    <section className="bg-brand-blue pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
          Mis <span className="highlight-amber">Servicios</span>
        </h1>
        <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto">
          Ofrezco soluciones digitales y de contenido adaptadas a las necesidades de emprendedores,
          empresas y creadores. Elige el servicio que mejor encaje con tus objetivos.
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-12">
          ¿Cómo trabajamos <span className="underline-amber">juntos</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Nos conocemos', desc: 'Conversamos sobre tus objetivos, necesidades y el alcance del proyecto.' },
            { step: '02', title: 'Diseñamos el plan', desc: 'Defino la estrategia y el plan de trabajo personalizado para tu caso.' },
            { step: '03', title: 'Ejecutamos', desc: 'Llevo a cabo el trabajo con calidad, manteniéndote informado en todo momento.' },
            { step: '04', title: 'Entregamos y mejoramos', desc: 'Entrego los resultados y estoy disponible para ajustes y mejoras.' },
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

    {/* CTA */}
    <section className="bg-brand-amber py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-montserrat font-bold text-3xl text-brand-blue mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="font-inter text-brand-blue text-lg mb-8 opacity-80">
          Cuéntame tu idea y te digo cómo puedo ayudarte a hacerla realidad.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
        >
          Contactar ahora
        </Link>
      </div>
    </section>
  </>
);

export default Services;
