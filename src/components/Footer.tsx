const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">BMO.IA, tu plataforma inteligente</h3>
            <p className="text-gray-400">
              Transformando la asistencia técnica con inteligencia artificial para un futuro más inteligente.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Contacto</h4>
            <p className="text-gray-400">Email: emmapr2233@gmail.com</p>
            <p className="text-gray-400">Tel: +506-8504-2171</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500">Facebook</a>
              <a href="#" className="hover:text-teal-500">Twitter</a>
              <a href="#" className="hover:text-teal-500">Instagram</a>
              <a href="#" className="hover:text-teal-500">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Plataforma IA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
