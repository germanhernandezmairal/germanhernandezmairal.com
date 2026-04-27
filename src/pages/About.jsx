import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

/* ─── Hero ─── */
const AboutHero = () => (
  <section className="bg-blue-50 pt-28 pb-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            <span className="highlight-amber">Sobre Mí</span>
          </h1>
          <p className="font-inter text-gray-700 text-lg leading-relaxed mb-4">
            Soy <strong>Germán</strong>, desarrollador web graduado en Desarrollo de Aplicaciones
            Web y Móviles, y Community Manager especializado en crecimiento online para empresas
            y creadores.
          </p>
          <p className="font-inter text-gray-700 text-lg leading-relaxed">
            Desde{' '}
            <span className="underline-amber font-semibold">2019</span>, he estado{' '}
            <span className="underline-amber font-semibold">construyendo</span> las habilidades
            técnicas y de comunicación necesarias para{' '}
            <span className="underline-amber font-semibold">aportar valor real</span> a negocios
            y creadores que quieren crecer online.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <img
            src="/imgs/Germán-Programando.webp"
            alt="Germán trabajando"
            className="w-64 sm:w-80 md:w-full max-w-sm rounded-2xl border-2 border-gray-200 shadow-card object-cover"
            loading="eager"
          />
        </div>
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
        <span className="highlight-blue">Desarrollo de Aplicaciones Web y Móviles</span>,
        una formación que me dio los fundamentos para construir soluciones web funcionales
        y bien estructurados. Desde el primer proyecto, entendí que el código bien escrito es
        un activo, no solo una herramienta.
      </>
    ),
  },
  {
    image: '/imgs/Germán-Estilo-de-Vida.webp',
    imageAlt: 'Germán gestionando comunidades online como Community Manager',
    imageLeft: true,
    title: 'Comunicación & Comunidad',
    text: (
      <>
        He trabajado como{' '}
        <span className="underline-amber font-semibold">Community Manager</span> gestionando la
        presencia online de instituciones y marcas: comunicación institucional, contenido
        multiplataforma, cobertura de eventos y estrategia editorial. Ahí confirmé que{' '}
        <span className="underline-amber font-semibold">comunicar con claridad</span> es tan
        valioso como construir con técnica.
      </>
    ),
  },
  {
    image: '/imgs/Germán-Italia.webp',
    imageAlt: 'Germán construyendo su carrera como desarrollador web',
    imageLeft: false,
    title: 'Desarrollo Web Moderno',
    text: (
      <>
        Hoy desarrollo proyectos web con{' '}
        <span className="highlight-blue">Next.js, React y TypeScript</span>, combinando
        formación sólida con experiencia real en comunicación y marca. Construyo soluciones orientadas a
        resultados — funcionales, limpias y diseñadas para{' '}
        <span className="underline-amber font-semibold">generar impacto real</span> en el
        negocio del cliente.
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
          <div className="flex-1">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              {title}
            </h2>
            <p className="font-inter text-gray-700 text-lg leading-relaxed">{text}</p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-sm rounded-2xl shadow-card border border-gray-100 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Skills ─── */
const SKILLS = [
  {
    category: 'Frontend',
    items: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Framer Motion'],
  },
  {
    category: 'Backend & Deploy',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Firebase', 'Vercel', 'GitHub', 'Jest', 'React Testing Library'],
  },
  {
    category: 'Contenido & Community',
    items: ['Estrategia de contenido', 'Community Management', 'SEO', 'LinkedIn', 'Instagram', 'Analytics'],
  },
  {
    category: 'Productividad',
    items: ['GTD', 'Time-blocking', 'Notion', 'Gestión de proyectos', 'Metodologías ágiles'],
  },
];

const SkillsSection = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
        Habilidades & <span className="underline-amber">Herramientas</span>
      </h2>
      <p className="font-inter text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
        Las herramientas y áreas con las que construyo soluciones reales para clientes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map(({ category, items }) => (
          <div key={category} className="bg-white rounded-2xl p-6 shadow-card">
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Mission ─── */
const MissionSection = () => (
  <section className="bg-blue-200 py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
        <span className="highlight-amber">Mi Misión</span>
      </h2>
      <p className="font-inter text-gray-800 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
        Ayudo a empresas y creadores a conseguir clientes con{' '}
        <span className="underline-amber font-semibold">contenido estratégico</span> y{' '}
        <span className="underline-amber font-semibold">webs diseñadas para convertir</span>{' '}
        visitas en oportunidades reales. Construyo presencia online que genera confianza,
        atrae al público adecuado y produce{' '}
        <span className="highlight-blue font-semibold">crecimiento sostenible.</span>
      </p>
      <Link
        to="/contact"
        className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
      >
        Hablemos de tu proyecto
      </Link>
    </div>
  </section>
);

/* ─── Page ─── */
const About = () => (
  <>
    <Helmet>
      <title>Quién Soy – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Germán Hernández — Desarrollador Web y Community Manager. Construyo webs que convierten y estrategias de contenido que atraen clientes. Conoce mi trayectoria y stack técnico."
      />
    </Helmet>
    <AboutHero />
    <BioSection />
    <SkillsSection />
    <MissionSection />
  </>
);

export default About;
