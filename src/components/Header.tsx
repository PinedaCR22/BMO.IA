import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

interface HeaderProps {
  isLightMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLightMode, toggleMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`w-full z-50 transition-colors duration-500 ${
        isLightMode ? 'bg-teal-700 text-white' : 'bg-gray-900 text-white'
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-6">
        {/* IZQUIERDA: Logo y modo oscuro */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-bold">
            BMO.IA
          </Link>
          <button
            onClick={toggleMode}
            className={`text-xl transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
            aria-label="Toggle Mode"
          >
            {isLightMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* DERECHA: Desktop */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium">
          <Link
            to="/aportes"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
          >
            Aportes
          </Link>
          <Link
            to="/historia"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
          >
            Historia
          </Link>
          <Link
            to="/beneficios"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
          >
            Beneficios
          </Link>
          <Link
            to="/chat"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Chat IA
          </Link>
        </div>

        {/* MENÚ HAMBURGUESA (mobile) */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className={`text-2xl transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL (flujo normal) */}
      {menuOpen && (
        <div className="md:hidden px-4 py-6 flex flex-col gap-4 items-center bg-inherit text-inherit shadow-md">
          <Link
            to="/aportes"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Aportes
          </Link>
          <Link
            to="/historia"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Historia
          </Link>
          <Link
            to="/beneficios"
            className={`transition-colors duration-300 ${
              isLightMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Beneficios
          </Link>
          <Link
            to="/chat"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Chat IA
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
