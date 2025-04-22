import React, { FC } from 'react';
import Slider from 'react-slick';

import portadaBMO from '../Images/portadaBMO.jpg'; // Ajusta la ruta a tu archivo real

// Tipado para las flechas personalizadas
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Flecha Siguiente
const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-100 z-10"
      onClick={onClick}
    >
      {/* Icono de flecha (puedes reemplazarlo por otro SVG o ícono) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

// Flecha Anterior
const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-md p-2 hover:bg-gray-100 z-10"
      onClick={onClick}
    >
      {/* Icono de flecha (puedes reemplazarlo por otro SVG o ícono) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

interface Slide {
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    title: 'Nuestra Misión',
    description:
      'Brindar asistencia rápida y confiable en preguntas de soporte técnico a través de una IA avanzada, facilitando la resolución de problemas de manera eficiente.',
  },
  {
    title: 'Nuestra Visión',
    description:
      'Convertirnos en la plataforma líder en soporte técnico automatizado, ofreciendo soluciones innovadoras y personalizadas para optimizar la experiencia del usuario.',
  },
];

const CarouselHome: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative w-11/12 md:w-9/12 mx-auto my-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Imagen a la izquierda */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={portadaBMO}
                  alt="Portada BMO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido (título y descripción) a la derecha */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{slide.title}</h2>
                <p className="text-gray-700 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;
