import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, cardVariant } from '../lib/motion';

const PROJECTS = [
  {
    id: 1,
    title: 'germanhernandezmairal.com',
    category: 'educacion',
    description:
      'Mi web personal: portafolio, canal y contacto en un mismo sitio. React + Vite, desplegada en Vercel, pensada para cargar rápido y ser fácil de mantener.',
    image: '/imgs/WebMarcaPersonal-Preview-3.webp',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://www.germanhernandezmairal.com',
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'britenglishacademy.app',
    category: 'educacion',
    description:
      'Aplicación web para una academia de inglés Cambridge en Tarragona: gestión de cursos, alumnos y contenido. Next.js + TypeScript con base de datos PostgreSQL en Supabase.',
    image: '/imgs/brit-english-academy-preview.webp',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://brit-english-academy.vercel.app/',
    githubUrl: 'https://github.com/germanhernandezmairal/britenglishacademy.app',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Fitness Trainer',
    category: 'salud',
    description:
      'Analiza la técnica de un ejercicio a partir de vídeo usando detección de poses. Backend en Python/FastAPI para la visión por computador, frontend en Next.js.',
    image: '/imgs/ai-fitness-trainer-preview.webp',
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Computer Vision'],
    liveUrl: 'https://ai-fitness-trainer-three-rosy.vercel.app',
    githubUrl: 'https://github.com/germanhernandezmairal/ai-fitness-trainer',
    featured: false,
  },
  {
    id: 4,
    title: 'hometown-homepage',
    category: 'otros',
    description:
      'Web estática tipo "Visit Tarragona" para practicar maquetación y despliegue: HTML, CSS y JavaScript sin framework, publicada en Vercel.',
    image: '/imgs/hometown-homepage-preview.webp',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://hometown-homepage-tgn.vercel.app/',
    githubUrl: 'https://github.com/germanhernandezmairal/hometown-homepage',
    featured: false,
  },
  {
    id: 5,
    title: 'blackjack-game',
    category: 'otros',
    description:
      'Blackjack jugable en el navegador, hecho con JavaScript puro para dominar lógica de estado, eventos y DOM. Desplegado en Vercel.',
    image: '/imgs/blackjack-game-preview.webp',
    tech: ['JavaScript', 'HTML', 'CSS', 'Vercel'],
    liveUrl: 'https://blackjack-game-ghm.vercel.app/',
    githubUrl: 'https://github.com/germanhernandezmairal/blackjack-game',
    featured: false,
  },
];

const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'educacion', label: 'Educación' },
  { key: 'salud', label: 'Salud' },
  { key: 'otros', label: 'Otros' },
];

/* ─── Project Card ─── */
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
    <div className="relative h-48 bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {project.featured && (
        <span className="absolute top-3 right-3 bg-brand-amber text-brand-blue font-montserrat font-bold text-xs px-2 py-1 rounded-full">
          Destacado
        </span>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
      <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

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

      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-brand-blue text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-900 active:scale-95 transition-colors"
          >
            <FaExternalLinkAlt className="text-xs" /> Ver proyecto
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-gray-300 text-gray-700 font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:border-brand-blue hover:text-brand-blue active:scale-95 transition-colors"
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
        <title>Proyectos Reales – Germán Hernández Mairal</title>
        <meta
          name="description"
          content="Proyectos reales de desarrollo web y fullstack — React, Next.js, TypeScript, Python/FastAPI. Construidos para diferenciarme y conseguir mi primer trabajo en tech."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-brand-blue pt-28 pb-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
            Proyectos <span className="highlight-amber">Reales</span>
          </h1>
          <p className="font-inter text-blue-200 text-lg max-w-2xl mx-auto">
            En <span className="text-white font-semibold">2024</span> me gradué como
            Desarrollador Web en la Universidad Rovira i Virgili y desde entonces
            trabajo en proyectos para diferenciarme de la competencia y adentrarme en
            el sector tecnológico como{' '}
            <span className="text-white font-semibold">Desarrollador Fullstack Junior</span>.
          </p>
        </motion.div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`font-montserrat font-semibold text-sm px-5 py-2 rounded-full border-2 transition-all duration-200 active:scale-95 cursor-pointer ${
                  activeCategory === key
                    ? 'bg-brand-blue border-brand-blue text-white'
                    : 'border-gray-300 text-gray-600 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={cardVariant}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            ¿Necesitas conseguir tu primer trabajo como programador?
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-8">
            Si quieres conseguir tus primeras entrevistas y construir un proyecto que
            refleje tus habilidades tecnológicas, cuéntame tu situación.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 active:scale-95 transition-colors duration-200 text-lg"
          >
            Hablemos de tu situación
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Portfolio;
