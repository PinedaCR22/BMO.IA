import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLaptop } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        
        {/* LOGO + Descripción */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-teal-400 text-3xl">
            <FaLaptop />
            <span className="font-bold text-white text-xl">BMO.IA</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            {t('brand.description')}
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            {t('contact.title')}
          </h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-teal-400" />
              <span>{t('contact.phone')}</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-teal-400" />
              <span>{t('contact.email')}</span>
            </p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            {t('social.title')}
          </h4>
          <div className="flex space-x-4 text-teal-400 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-gray-500 text-sm pt-6">
        &copy; {new Date().getFullYear()} {t('credits')}
      </div>
    </footer>
  );
};

export default Footer;
