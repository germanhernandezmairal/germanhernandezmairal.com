import { Helmet } from 'react-helmet-async';
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

/* ─── Let's Talk ─── */
const LetsTalk = () => (
  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
    <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
      <span className="highlight-amber">Hablemos</span>
    </h2>
    <p className="font-inter text-gray-700 text-lg leading-relaxed mb-4">
      ¿Tienes algún{' '}
      <span className="underline-amber font-semibold">proyecto</span> en mente o quieres
      saber más sobre cómo puedo ayudarte?
    </p>
    <p className="font-inter text-gray-700 text-lg leading-relaxed mb-4">
      No dudes en{' '}
      <span className="underline-amber font-semibold">enviarme un mensaje.</span>
    </p>
    <p className="font-inter text-gray-700 text-lg leading-relaxed">
      ¡Estaré encantado de hablar contigo!
    </p>

    {/* Social links */}
    <div className="mt-10">
      <h3 className="font-montserrat font-bold text-gray-900 mb-4">
        También me puedes encontrar en:
      </h3>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/germ%C3%A1n-hern%C3%A1ndez-mairal-7584741ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://youtube.com/@germanhernandezmairal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-500 text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaYoutube /> YouTube
        </a>
        <a
          href="https://www.instagram.com/germanhernandezmairal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="mailto:gerhm19@gmail.com"
          className="flex items-center gap-2 bg-gray-700 text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <FaEnvelope /> Email
        </a>
      </div>
    </div>
  </div>
);

/* ─── Contact Info ─── */
const ContactInfo = () => (
  <section className="bg-white py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
        Información de <span className="underline-amber">Contacto</span>
      </h2>
      <p className="font-inter text-gray-600 text-lg mb-8 max-w-xl mx-auto">
        Puedes contactarme directamente a{' '}
        <a
          href="mailto:gerhm19@gmail.com"
          className="highlight-blue font-semibold hover:opacity-90 transition-opacity"
        >
          gerhm19@gmail.com
        </a>
      </p>
      <p className="font-inter text-gray-700 text-xl mb-8">
        Estoy aquí para{' '}
        <span className="underline-amber font-semibold">ayudarte</span> en tu próximo proyecto.
      </p>
      <p className="font-montserrat font-bold text-gray-900 text-2xl">
        ¿Listo para comenzar?
      </p>
      <button
        onClick={() => {
          document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-6 bg-brand-blue text-white font-montserrat font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
      >
        ¡Hablemos!
      </button>
    </div>
  </section>
);

/* ─── Page ─── */
const Contact = () => (
  <>
    <Helmet>
      <title>Contacto – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Contacta con Germán Hernández Mairal para hablar sobre tu proyecto, consulta o colaboración."
      />
    </Helmet>

    {/* Header */}
    <section className="bg-brand-blue pt-28 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
          <span className="highlight-amber">Contacto</span>
        </h1>
        <p className="font-inter text-blue-200 text-lg max-w-xl mx-auto">
          Estoy disponible para proyectos, colaboraciones y consultas. Escríbeme y te responderé
          lo antes posible.
        </p>
      </div>
    </section>

    {/* Let's Talk + Form */}
    <section id="contact-form-section" className="bg-blue-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <LetsTalk />
        <div className="bg-white p-8 md:p-12 flex items-center">
          <ContactForm />
        </div>
      </div>
    </section>

    {/* Contact Info */}
    <ContactInfo />
  </>
);

export default Contact;
