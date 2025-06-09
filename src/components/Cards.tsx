// src/components/Cards.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

interface CardInfo {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface CardsProps {
  isLightMode: boolean;
}

const cardData: CardInfo[] = [
  {
    title: 'Historia',
    description:
      'Conocé el origen y evolución de nuestra plataforma de soporte técnico especializado en computadoras, diseñada para asistir a usuarios con problemas cotidianos y complejos mediante el poder de la IA.',
    link: '/historia',
    icon: (
      <FaHistory className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
    ),
  },
  {
    title: 'Beneficios',
    description:
      'Descubrí cómo nuestro soporte automatizado puede ayudarte a resolver fallos de hardware y software, mejorar el rendimiento y prevenir errores de forma eficiente y autónoma.',
    link: '/beneficios',
    icon: (
      <FaLightbulb className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
    ),
  },
  {
    title: 'Aportes',
    description:
      'Enterate de cómo contribuimos al avance de la asistencia técnica para computadoras, promoviendo el aprendizaje automatizado y el acceso equitativo al soporte digital a través de IA.',
    link: '/aportes',
    icon: (
      <FaHandsHelping className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />
    ),
  },
];

// Variantes de animación: fade in y slide up
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Cards: FC<CardsProps> = ({ isLightMode }) => {
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
            transition={{ duration: 1 }} // <-- aquí ajustamos la velocidad
          >
            <div className="mb-6">{card.icon}</div>
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-lg mb-6">{card.description}</p>
            <Link
              to={card.link}
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-8 rounded transition-colors"
            >
              Más información
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
