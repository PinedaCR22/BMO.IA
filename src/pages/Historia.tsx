import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { FaHistory, FaRobot, FaUsers, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Historia: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();
  const { t } = useTranslation('historia');

  const eventos = t('eventos', { returnObjects: true }) as {
    titulo: string;
    desc: string;
  }[];

  return (
    <motion.section
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        isLightMode ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <FaHistory className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('titulo')}</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">{t('intro')}</p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div className="flex items-start" variants={fadeInUp}>
          <FaRobot className="text-5xl text-teal-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('tecnologiaTitulo')}</h2>
            <p className="leading-relaxed">{t('tecnologiaDesc')}</p>
          </div>
        </motion.div>

        <motion.div className="flex items-start" variants={fadeInUp}>
          <FaUsers className="text-5xl text-teal-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('usuarioTitulo')}</h2>
            <p className="leading-relaxed">{t('usuarioDesc')}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 relative max-w-3xl mx-auto before:content-[''] before:absolute before:w-1 before:h-full before:bg-teal-500 before:left-4"
        variants={fadeInUp}
      >
        <div className="pl-12 space-y-12">
          {eventos.map((evento, index) => (
            <div className="relative" key={index}>
              <div className="absolute left-0 top-1">
                <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
              </div>
              <h3 className="pl-8 text-xl md:text-2xl font-bold">{evento.titulo}</h3>
              <p className="mt-2 leading-relaxed">{evento.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Historia;
