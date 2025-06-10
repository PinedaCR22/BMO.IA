import { FC } from 'react';
import Slider from 'react-slick';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface SliderProps {
  isLightMode: boolean;
}
// fadeInUp variante (igual que en Cards)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SliderComponent: FC<SliderProps> = ({ isLightMode }) => {
  const { t } = useTranslation('slider');

  const slides = t('slides', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    image: string;
  }>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="relative w-11/12 md:w-9/12 mx-auto my-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden transition-colors duration-500 ${
                isLightMode ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'
              }`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
