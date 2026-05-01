import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    className="bg-gray-900 text-white py-10 mt-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-3xl font-signature italic text-white hover:text-brand-amber transition-colors"
          >
            GHM
          </Link>
          <p className="mt-3 font-montserrat text-gray-400 text-sm leading-relaxed">
            Germán Hernández Mairal — Front-End Developer y Community Manager
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-montserrat font-bold text-brand-amber mb-4">Navegación</h3>
          <ul className="space-y-2">
            {[
              ['/', 'Inicio'],
              ['/services', 'Servicios'],
              ['/portfolio', 'Portafolio'],
              ['/youtube', 'YouTube'],
              ['/about', 'Quién Soy'],
              ['/contact', 'Contacto'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-montserrat text-gray-400 hover:text-brand-amber transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-montserrat font-bold text-brand-amber mb-4">Conectemos</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/germ%C3%A1n-hern%C3%A1ndez-mairal-7584741ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com/@germanhernandezmairal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors text-2xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/germanhernandezmairal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:gerhm19@gmail.com"
              className="text-gray-400 hover:text-brand-amber transition-colors text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="font-montserrat text-gray-400 text-sm">
            gerhm19@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="font-montserrat text-gray-500 text-sm">
          © {new Date().getFullYear()} Germán Hernández Mairal. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
