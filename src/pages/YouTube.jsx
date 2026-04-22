import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaYoutube, FaPlay, FaRocket, FaHeartbeat, FaUsers } from 'react-icons/fa';
import VideoGrid from '../components/VideoGrid';

/* ─── Channel Header ─── */
const ChannelHeader = () => (
  <section className="bg-brand-blue pt-28 pb-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-4">
        <FaYoutube className="text-6xl text-red-400" />
      </div>
      <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
        YouTube como <span className="highlight-amber">Activo Digital</span>
      </h1>
      <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto mb-8">
        En mi canal comparto{' '}
        <span className="text-white font-semibold">hábitos</span>,{' '}
        <span className="text-white font-semibold">decisiones</span> y{' '}
        <span className="text-white font-semibold">habilidades prácticas</span> sobre
        crecimiento profesional, salud y relaciones. Es el espacio donde desarrollo
        mi visión sobre cómo crecer sin quemarte y sin descuidar lo que más importa.
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

/* ─── Credibility Strip ─── */
const CredibilityStrip = () => (
  <section className="bg-white border-b border-gray-100 py-10 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-montserrat font-bold text-3xl text-brand-blue">+5 años</p>
          <p className="font-inter text-sm text-gray-600 mt-1">creando contenido</p>
        </div>
        <div>
          <p className="font-montserrat font-bold text-3xl text-brand-blue">+500</p>
          <p className="font-inter text-sm text-gray-600 mt-1">piezas publicadas</p>
        </div>
        <div>
          <p className="font-montserrat font-bold text-3xl text-brand-blue">Sin anuncios</p>
          <p className="font-inter text-sm text-gray-600 mt-1">crecimiento orgánico real</p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── What You'll Find ─── */
const TOPICS = [
  { icon: FaRocket, title: 'Desarrollo Profesional', category: 'desarrolloProfesional', desc: 'Construye hábitos, toma mejores decisiones y desarrolla las habilidades que te permiten crecer sin perder el foco.' },
  { icon: FaHeartbeat, title: 'Salud', category: 'salud', desc: 'Construye tu carrera sin quemarte. Energía, descanso y bienestar como base del rendimiento sostenible.' },
  { icon: FaUsers, title: 'Relaciones', category: 'relaciones', desc: 'Avanza sin aislarte. Cómo cuidar tus relaciones mientras persigues tus objetivos.' },
];

const TopicsSection = ({ onTopicClick }) => (
  <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
        En qué se centra el canal
      </h2>
      <p className="font-inter text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
        Tres pilares para crecer de forma práctica, sostenible y sin sacrificar lo que más importa.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOPICS.map(({ icon: Icon, title, category, desc }) => (
          <button
            key={title}
            onClick={() => onTopicClick(category)}
            className="bg-blue-100 hover:bg-blue-200 rounded-xl p-6 shadow-card text-center transition-all duration-300 hover:scale-105 hover:shadow-card-hover flex flex-col items-center w-full cursor-pointer"
          >
            <Icon className="text-5xl md:text-6xl text-brand-blue mb-4" />
            <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{title}</h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
            <span className="font-montserrat font-semibold text-sm text-brand-blue mt-auto">
              Ver vídeos →
            </span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    text: 'Su contenido me ayuda a ordenar mejor mis prioridades y avanzar con más claridad.',
    author: 'María G.',
    role: 'Emprendedora',
  },
  {
    text: 'Habla de crecer profesionalmente sin vender fórmulas vacías. Práctico, directo y fácil de aplicar.',
    author: 'Carlos M.',
    role: 'Estudiante de Desarrollo Web',
  },
  {
    text: 'Contenido que te cambia la perspectiva y con mucho valor práctico.',
    author: 'Laura P.',
    role: 'Estudiante Universitaria',
  },
];

const Testimonials = () => (
  <section className="bg-blue-50 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-12">
        Resultados que genera el <span className="underline-amber">contenido</span>
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
        Si estoy construyendo mi audiencia desde cero, también puedo ayudarte con la tuya.
      </h2>
      <p className="font-inter text-blue-200 text-lg mb-8">
        Más allá del canal, ayudo a marcas y profesionales a atraer clientes con contenido
        que genera confianza y webs que convierten.
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
          Hablemos de tu proyecto
        </Link>
      </div>
    </div>
  </section>
);

/* ─── Page ─── */
const YouTube = () => {
  const [activeCategory, setActiveCategory] = useState('desarrolloProfesional');
  const videosRef = useRef(null);

  const handleTopicClick = (category) => {
    setActiveCategory(category);
    videosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Canal de YouTube – Germán Hernández Mairal</title>
        <meta
          name="description"
          content="Canal de YouTube donde comparto contenido práctico sobre crecimiento profesional, salud y relaciones, construido con estrategia y crecimiento orgánico."
        />
      </Helmet>
      <ChannelHeader />
      <CredibilityStrip />
      <TopicsSection onTopicClick={handleTopicClick} />
      <section ref={videosRef} className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
            Vídeos para <span className="underline-amber">Crecer Mejor</span>
          </h2>
          <p className="font-inter text-gray-600 text-center text-lg mb-10">
            Desarrollo Profesional, Salud y Relaciones — los temas que exploro de forma consistente en el canal.
          </p>
          <VideoGrid externalCategory={activeCategory} />
        </div>
      </section>
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default YouTube;
