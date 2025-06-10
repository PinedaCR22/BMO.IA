import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  FaLightbulb, FaBolt, FaClock, FaMobileAlt, FaUserShield,
  FaKeyboard, FaPaperPlane, FaCommentDots, FaCheckCircle, FaSignOutAlt
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Beneficios: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();
  const { t } = useTranslation('beneficios');

  const iconList = [
    FaBolt, FaClock, FaMobileAlt, FaUserShield, FaLightbulb, FaClock
  ];

  const items = t('items', { returnObjects: true }) as { title: string; desc: string }[];
  const guia = t('guia', { returnObjects: true }) as string[];

  const guiaIcons = [FaKeyboard, FaPaperPlane, FaCommentDots, FaCheckCircle, FaSignOutAlt];

  return (
    <motion.section
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${isLightMode ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <FaLightbulb className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('titulo')}</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">{t('descripcion')}</p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {items.map(({ title, desc }, idx) => {
          const Icon = iconList[idx];
          return (
            <motion.div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <Icon className="text-teal-500 text-5xl mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p>{desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div className="max-w-3xl mx-auto space-y-8" variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{t('guiaTitulo')}</h2>
        <ol className="list-decimal list-inside space-y-4">
          {guia.map((step, index) => {
            const Icon = guiaIcons[index];
            return (
              <li key={index} className="flex items-start">
                <Icon className="text-teal-500 mt-1 mr-3" />
                <span>{step}</span>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </motion.section>
  );
};

export default Beneficios;
