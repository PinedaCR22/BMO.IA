import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';

interface CardInfo {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface CardsProps {
  isLightMode: boolean;
}

const Cards: FC<CardsProps> = ({ isLightMode }) => {
  const { t } = useTranslation('cards');

  const cardData: CardInfo[] = [
    {
      title: t('historiaTitle'),
      description: t('historiaDesc'),
      link: '/historia',
      icon: (
        <FaHistory className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
      ),
    },
    {
      title: t('beneficiosTitle'),
      description: t('beneficiosDesc'),
      link: '/beneficios',
      icon: (
        <FaLightbulb className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
      ),
    },
    {
      title: t('aportesTitle'),
      description: t('aportesDesc'),
      link: '/aportes',
      icon: (
        <FaHandsHelping className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
      ),
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-16 transition-colors duration-500 ${
        isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="grid gap-14 md:grid-cols-3">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`group rounded-2xl shadow-2xl p-10 h-full flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-3xl ${
              isLightMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">{card.icon}</div>
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-lg mb-6">{card.description}</p>
            <Link
              to={card.link}
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-8 rounded transition-colors"
            >
              {t('masInfo')}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
