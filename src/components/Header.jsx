import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { to: '/services', label: 'Servicios' },
  { to: '/portfolio', label: 'Portafolio' },
  { to: '/youtube', label: 'YouTube' },
  { to: '/about', label: 'Quién Soy' },
  { to: '/contact', label: 'Contacto' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-800'
      } text-white`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo / Signature */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-signature italic text-white hover:text-brand-amber transition-colors duration-200"
          >
            GHM
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-montserrat text-sm lg:text-base font-medium px-3 py-1 rounded transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-brand-amber'
                    : 'text-white hover:text-brand-amber'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-brand-amber text-brand-blue font-montserrat font-bold text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-brand-amber-dark transition-colors duration-200"
            >
              Hablemos
            </Link>
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none p-1"
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 xs:w-4/5 sm:w-1/2 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 9999 }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-2xl focus:outline-none"
          aria-label="Cerrar menú"
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col p-8 mt-14 space-y-5">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-montserrat text-lg font-medium transition-colors duration-200 ${
                location.pathname === to
                  ? 'text-brand-amber'
                  : 'text-white hover:text-brand-amber'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-brand-amber text-brand-blue font-montserrat font-bold text-center px-4 py-3 rounded-lg hover:bg-brand-amber-dark transition-colors duration-200"
          >
            Hablemos
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          style={{ zIndex: 9998 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
