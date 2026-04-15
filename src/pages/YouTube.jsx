import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import VideoGrid from '../components/VideoGrid';

/* ─── Channel Header ─── */
const ChannelHeader = () => (
  <section className="bg-brand-blue pt-28 pb-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-4">
        <FaYoutube className="text-6xl text-red-400" />
      </div>
      <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
        Mi Canal de <span className="highlight-amber">YouTube</span>
      </h1>
      <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto mb-8">
        En mi canal comparto{' '}
        <span className="highlight-amber font-semibold">hábitos</span>,{' '}
        <span className="highlight-amber font-semibold">aprendizajes</span> y{' '}
        <span className="highlight-amber font-semibold">experiencias</span> para inspirar a los
        demás a mejorar sus vidas y acercarse a su mejor versión.
      </p>
      <a
        href="https://youtube.com/@germanhernandezmairal"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-red-500 text-white font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
      >
        <FaYoutube /> Suscribirse al canal
      </a>
    </div>
  </section>
);

/* ─── What You'll Find ─── */
const TOPICS = [
  { emoji: '🕒', title: 'Productividad', desc: 'Técnicas y sistemas para hacer más en menos tiempo y con menos estrés.' },
  { emoji: '🔄', title: 'Hábitos', desc: 'Cómo construir y mantener hábitos que transformen tu vida día a día.' },
  { emoji: '🌱', title: 'Estilo de Vida', desc: 'Rutinas, mentalidad y prácticas de bienestar para una vida más plena.' },
  { emoji: '💡', title: 'Crecimiento Personal', desc: 'Reflexiones, libros y experiencias para seguir evolucionando.' },
];

const TopicsSection = () => (
  <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
        ¿Qué encontrarás en el canal?
      </h2>
      <p className="font-inter text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
        Contenido semanal pensado para ayudarte a crecer en las áreas que más importan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOPICS.map(({ emoji, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-6 shadow-card text-center">
            <div className="text-5xl mb-4">{emoji}</div>
            <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{title}</h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    text: 'Gracias a los vídeos de Germán empecé a implementar rutinas matutinas. En dos meses noté un cambio brutal en mi energía y productividad.',
    author: 'María G.',
    role: 'Emprendedora',
  },
  {
    text: 'Su contenido sobre hábitos es diferente al típico. Muy práctico, sin relleno y aplicable desde el primer día.',
    author: 'Carlos M.',
    role: 'Desarrollador Web',
  },
  {
    text: 'El vídeo sobre la tríada del triunfo me cambió la perspectiva. Sencillo, directo y con mucho valor.',
    author: 'Laura P.',
    role: 'Estudiante universitaria',
  },
];

const Testimonials = () => (
  <section className="bg-blue-50 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-12">
        Lo que dice la <span className="underline-amber">comunidad</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ text, author, role }) => (
          <div
            key={author}
            className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <p className="font-inter text-gray-700 text-sm leading-relaxed mb-4 italic">
              "{text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm">
                {author.charAt(0)}
              </div>
              <div>
                <p className="font-montserrat font-bold text-gray-900 text-sm">{author}</p>
                <p className="font-inter text-gray-500 text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
  <section className="bg-brand-blue py-16 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <FaPlay className="text-4xl text-brand-amber mx-auto mb-4" />
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">
        ¿Quieres que te ayude directamente?
      </h2>
      <p className="font-inter text-blue-200 text-lg mb-8">
        Más allá del canal, ofrezco consultoría y servicios personalizados para ayudarte a
        alcanzar tus objetivos.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://youtube.com/@germanhernandezmairal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaYoutube /> Ver el canal
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-blue font-montserrat font-bold px-6 py-3 rounded-lg hover:bg-brand-amber-dark transition-colors"
        >
          Contactar
        </Link>
      </div>
    </div>
  </section>
);

/* ─── Page ─── */
const YouTube = () => (
  <>
    <Helmet>
      <title>Canal de YouTube – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Explora el canal de YouTube de Germán Hernández Mairal: productividad, hábitos, estilo de vida y crecimiento personal."
      />
    </Helmet>
    <ChannelHeader />
    <TopicsSection />
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
          Últimos <span className="underline-amber">vídeos</span>
        </h2>
        <p className="font-inter text-gray-600 text-center text-lg mb-10">
          Explora por categoría y encuentra el contenido que más te interesa.
        </p>
        <VideoGrid />
      </div>
    </section>
    <Testimonials />
    <FinalCTA />
  </>
);

export default YouTube;
