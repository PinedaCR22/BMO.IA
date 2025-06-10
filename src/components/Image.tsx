import React from 'react';

import { useTranslation } from 'react-i18next';
import BMOIA from '../Images/BMOIA.png';


interface ImageProps {
  isLightMode: boolean;
}

const Image: React.FC<ImageProps> = ({ isLightMode }) => {
  const { t } = useTranslation('image');

  const handleScroll = () => {
    const target = document.getElementById('next-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative w-full h-[70vh] transition-colors duration-500 overflow-hidden ${
        isLightMode ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      <img
        src={BMOIA}
        alt="Portada BMO"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded text-center whitespace-pre-line">
          {t('title')}

        </h1>
        <button
          onClick={handleScroll}
          className="mt-4 animate-bounce text-white"
          aria-label="Desplazar hacia abajo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Image;
