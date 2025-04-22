// src/components/Image.tsx
import React from 'react'
import portadaBMO from '../Images/portadaBMO.jpg' // Ajusta la ruta y extensión según tu archivo

const Image: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh]">
      <img
        src={portadaBMO}
        alt="Portada BMO"
        className="w-full h-full object-cover"
      />

      {/* Contenedor absoluto para centrar texto y flechas */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        {/* Texto en dos líneas con fondo negro semitransparente */}
        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded text-center">
          Soporte técnico inteligente
          <br />
          con IA
        </h1>

        {/* Flecha hacia abajo con animación de rebote */}
        <div className="mt-4 animate-bounce text-white">
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
        </div>
      </div>
    </div>
  )
}

export default Image
