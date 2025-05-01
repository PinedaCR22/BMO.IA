// src/pages/Aportes.tsx
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
        <FaHandsHelping className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">Nuestros Aportes</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">
          Descubrí cómo BMO.IA aporta valor al resolver tus dudas técnicas
          de forma rápida, constante y adaptada a tus necesidades.
        </p>
      </motion.div>

      {/* Grid de aportes */}
      <div className="grid gap-12 md:grid-cols-3">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaBolt className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Eficiencia</h2>
          <p>
            Respuestas optimizadas al instante, reduciendo tiempos de espera
            y acelerando la resolución de problemas.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaClock className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Disponibilidad 24/7</h2>
          <p>
            Accedé a soporte técnico en cualquier momento, sin importar la
            hora ni el día.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaCogs className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Personalización</h2>
          <p>
            Ajustamos nuestras respuestas a tu contexto y aprendemos de cada
            interacción para ofrecer recomendaciones más precisas.
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaShieldAlt className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Seguridad y Privacidad</h2>
          <p>
            Protegemos tu información con protocolos de seguridad avanzados
            y confidencialidad garantizada.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaExpandArrowsAlt className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Escalabilidad</h2>
          <p>
            Nuestra arquitectura maneja desde consultas sencillas hasta picos
            de tráfico elevados sin perder rendimiento.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaSync className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Aprendizaje Continuo</h2>
          <p>
            El sistema aprende de cada interacción para mejorar la calidad
            de sus respuestas de forma constante.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aportes;
