import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardInfo {
  title: string;
  description: string;
  link: string;
}

const cardData: CardInfo[] = [
  {
    title: 'Historia',
    description:
      'Conoce el origen y la evolución de nuestra plataforma de soporte técnico impulsado por IA.',
    link: '/historia', 
  },
  {
    title: 'Beneficios',
    description:
      'Descubre cómo nuestro soporte automatizado puede ayudarte a resolver problemas de manera eficiente.',
    link: '/beneficios',
  },
  {
    title: 'Aporte',
    description:
      'Entérate de cómo contribuimos al avance de la asistencia técnica y el aprendizaje continuo de la IA.',
    link: '/aporte',
  },
];

const Cards: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        {cardData.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-700 mb-6">
                {card.description}
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to={card.link}
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Más información
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
