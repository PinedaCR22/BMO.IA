import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
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
      'Conoce el origen y evolución de nuestra plataforma de soporte técnico impulsado por IA.',
    link: '/historia',
    icon: <FaHistory className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />,
  },
  {
    title: 'Beneficios',
    description:
      'Descubre cómo nuestro soporte automatizado puede ayudarte a resolver problemas de forma eficiente.',
    link: '/beneficios',
    icon: <FaLightbulb className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />,
  },
  {
    title: 'Aportes',
    description:
      'Entérate de cómo contribuimos al avance de la asistencia técnica y el aprendizaje de la IA.',
    link: '/aportes',
    icon: <FaHandsHelping className="text-teal-500 text-5xl transition-all duration-300 group-hover:text-teal-700 group-hover:scale-125 group-hover:-translate-y-1" />,
  },
];

const Cards: FC<CardsProps> = ({ isLightMode }) => {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-16 transition-colors duration-500 ${
        isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="grid gap-14 md:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`group rounded-2xl shadow-2xl p-10 h-full flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-3xl ${
              isLightMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
            }`}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
