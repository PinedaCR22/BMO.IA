import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  FaHandsHelping,
  FaBolt,
  FaClock,
  FaCogs,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaSync
} from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Aportes: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();

  return (
    <motion.section
      className={`min-h-screen px-6 py-20 transition-colors duration-500 ${isLightMode ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'
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
        <FaHandsHelping className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">Nuestros aportes</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">
          Descubrí cómo BMO.IA aporta valor al resolver tus dudas técnicas de forma rápida,
          constante y adaptada a tus necesidades.
        </p>
      </motion.div>

      {/* Grid de aportes */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {[
          {
            icon: <FaBolt className="text-teal-500 text-5xl mb-4" />,
            title: 'Eficiencia operativa',
            desc: 'Respuestas optimizadas para resolver fallos comunes en computadoras, como errores del sistema, fallos de conexión y programas congelados.'
          },
          {
            icon: <FaClock className="text-teal-500 text-5xl mb-4" />,
            title: 'Soporte ininterrumpido',
            desc: 'Accedé a diagnósticos y soluciones para tu equipo las 24 horas del día, sin necesidad de asistencia humana.'
          },
          {
            icon: <FaCogs className="text-teal-500 text-5xl mb-4" />,
            title: 'Respuestas personalizadas',
            desc: 'La IA analiza tu caso específico para darte pasos adecuados según el tipo de dispositivo, sistema operativo y tipo de fallo técnico.'
          },
          {
            icon: <FaShieldAlt className="text-teal-500 text-5xl mb-4" />,
            title: 'Seguridad informática',
            desc: 'Tus consultas sobre errores técnicos y estado del sistema se manejan con total confidencialidad bajo protocolos seguros.'
          },
          {
            icon: <FaExpandArrowsAlt className="text-teal-500 text-5xl mb-4" />,
            title: 'Adaptabilidad técnica',
            desc: 'Nuestro sistema gestiona múltiples solicitudes simultáneas, desde usuarios domésticos hasta empresas con cientos de equipos.'
          },
          {
            icon: <FaSync className="text-teal-500 text-5xl mb-4" />,
            title: 'Mejora continua',
            desc: 'Cada interacción contribuye al aprendizaje del sistema, mejorando su precisión al identificar y resolver fallos informáticos complejos.'
          }
        ].map(({ icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            {icon}
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Aportes;
