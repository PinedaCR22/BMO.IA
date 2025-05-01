// src/pages/Beneficios.tsx
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  FaLightbulb,
  FaBolt,
  FaClock,
  FaMobileAlt,
  FaUserShield,
  FaKeyboard,
  FaPaperPlane,
  FaCommentDots,
  FaCheckCircle,
  FaSignOutAlt,
} from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Beneficios: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();

  return (
    <motion.section
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${
        isLightMode ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Encabezado */}
      <motion.div
        className="text-center mb-16"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <FaLightbulb className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de BMO.IA</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">
          Descubrí cómo nuestro chat con IA transforma la asistencia técnica,
          brindando ventajas únicas para cualquier usuario o empresa.
        </p>
      </motion.div>

      {/* Grid de Beneficios */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {[
          { icon: FaBolt, title: 'Respuestas Inmediatas', desc: 'Reduce tu tiempo de espera con respuestas al instante.' },
          { icon: FaClock, title: 'Disponibilidad 24/7', desc: 'Acceso al soporte en cualquier momento, sin restricciones.' },
          { icon: FaMobileAlt, title: 'Interfaz Amigable', desc: 'Un diseño intuitivo que facilita la interacción con la IA.' },
          { icon: FaUserShield, title: 'Privacidad Segura', desc: 'Tus conversaciones están protegidas con altos estándares de seguridad.' },
          { icon: FaLightbulb, title: 'Aprendizaje Constante', desc: 'La IA mejora con cada interacción para ofrecer mejores respuestas.' },
          { icon: FaClock, title: 'Escalabilidad', desc: 'Se adapta a cualquier volumen de consultas sin perder rendimiento.' },
        ].map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <Icon className="text-teal-500 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Guía de Uso */}
      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Cómo utilizar el chat de BMO.IA
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="flex items-start">
            <FaKeyboard className="text-teal-500 mt-1 mr-3" />
            <span>
              Abre la ruta{' '}
              <Link to="/chat" className="font-bold text-teal-500 hover:underline">
                chat
              </Link>{' '}
              desde el menú superior.
            </span>
          </li>
          <li className="flex items-start">
            <FaPaperPlane className="text-teal-500 mt-1 mr-3" />
            Escribe tu pregunta en el campo de texto.
          </li>
          <li className="flex items-start">
            <FaCommentDots className="text-teal-500 mt-1 mr-3" />
            <span>
              Haz clic en <strong>enviar</strong> o presiona <strong>Enter</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-teal-500 mt-1 mr-3" />
            Revisa la respuesta generada por la IA.
          </li>
          <li className="flex items-start">
            <FaSignOutAlt className="text-teal-500 mt-1 mr-3" />
            Cuando finalices, cierra sesión con el botón correspondiente.
          </li>
        </ol>
      </motion.div>
    </motion.section>
  );
};

export default Beneficios;
