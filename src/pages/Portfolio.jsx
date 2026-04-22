import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 1,
    title: 'Página Web Marca Personal',
    category: 'webapp',
    description:
      'Web diseñada para posicionar y convertir: páginas de servicios claras, portafolio visual, integración de contenido y formulario de contacto optimizado. Construida con tecnología moderna y orientada a generar confianza desde el primer clic.',
    image: '/imgs/WebMarcaPersonal-Preview.png',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Vercel', 'reCAPTCHA'],
    liveUrl: 'https://www.germanhernandezmairal.com',
    githubUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: 'Marca Personal - Germán Hernández Mairal',
    category: 'youtube',
    description:
      'Canal de YouTube construido desde cero sobre hábitos, decisiones y habilidades prácticas aplicadas al crecimiento profesional y digital. Con estrategia de contenido propia, optimización SEO en cada vídeo y crecimiento orgánico de audiencia sin publicidad de pago.',
    image: '/imgs/Miniatura Definitiva Las 7 Habilidades que Me Sacaron de la Desmotivación.png',
    tech: ['YouTube Studio', 'Adobe Premiere', 'Canva', 'SEO'],
    liveUrl: 'https://youtube.com/@germanhernandezmairal',
    githubUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: 'Marca Corporativa - Tarragona Jove',
    category: 'community',
    description:
      'Gestión de la presencia digital de una organización pública en Instagram, TikTok, YouTube y Facebook. Estrategia de contenido, calendario editorial y análisis de métricas para aumentar el alcance y consolidar una imagen institucional sólida.',
    image: '/imgs/Tarragona Jove Concert.jpg',
    tech: ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Metricool'],
    liveUrl: 'https://www.linkedin.com/in/germ%C3%A1n-hern%C3%A1ndez-mairal-7584741ab/',
    githubUrl: null,
    featured: false,
  },
];

const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'webapp', label: 'Web/App' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'community', label: 'Community' },
];

/* ─── Project Card ─── */
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
    {/* Image / Placeholder */}
    <div className="relative h-48 bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-signature text-3xl text-white opacity-40">GHM</span>
      )}
      {project.featured && (
        <span className="absolute top-3 right-3 bg-brand-amber text-brand-blue font-montserrat font-bold text-xs px-2 py-1 rounded-full">
          Destacado
        </span>
      )}
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
      <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-blue-50 text-brand-blue font-montserrat font-semibold text-xs px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-brand-blue text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          >
            <FaExternalLinkAlt className="text-xs" /> Ver proyecto
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-gray-300 text-gray-700 font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

/* ─── Page ─── */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portafolio – Germán Hernández Mairal</title>
        <meta
          name="description"
          content="Proyectos reales de desarrollo web y gestión de marca digital — webs que convierten, contenido que atrae y comunidades que generan confianza."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-brand-blue pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
            Proyectos <span className="highlight-amber">Reales</span>
          </h1>
          <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto">
            Con <span className="text-white font-semibold">+4 años</span> gestionando marcas digitales
            y más de <span className="text-white font-semibold">500 piezas de contenido</span> publicadas,
            he trabajado en instituciones públicas y en mi propia marca personal.
            Estos proyectos muestran lo que mejor hago: webs que convierten,
            contenido que atrae y comunidades que crecen.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`font-montserrat font-semibold text-sm px-5 py-2 rounded-full border-2 transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-brand-blue border-brand-blue text-white'
                    : 'border-gray-300 text-gray-600 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            ¿Tu marca necesita una presencia digital que funcione?
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-8">
            Si quieres atraer más clientes con contenido o una web profesional que convierta visitas en oportunidades, cuéntame tu proyecto.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
