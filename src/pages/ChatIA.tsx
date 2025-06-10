import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ChatIAProps {
  isLightMode: boolean;
}

// Variantes de animación
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ChatIA: FC<ChatIAProps> = ({ isLightMode }) => {
  const { t } = useTranslation('chat');

  return (
    <motion.section
      id="next-section"
      className={`w-full min-h-[fit-content] py-20 px-4 transition-colors duration-500 overflow-hidden ${
        isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
      }`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isLightMode
            ? 'bg-white border-4 border-teal-500'
            : 'bg-gray-800 border-4 border-teal-600'
        }`}
      >
        {/* LADO IZQUIERDO */}
        <div className="p-10 flex flex-col justify-center items-start">
          <h3 className="text-3xl font-bold mb-4">
            {t('left.title')}
          </h3>
          <p className={`text-lg leading-relaxed ${isLightMode ? 'text-black' : 'text-gray-300'}`}>
            {t('left.paragraph')}
          </p>
        </div>

        {/* LADO DERECHO */}
        <div className="p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700">
          <FaRobot className="text-5xl text-teal-500 animate-pulse mb-4" />
          <h2 className="text-2xl font-bold mb-3">{t('right.title')}</h2>
          <p className={`mb-6 leading-relaxed ${isLightMode ? 'text-black' : 'text-gray-300'}`}>
            {t('right.paragraph')}
          </p>
          <Link
            to="/chat"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            {t('right.button')}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ChatIA;
