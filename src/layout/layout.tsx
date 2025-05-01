import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const LightModeContext = createContext({
  isLightMode: true,
  toggleMode: () => {},
});

const Layout: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleMode = () => setIsLightMode((prev) => !prev);

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleMode }}>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-500 ${
          isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}
      >
        {/* Header completamente pegado al top */}
        <Header isLightMode={isLightMode} toggleMode={toggleMode} />

        {/* Main sin espacio entre secciones */}
        <main className="flex-grow w-full">
          <Outlet context={{ isLightMode, toggleMode }} />
        </main>

        <Footer />
      </div>
    </LightModeContext.Provider>
  );
};

export default Layout;
