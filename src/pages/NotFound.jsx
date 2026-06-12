import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const NotFound = () => (
  <>
    <Helmet>
      <title>Página no encontrada — Germán Hernández Mairal</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-montserrat font-extrabold text-7xl sm:text-8xl text-brand-blue mb-4">
          404
        </p>
        <h1 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
          <span className="highlight-amber">Página no encontrada</span>
        </h1>
        <p className="font-inter text-gray-700 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          La página que buscas no existe o ha cambiado de sitio.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-amber text-brand-blue font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-brand-amber-dark active:scale-95 transition-colors"
        >
          <FaHome /> Volver al inicio
        </Link>
      </motion.div>
    </section>
  </>
);

export default NotFound;
