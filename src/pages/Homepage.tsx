import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Image from '../components/Image';
import ChatIA from './ChatIA';
import Slider from '../components/Slider';
import Cards from '../components/Cards';

const HomePage: React.FC = () => {
  const { isLightMode } = useOutletContext<{
    isLightMode: boolean;
    toggleMode: () => void;
  }>();

  return (
    <div className="min-h-screen w-full transition-colors duration-500">
      <main className="w-full">
        {/* Imagen principal — full-bleed */}
        <section
          className={`w-full transition-colors duration-500 ${
            isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
          }`}
        >
          <Image isLightMode={isLightMode} />
        </section>

        {/* ChatIA */}
        <section
          className={`px-4 py-16 transition-colors duration-500 ${
            isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
          }`}
        >
          <ChatIA isLightMode={isLightMode} />
        </section>

        {/* Slider */}
        <section
          className={`px-4 py-16 transition-colors duration-500 ${
            isLightMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'
          }`}
        >
          <Slider isLightMode={isLightMode} />
        </section>

        {/* Cards */}
        <section
          className={`px-4 py-20 transition-colors duration-500 ${
            isLightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
          }`}
        >
          <Cards isLightMode={isLightMode} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;