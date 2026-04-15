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
            Soy <strong>Germán</strong>, graduado en Desarrollo de Aplicaciones Web y Móviles,
            YouTuber en crecimiento y apasionado por la productividad y los hábitos que
            mejoran el bienestar personal y profesional.
          </p>
          <p className="font-inter text-gray-700 text-lg leading-relaxed">
            Desde{' '}
            <span className="underline-amber font-semibold">2019</span>, he estado{' '}
            <span className="underline-amber font-semibold">comprometido</span> en{' '}
            <span className="underline-amber font-semibold">desarrollar mis habilidades</span>{' '}
            personales y profesionales para poder aportar valor real a los demás.
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
    image: '/imgs/Germán-Estilo-de-Vida.webp',
    imageAlt: 'Germán estilo de vida saludable',
    imageLeft: false,
    title: 'Hábitos & Bienestar',
    text: (
      <>
        He construido un estilo de vida basado en{' '}
        <span className="highlight-blue">hábitos saludables</span> que potencian mi bienestar
        diario. Progresando constantemente en mi carrera como YouTuber y Programador, siempre
        buscando el <span className="highlight-blue">crecimiento constante</span>.
      </>
    ),
  },
  {
    image: '/imgs/Germán-Universidad.webp',
    imageAlt: 'Germán en la universidad',
    imageLeft: true,
    title: 'El Salto a la Ingeniería',
    text: (
      <>
        Un momento decisivo en mi vida fue el cambio radical de un bachillerato social al mundo
        de las{' '}
        <span className="underline-amber font-semibold">ingenierías</span>, una decisión que me
        retó y me ayudó a descubrir nuevas pasiones. El mundo del código y la tecnología se
        convirtieron en mi vocación.
      </>
    ),
  },
  {
    image: '/imgs/Germán-Italia.webp',
    imageAlt: 'Germán en Italia, Erasmus',
    imageLeft: false,
    title: 'Erasmus en Italia',
    text: (
      <>
        También tuve la suerte de vivir en{' '}
        <span className="underline-amber font-semibold">Italia</span> durante seis meses como
        estudiante Erasmus, donde me sumergí en la cultura italiana mientras perfeccionaba mi
        inglés y ampliaba mi visión del mundo.
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
  { category: 'Frontend', items: ['React', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Backend & Deploy', items: ['Node.js', 'Firebase', 'Vercel', 'Netlify', 'REST APIs'] },
  { category: 'Contenido & Community', items: ['YouTube Studio', 'SEO', 'Estrategia de contenido', 'LinkedIn', 'Instagram', 'Analytics'] },
  { category: 'Productividad', items: ['GTD', 'Time-blocking', 'Notion', 'Gestión de hábitos', 'Mindset de crecimiento'] },
];

const SkillsSection = () => (
  <section className="bg-gray-50 py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-gray-900 text-center mb-4">
        Habilidades & <span className="underline-amber">Herramientas</span>
      </h2>
      <p className="font-inter text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
        Estas son las principales áreas de conocimiento con las que trabajo.
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
        Mi misión es ayudar a emprendedores, empresarios y creadores de contenido a mejorar su{' '}
        <span className="underline-amber font-semibold">productividad</span>, optimizar su{' '}
        <span className="underline-amber font-semibold">presencia online</span> y potenciar su{' '}
        <span className="underline-amber font-semibold">marca personal</span> a través de{' '}
        <span className="highlight-blue font-semibold">estrategias probadas y personalizadas.</span>
      </p>
      <Link
        to="/contact"
        className="inline-block bg-brand-blue text-white font-montserrat font-bold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 text-lg"
      >
        ¿Necesitas ayuda? ¡Contáctame!
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
        content="Conoce la historia de Germán Hernández Mairal: desarrollador, YouTuber y apasionado de la productividad y los hábitos de vida."
      />
    </Helmet>
    <AboutHero />
    <BioSection />
    <SkillsSection />
    <MissionSection />
  </>
);

export default About;
