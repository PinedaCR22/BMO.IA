// src/pages/Historia.tsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { FaHistory, FaRobot, FaUsers, FaClock } from 'react-icons/fa';

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

const Historia: React.FC = () => {
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
        <FaHistory className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">
          BMO.IA nació de la visión de ofrecer un soporte técnico accesible,
          inmediato y personalizado. Desde sus primeros días, nuestro objetivo
          ha sido democratizar el acceso a la asistencia técnica mediante
          inteligencia artificial de última generación.
        </p>
      </motion.div>

      {/* Sección de hitos */}
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          className="flex items-start"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaRobot className="text-5xl text-teal-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tecnología Avanzada</h2>
            <p className="leading-relaxed">
              Empleamos modelos de lenguaje entrenados en millones de
              conversaciones técnicas para ofrecer respuestas precisas y
              contextuales en tiempo real.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <FaUsers className="text-5xl text-teal-500 mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Enfoque en el Usuario</h2>
            <p className="leading-relaxed">
              Cada interacción es una oportunidad para aprender y mejorar.
              Recopilamos feedback para adaptar nuestras respuestas y ofrecer
              una experiencia cada vez más personalizada.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Línea de tiempo */}
      <motion.div
        className="mt-20 relative max-w-3xl mx-auto
          before:content-[''] before:absolute before:w-1 before:h-full before:bg-teal-500 before:left-4"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <div className="pl-12 space-y-12">
          {/* Evento 1 */}
          <div className="relative">
            <div className="absolute left-0 top-1">
              <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
            </div>
            <h3 className="pl-8 text-xl md:text-2xl font-bold">
              Mayo 2024: Lanzamiento Inicial
            </h3>
            <p className="mt-2 leading-relaxed">
              Presentamos la primera versión de BMO.IA con funcionalidades básicas
              de respuesta a preguntas.
            </p>
          </div>

          {/* Evento 2 */}
          <div className="relative">
            <div className="absolute left-0 top-1">
              <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
            </div>
            <h3 className="pl-8 text-xl md:text-2xl font-bold">
              Octubre 2024: Mejoras de Modelo
            </h3>
            <p className="mt-2 leading-relaxed">
              Integramos nuestro modelo con capacidad de entender contexto y
              mantener el hilo de conversación.
            </p>
          </div>

          {/* Evento 3 */}
          <div className="relative">
            <div className="absolute left-0 top-1">
              <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
            </div>
            <h3 className="pl-8 text-xl md:text-2xl font-bold">
              Marzo 2025: Crecimiento de la Comunidad
            </h3>
            <p className="mt-2 leading-relaxed">
              Alcanzamos más de 10.000 usuarios activos, mejorando continuamente
              a partir de sus comentarios.
            </p>
          </div>

          {/* Evento 4 */}
          <div className="relative">
            <div className="absolute left-0 top-1">
              <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
            </div>
            <h3 className="pl-8 text-xl md:text-2xl font-bold">
              Junio 2025: Soporte Multilenguaje
            </h3>
            <p className="mt-2 leading-relaxed">
              Añadimos soporte para múltiples idiomas, permitiendo a usuarios de
              todo el mundo interactuar en su lengua nativa.
            </p>
          </div>

          {/* Evento 5 */}
          <div className="relative">
            <div className="absolute left-0 top-1">
              <FaClock className="text-teal-500 bg-white rounded-full p-1 text-xl" />
            </div>
            <h3 className="pl-8 text-xl md:text-2xl font-bold">
              Agosto 2025: Integración con Sistemas Externos
            </h3>
            <p className="mt-2 leading-relaxed">
              Implementamos conectores para integrarnos con sistemas de tickets
              y bases de datos corporativas, mejorando el flujo de trabajo.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Historia;
