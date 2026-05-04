import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaLaptopCode, FaYoutube, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, cardVariant } from '../lib/motion';

/* ─── Hero Section ─── */
const HeroSection = () => (
  <section className="relative min-h-screen bg-white flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left order-2 md:order-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <p className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
              Hola, soy Germán, <br />Front-End Developer y Community Manager.
            </p>
            <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
              Ayudo a <strong>empresas y creadores</strong> a conseguir clientes con{' '}
              <strong>contenido y webs que convierten</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <Link
              to="/services"
              className="bg-brand-blue text-white font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white active:scale-95 transition-colors duration-200 text-center"
            >
              Ver mis servicios
            </Link>
            <Link
              to="/contact"
              className="bg-brand-amber text-brand-blue font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-brand-amber-dark active:scale-95 transition-colors duration-200 text-center"
            >
              Hablemos
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative w-64 sm:w-80 md:w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gray-200 shadow-card">
            <img
              src="/imgs/Imagen Página Web Editada.png"
              alt="Germán Hernández Mairal"
              className="absolute inset-0 w-full h-full object-contain object-center"
              loading="eager"
            />
          </div>
        </motion.div>
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
    icon: <FaYoutube className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Atrae más clientes con',
    highlight: 'contenido que funciona',
    description: 'Creo y gestiono publicaciones para que más personas te conozcan, confíen en ti y te contacten.',
    link: '/services',
  },
  {
    icon: <FaLaptopCode className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Convierte visitas con una',
    highlight: 'web que funciona',
    description: 'Diseño tu web para que quien llegue entienda qué ofreces y te contacte.',
    link: '/services',
  },
  {
    icon: <FaHandshake className="text-5xl md:text-6xl text-brand-blue mb-4" />,
    title: 'Haz que tu marca',
    highlight: 'genere confianza',
    description: 'Cuido que tu imagen en redes y web sea coherente para que el cliente confíe en ti desde el primer vistazo.',
    link: '/services',
  },
];

const HowIHelpSection = () => (
  <section id="how-i-help" className="bg-gray-50 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          ¿Cómo puedo ayudarte a{' '}
          <span className="underline-amber">conseguir clientes</span>?
        </h2>
        <p className="font-inter text-gray-600 text-center text-lg mb-14 max-w-2xl mx-auto">
          Creo contenido y webs para que más personas te encuentren y te contacten.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {HELP_CARDS.map(({ icon, title, highlight, description, link }) => (
          <motion.div key={highlight} variants={cardVariant}>
            <Link
              to={link}
              className="bg-blue-100 hover:bg-blue-200 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-card-hover group h-full"
            >
              {icon}
              <h3 className="font-montserrat font-semibold text-lg text-gray-900">
                {title}{' '}
                <span className="underline-amber">{highlight}</span>
              </h3>
              <p className="font-inter text-sm text-gray-600 mt-2">{description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          to="/services"
          className="inline-block bg-brand-blue text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover:bg-blue-900 active:scale-95 transition-colors duration-200"
        >
          Explorar todos los servicios →
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── CTA Banner ─── */
const CTABanner = () => (
  <section className="bg-brand-blue py-16 px-4">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">
        ¿Listo para dar el siguiente paso?
      </h2>
      <p className="font-inter text-blue-200 text-lg mb-8">
        Si quieres una presencia digital más clara, contenido con intención y una web que te ayude a conseguir clientes, hablemos.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-brand-amber text-brand-blue font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-brand-amber-dark active:scale-95 transition-colors duration-200 text-lg"
      >
        Contactar ahora
      </Link>
    </motion.div>
  </section>
);

/* ─── Page ─── */
const Home = () => (
  <>
    <Helmet>
      <title>Germán Hernández Mairal – Front-End Developer y Community Manager</title>
      <meta
        name="description"
        content="Ayudo a empresas y creadores a conseguir clientes con contenido y webs que convierten."
      />
      <meta name="keywords" content="front-end developer, desarrollador web, community manager, contenido y webs que convierten, gestión de redes, marca personal, servicios web" />
    </Helmet>
    <HeroSection />
    <HowIHelpSection />
    <CTABanner />
  </>
);

export default Home;
