import { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight, FaYoutube, FaRocket, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, cardVariant } from '../lib/motion';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const PLAYLISTS = {
  habitos: 'PLm6JN36t1vNwrHMycHQMPO2euhqx5pDEH',
  habilidades: 'PLm6JN36t1vNxeNZm_V5Cqe-SotRVIS59G',
};

const CATEGORY_LABELS = {
  habitos: 'Hábitos',
  habilidades: 'Habilidades',
};

const CATEGORY_ICONS = {
  habitos: FaHeartbeat,
  habilidades: FaRocket,
};

const getItemsToShow = () => {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
};

const VideoGrid = ({ externalCategory }) => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(externalCategory || 'habitos');
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const playlistId = useMemo(() => PLAYLISTS[selectedCategory], [selectedCategory]);

  useEffect(() => {
    if (externalCategory && externalCategory !== selectedCategory) {
      setSelectedCategory(externalCategory);
      setStartIndex(0);
    }
  }, [externalCategory]);

  useEffect(() => {
    const handleResize = () => setItemsToShow(getItemsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setStartIndex(0);

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=8&playlistId=${playlistId}&key=${API_KEY}`
      )
      .then((res) => {
        const publicVideos = res.data.items
          .filter((v) => v.status?.privacyStatus === 'public')
          .sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt));
        setVideos(publicVideos);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los vídeos. Intenta de nuevo más tarde.');
        setLoading(false);
      });
  }, [playlistId]);

  const canPrev = startIndex > 0;
  const canNext = startIndex + itemsToShow < videos.length;

  const prev = useCallback(() => {
    setStartIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setStartIndex((i) => Math.min(videos.length - itemsToShow, i + 1));
  }, [videos.length, itemsToShow]);

  const displayed = videos.slice(startIndex, startIndex + itemsToShow);

  return (
    <div>
      {/* Category buttons */}
      <motion.div
        className="flex justify-center gap-3 mb-8 flex-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
          const Icon = CATEGORY_ICONS[key];
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer ${
                selectedCategory === key
                  ? 'bg-brand-amber text-brand-blue scale-105'
                  : 'bg-white text-gray-700 hover:bg-brand-amber hover:text-brand-blue border border-gray-200'
              }`}
            >
              <Icon className="text-xs" /> {label}
            </button>
          );
        })}
      </motion.div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-brand-amber border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="text-center py-12">
          <p className="font-inter text-gray-500 mb-4">{error}</p>
          <a
            href="https://youtube.com/@germanhernandezmairal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 text-white font-montserrat font-semibold px-5 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <FaYoutube /> Ver el canal en YouTube
          </a>
        </div>
      )}

      {/* Videos */}
      {!loading && !error && (
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-brand-amber text-brand-blue rounded-full flex items-center justify-center shadow-md transition-all ${
              canPrev ? 'hover:bg-brand-amber-dark cursor-pointer' : 'opacity-30 cursor-default'
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Grid */}
          <motion.div
            key={selectedCategory}
            className="grid gap-6 px-6"
            style={{ gridTemplateColumns: `repeat(${itemsToShow}, 1fr)` }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {displayed.map((video, i) =>
              video?.snippet ? (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative">
                    {video.snippet.thumbnails?.high ? (
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
                        <FaYoutube className="text-4xl text-gray-400" />
                      </div>
                    )}
                    {/* Play overlay */}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.snippet.resourceId?.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all group"
                      aria-label={`Ver ${video.snippet.title}`}
                    >
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaYoutube className="text-white text-2xl" />
                      </div>
                    </a>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-montserrat font-bold text-gray-900 text-sm mb-2 line-clamp-2">
                      {video.snippet.title}
                    </h3>
                    <p className="font-inter text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                      {video.snippet.description?.substring(0, 100) || 'Sin descripción'}...
                    </p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.snippet.resourceId?.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-montserrat font-semibold text-xs px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <FaYoutube /> Ver en YouTube
                    </a>
                  </div>
                </motion.div>
              ) : null
            )}
          </motion.div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-brand-amber text-brand-blue rounded-full flex items-center justify-center shadow-md transition-all ${
              canNext ? 'hover:bg-brand-amber-dark cursor-pointer' : 'opacity-30 cursor-default'
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* Dots indicator */}
      {!loading && !error && videos.length > itemsToShow && (
        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {Array.from({ length: videos.length - itemsToShow + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                i === startIndex ? 'bg-brand-amber w-5' : 'bg-gray-300'
              }`}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default VideoGrid;
