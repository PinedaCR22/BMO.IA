import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  FaHandsHelping,
  FaBolt,
  FaClock,
  FaCogs,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaSync
} from 'react-icons/fa';
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

const Aportes: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();
  const { t } = useTranslation('aportes');

  const iconList = [
    <FaBolt className="text-teal-500 text-5xl mb-4" />,
    <FaClock className="text-teal-500 text-5xl mb-4" />,
    <FaCogs className="text-teal-500 text-5xl mb-4" />,
    <FaShieldAlt className="text-teal-500 text-5xl mb-4" />,
    <FaExpandArrowsAlt className="text-teal-500 text-5xl mb-4" />,
    <FaSync className="text-teal-500 text-5xl mb-4" />
  ];

  const items = t('items', { returnObjects: true }) as { title: string; desc: string }[];

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
        <FaHandsHelping className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">{t('titulo')}</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">{t('descripcion')}</p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {items.map(({ title, desc }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            {iconList[index]}
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Aportes;
