import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaLaptopCode, FaYoutube, FaUsers } from 'react-icons/fa';

/* ─── Hero Section ─── */
const HeroSection = () => (
  <section className="relative min-h-screen bg-white flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div className="opacity-0 animate-fade-up">
            <p className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
              Hola, soy Germán, Programador y Community Manager.
            </p>
            <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              Ayudo a <strong>empresas y creadores</strong> a <strong>crecer</strong> a través de{' '}
              <strong>contenido orgánico en redes sociales</strong> y{' '}
              <strong>estrategias centradas en la construcción de comunidad</strong>.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start opacity-0 animate-fade-up-1">
            <Link
              to="/services"
              className="bg-brand-blue text-white font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-center"
            >
              Ver mis servicios
            </Link>
            <Link
              to="/contact"
              className="bg-brand-amber text-brand-blue font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-brand-amber-dark transition-colors duration-200 text-center"
            >
              Hablemos
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <div className="w-64 sm:w-80 md:w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gray-200 shadow-card">
            <img
              src="/imgs/Imagen Página Web Actualizada.png"
              alt="Germán Hernández Mairal"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#how-i-help" className="block text-gray-400 hover:text-brand-amber transition-colors">
          <FaArrowDown className="text-2xl animate-bounce mx-auto" />
        </a>
      </div>
    </div>
  </section>
);

/* ─── How I Can Help ─── */
const HELP_CARDS = [
  {
    icon: <FaUsers className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Gestiona una',
    highlight: 'Comunidad Online',
    description: 'Tu presencia digital, gestionada con estrategia, coherencia y calidad profesional.',
    link: '/services',
  },
  {
    icon: <FaYoutube className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Crece una',
    highlight: 'Marca Personal',
    description: 'Convierte tu atención en autoridad y autoridad en crecimiento sostenible.',
    link: '/services',
  },
  {
    icon: <FaLaptopCode className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Crea tu',
    highlight: 'web o app',
    description: 'Tu activo digital, construido para posicionar, estructurar y escalar.',
    link: '/services',
  },
];

const HowIHelpSection = () => (
  <section id="how-i-help" className="bg-gray-50 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
        ¿Cómo te puedo{' '}
        <span className="underline-amber">ayudar</span>?
      </h2>
      <p className="font-inter text-gray-600 text-center text-lg mb-14 max-w-2xl mx-auto">
        Estas son las principales áreas en las que puedo aportarte valor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {HELP_CARDS.map(({ icon, title, highlight, description, link }) => (
          <Link
            key={highlight}
            to={link}
            className="bg-blue-100 hover:bg-blue-200 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-card-hover group"
          >
            {icon}
            <h3 className="font-montserrat font-semibold text-lg text-gray-900">
              {title}{' '}
              <span className="underline-amber">{highlight}</span>
            </h3>
            <p className="font-inter text-sm text-gray-600 mt-2">{description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/services"
          className="inline-block bg-brand-blue text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200"
        >
          Explorar todos los servicios →
        </Link>
      </div>
    </div>
  </section>
);

/* ─── CTA Banner ─── */
const CTABanner = () => (
  <section className="bg-brand-blue py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">
        ¿Listo para dar el siguiente paso?
      </h2>
      <p className="font-inter text-blue-200 text-lg mb-8">
        Cuéntame tu proyecto o idea y encontraremos juntos la mejor forma de hacerlo realidad.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-brand-amber text-brand-blue font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-brand-amber-dark transition-colors duration-200 text-lg"
      >
        Contactar ahora
      </Link>
    </div>
  </section>
);

/* ─── Page ─── */
const Home = () => (
  <>
    <Helmet>
      <title>Germán Hernández Mairal – Desarrollador Web, Community Builder & Creador</title>
      <meta
        name="description"
        content="Sé más productivo, aumenta tu confianza y mejora tus relaciones con Germán Hernández Mairal — desarrollador web, community builder y creador de contenido."
      />
      <meta name="keywords" content="Germán Hernández Mairal, desarrollador web, community builder, productividad, YouTube" />
    </Helmet>
    <HeroSection />
    <HowIHelpSection />
    <CTABanner />
  </>
);

export default Home;
