import { FC } from 'react';
import { Link } from 'react-router-dom'; 
import portadaBMO from '../Images/portadaBMO.jpg'; 

const ChatIA: FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center my-10 mx-auto max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Imagen a la izquierda */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={portadaBMO}
          alt="Portada BMO"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido (texto y botón) a la derecha */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Chat con IA</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Haz tus consultas de soporte técnico y obtén respuestas 
          instantáneas con nuestra IA inteligente. ¡Tu solución 
          está a solo un mensaje de distancia!
        </p>
        
        {/* Botón de acción */}
        <Link
          to="/chat"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          Comenzar
        </Link>
      </div>
    </section>
  );
};

export default ChatIA;
