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
        <FaLightbulb className="mx-auto text-teal-500 text-6xl mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de BMO.IA</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed">
          Descubrí cómo nuestra plataforma basada en inteligencia artificial revoluciona el soporte técnico para computadoras,
          brindando soluciones inmediatas, efectivas y seguras tanto para usuarios domésticos como para técnicos especializados.
        </p>
      </motion.div>

      {/* Grid de Beneficios */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {[
          {
            icon: FaBolt,
            title: 'Diagnóstico Instantáneo',
            desc: 'Detectá rápidamente errores comunes en tu computadora sin necesidad de esperar asistencia humana.',
          },
          {
            icon: FaClock,
            title: 'Soporte 24/7',
            desc: 'Asistencia técnica constante, disponible en todo momento para resolver cualquier incidente en tu equipo.',
          },
          {
            icon: FaMobileAlt,
            title: 'Interfaz Amigable',
            desc: 'Diseño intuitivo que facilita la interacción incluso para usuarios con pocos conocimientos técnicos.',
          },
          {
            icon: FaUserShield,
            title: 'Seguridad de la Información',
            desc: 'Tus datos y consultas técnicas están protegidas mediante protocolos cifrados de alta seguridad.',
          },
          {
            icon: FaLightbulb,
            title: 'Mejora Continua',
            desc: 'La IA aprende con cada diagnóstico, mejorando la precisión en la identificación de fallos técnicos.',
          },
          {
            icon: FaClock,
            title: 'Escalabilidad Inteligente',
            desc: 'Capacidad de atender múltiples dispositivos y consultas simultáneas sin perder velocidad ni efectividad.',
          },
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
          Cómo utilizar el asistente de BMO.IA
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="flex items-start">
            <FaKeyboard className="text-teal-500 mt-1 mr-3" />
            <span>
              Ingresá a la sección{' '}
              <Link to="/chat" className="font-bold text-teal-500 hover:underline">
                chat
              </Link>{' '}
              desde el menú principal.
            </span>
          </li>
          <li className="flex items-start">
            <FaPaperPlane className="text-teal-500 mt-1 mr-3" />
            Escribí tu consulta relacionada con tu computadora: errores del sistema, lentitud, programas que no abren, etc.
          </li>
          <li className="flex items-start">
            <FaCommentDots className="text-teal-500 mt-1 mr-3" />
            <span>
              Hacé clic en <strong>Enviar</strong> o presioná <strong>Enter</strong> para obtener la respuesta.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-teal-500 mt-1 mr-3" />
            Revisá la solución proporcionada por la IA y aplicá los pasos recomendados.
          </li>
          <li className="flex items-start">
            <FaSignOutAlt className="text-teal-500 mt-1 mr-3" />
            Cuando finalices tu sesión de soporte, podés cerrar sesión de forma segura desde el botón superior derecho.
          </li>
        </ol>
      </motion.div>
    </motion.section>
  );
};

export default Beneficios;
