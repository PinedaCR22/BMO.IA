// src/components/Header.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-teal-600 text-white w-full">
      <nav className="w-full px-8 flex items-center justify-between py-8">
        {/* Logo extremo izquierdo */}
        <div className="text-2xl font-bold">
          <Link to="/">BMO.IA</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <Link to="/aportes" className="hover:text-gray-200">
            Aportes
          </Link>
          <Link to="/historia" className="hover:text-gray-200">
            Historia
          </Link>
          <Link to="/beneficios" className="hover:text-gray-200">
            Beneficios
          </Link>
          <Link
            to="/chat"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-lg font-semibold"
          >
            Chat IA
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-teal-600">
          <div className="px-8 py-4 flex flex-col space-y-4">
            <Link
              to="/aportes"
              className="hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aportes
            </Link>
            <Link
              to="/historia"
              className="hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Historia
            </Link>
            <Link
              to="/beneficios"
              className="hover:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              to="/chat"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chat IA
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
