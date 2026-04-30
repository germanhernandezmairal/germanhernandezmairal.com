import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaYoutube, FaInstagram, FaImages, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, cardVariant, fadeUp } from '../lib/motion';

const STREAMINGS = [
  {
    title: 'Las de la Chiri | Cultura Kesse | Hivern 2025',
    image: '/imgs/Las de la Chiri  Cultura Kesse  Hivern 2025.jpg',
    url: 'https://www.youtube.com/watch?v=HLbs_h3VNNw',
  },
  {
    title: 'El pitjor espectacle de màgia… o no 🎩💥',
    image: '/imgs/El pitjor espectacle de màgia… o no.jpg',
    url: 'https://www.youtube.com/watch?v=NeoUK3pi6Ts',
  },
  {
    title: "CK | Ona Mae, Fusió World d'Autora",
    image: "/imgs/CK  Ona Mae Fusió World d’Autora.jpg",
    url: 'https://www.youtube.com/watch?v=JkK5pKb0I9U',
  },
];

const VIDEO_RESUMENES = [
  {
    title: 'Laboratori de folk | Estiu 2025',
    image: '/imgs/Laboratori de folk  Estiu 2025.png',
    url: 'https://www.instagram.com/reel/DMYL1L2iTPe/',
  },
  {
    title: 'Masterclass de K-Pop + Meet&Greet amb Tami Tamako | Estiu 2025',
    image: '/imgs/Masterclass de K-Pop + Meet&Greet amb Tami Tamako  Estiu 2025.png',
    url: 'https://www.instagram.com/reel/DNF1-boCejN/',
  },
  {
    title: "Capturant l'aigua. Taller de fotografia | Tardor 2025",
    image: "/imgs/Capturant l’aigua Taller de fotografia  Tardor 2025.png",
    url: 'https://www.instagram.com/reel/DPreEMjD_Bk/',
  },
];

const FOTOS_EVENTO = [
  {
    title: 'Aula de costura creativa. Recrea la teva roba | Tardor 2025',
    image: '/imgs/Aula de costura creativa. Recrea la teva roba  Tardor 2025.jpg',
    url: 'https://flic.kr/s/aHBqjCvZ9Y',
  },
  {
    title: "CK | Geografia d'un retorn. Calcària | Tardor 2025",
    image: "/imgs/CK  Geografia d’un retorn Calcària  Tardor 2025.jpg",
    url: 'https://flic.kr/s/aHBqjCxJAY',
  },
  {
    title: 'Curs de Teatre Musical des de la interpretació actoral | CasalxNadal 25',
    image: '/imgs/Curs de Teatre Musical des de la interpretació actoral  CasalxNadal 25.jpg',
    url: 'https://flic.kr/s/aHBqjCF7Va',
  },
];

const ContentCard = ({ item, buttonLabel, vertical = false }) => (
  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
    <div className={`relative overflow-hidden bg-gray-100 ${vertical ? 'aspect-[9/16]' : 'h-48'}`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <p className="font-montserrat font-semibold text-sm text-gray-900 leading-snug flex-1 mb-4">
        {item.title}
      </p>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-brand-blue text-white font-montserrat font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-900 active:scale-95 transition-colors w-fit"
      >
        <FaExternalLinkAlt className="text-xs" /> {buttonLabel}
      </a>
    </div>
  </div>
);

const Section = ({ title, icon, items, buttonLabel, vertical = false, delay = 0 }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 mb-8"
    >
      <span className="text-brand-blue text-2xl">{icon}</span>
      <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-900">{title}</h2>
    </motion.div>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <motion.div key={item.title} variants={cardVariant}>
          <ContentCard item={item} buttonLabel={buttonLabel} vertical={vertical} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const TarragonaJove = () => (
  <>
    <Helmet>
      <title>Tarragona Jove – Germán Hernández Mairal</title>
      <meta
        name="description"
        content="Gestión de contenido digital para Tarragona Jove: streamings en directo, vídeos resumen y fotografías de evento."
      />
    </Helmet>

    {/* Header */}
    <section className="bg-brand-blue pt-28 pb-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-montserrat font-semibold text-sm mb-6 transition-colors"
        >
          <FaArrowLeft /> Volver al portafolio
        </Link>
        <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
          Marca Corporativa{' '}
          <span className="highlight-amber">Tarragona Jove</span>
        </h1>
        <p className="font-inter text-blue-200 text-lg max-w-2xl">
          Gestión de la presencia digital en Instagram, TikTok, YouTube y Facebook — streamings en directo,
          vídeos resumen de actividades y fotografías de evento.
        </p>
      </motion.div>
    </section>

    {/* Content */}
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Section
          title="Streamings en Directo"
          icon={<FaYoutube />}
          items={STREAMINGS}
          buttonLabel="Ver streaming"
          delay={0}
        />
        <Section
          title="Video Resúmenes"
          icon={<FaInstagram />}
          items={VIDEO_RESUMENES}
          buttonLabel="Ver vídeo"
          vertical
          delay={0.1}
        />
        <Section
          title="Fotografías de Evento"
          icon={<FaImages />}
          items={FOTOS_EVENTO}
          buttonLabel="Ver álbum"
          delay={0.2}
        />
      </div>
    </section>
  </>
);

export default TarragonaJove;
