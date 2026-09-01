import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideLeft, slideRight, staggerContainer, cardVariant } from '../lib/motion';

/* ─── Hero ─── */
const AboutHero = () => (
  <section className="bg-blue-50 pt-28 pb-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left order-2 md:order-1"
          variants={slideLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            <span className="highlight-amber">Sobre Mí</span>
          </h1>
          <p className="font-inter text-gray-700 text-lg leading-relaxed mb-4">
            Soy <strong>Germán</strong>, Fullstack Developer. Me gradué en la{' '}
            <span className="underline-amber font-semibold">Universidad Rovira i Virgili en 2024</span>{' '}
            y desde entonces estoy creando una metodología para conseguir mi primer
            trabajo en el sector tecnológico y ayudarte a conseguir lo mismo.
          </p>
          <p className="font-inter text-gray-700 text-lg leading-relaxed">
            Combino formación técnica en desarrollo con experiencia real en{' '}
            <span className="underline-amber font-semibold">comunicación y comunidad</span>.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 order-1 md:order-2 flex justify-center"
          variants={slideRight}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/imgs/Imagen Página Web Editada.webp"
            alt="Germán trabajando"
            className="w-64 sm:w-80 md:w-full max-w-sm rounded-2xl border-2 border-gray-200 shadow-card object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Bio Story ─── */
const BIO_ITEMS = [
  {
    image: '/imgs/Germán-Universidad.webp',
    imageAlt: 'Germán graduado en Desarrollo de Aplicaciones Web y Móviles',
    imageLeft: false,
    title: 'La Base Técnica',
    text: (
      <>
        Me gradué en{' '}
        <span className="highlight-blue">Técnicas de Desarrollo de Aplicaciones Web y Móviles</span>{' '}
        y desde entonces construyo webs y aplicaciones con criterio técnico: limpias, rápidas y preparadas para crecer.
      </>
    ),
  },
  {
    //image: '/imgs/Germán-Estilo-de-Vida.webp',
    image: '/imgs/ImagenCreandoContenidoEditada.webp',
    imageAlt: 'Germán gestionando comunidades online como Community Manager',
    imageLeft: true,
    title: 'Comunicación y Comunidad',
    text: (
      <>
        He trabajado como{' '}
        <span className="underline-amber font-semibold">Community Manager</span> para instituciones y marcas: gestionando redes, produciendo contenido y cubriendo eventos. Ahí entendí que{' '}
        <span className="underline-amber font-semibold">comunicar con claridad</span> es tan importante como tus habilidades técnicas de software.
      </>
    ),
  },
  {
    image: '/imgs/Germán Programando Buscando Trabajo Editada.webp',
    imageAlt: 'Germán construyendo su camino hacia el primer trabajo como desarrollador',
    imageLeft: false,
    title: 'Camino hacia el primer trabajo',
    text: (
      <>
        Hoy construyo proyectos web con{' '}
        <span className="highlight-blue">Next.js, React y TypeScript</span> y estoy
        creando mi propia metodología,{' '}
        <span className="underline-amber font-semibold">Software Builder</span>, para
        conseguir mi primer trabajo como programador desde cero. El resultado: mis
        primeras entrevistas han sido con empresas de{' '}
        <strong className="text-brand-blue">miles de empleados</strong>.
      </>
    ),
  },
];

const BioSection = () => (
  <section className="bg-white py-20 px-4">
    <div className="max-w-5xl mx-auto space-y-20">
      {BIO_ITEMS.map(({ image, imageAlt, imageLeft, title, text }) => (
        <div
          key={title}
          className={`flex flex-col ${imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
        >
          {/* Text */}
          <motion.div
            className="flex-1"
            variants={imageLeft ? slideRight : slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              {title}
            </h2>
            <p className="font-inter text-gray-700 text-lg leading-relaxed">{text}</p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={imageLeft ? slideLeft : slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-sm rounded-2xl shadow-card border border-gray-100 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Skills ─── */
const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Deploy',
    items: ['Node.js', 'Python / FastAPI', 'PostgreSQL / Supabase', 'REST APIs', 'Git / GitHub', 'Vercel'],
  },
  {
    // Kept for reference; filtered out of the render (see SkillsSection).
    category: 'Contenido & Community',
    items: ['YouTube', 'Instagram', 'TikTok', 'Notion', 'Metricool'],
    hidden: true,
  },
];

const SkillsSection = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Habilidades & <span className="underline-amber">Herramientas</span>
        </h2>
        <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
          Las tecnologías con las que construyo webs y aplicaciones fullstack.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SKILLS.filter((s) => !s.hidden).map(({ category, items }) => (
          <motion.div key={category} variants={cardVariant} className="bg-white rounded-2xl p-6 shadow-card">
            <h3 className="font-montserrat font-bold text-brand-blue text-lg mb-4 pb-2 border-b-2 border-brand-amber">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 font-inter text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-amber rounded-full flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── Mission ─── */
const MissionSection = () => (
  <section className="bg-blue-200 py-20 px-4">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
        <span className="highlight-amber">Mi Misión</span>
      </h2>
      <p className="font-inter text-gray-800 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
        Ayudo a programadores a conseguir su primer trabajo en el sector tecnológico
        mediante <span className="underline-amber font-semibold">hábitos</span> y{' '}
        <span className="underline-amber font-semibold">habilidades prácticas</span>.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 active:scale-95 transition-colors duration-200 text-lg"
      >
        Hablemos de tu situación
      </Link>
    </motion.div>
  </section>
);

/* ─── Page ─── */
const About = () => (
  <>
    <Helmet>
      <title>Sobre mí – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Germán Hernández — Fullstack Developer. Graduado en la URV (2024), construyendo una metodología para conseguir mi primer trabajo en tech y ayudarte a conseguir el tuyo."
      />
    </Helmet>
    <AboutHero />
    <BioSection />
    <SkillsSection />
    <MissionSection />
  </>
);

export default About;
