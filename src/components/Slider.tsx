import { FC } from 'react';
import Slider from 'react-slick';
import portadaBMO from '../Images/portadaBMO.jpg';

interface Slide {
  title: string;
  description: string;
}

interface SliderProps {
  isLightMode: boolean;
}

const slides: Slide[] = [
  {
    title: 'Nuestra Misión',
    description:
      'Brindar asistencia rápida y confiable en preguntas de soporte técnico a través de una IA avanzada.',
  },
  {
    title: 'Nuestra Visión',
    description:
      'Convertirnos en la plataforma líder en soporte técnico automatizado con soluciones innovadoras.',
  },
];

const SliderComponent: FC<SliderProps> = ({ isLightMode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative w-11/12 md:w-9/12 mx-auto my-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden transition-colors duration-500 ${
                isLightMode ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'
              }`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={portadaBMO}
                  alt="Portada BMO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
