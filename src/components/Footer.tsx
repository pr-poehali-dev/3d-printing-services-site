
import { Link } from "react-router-dom";
import { Printer3D, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-print3d-darkBlue text-white">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Printer3D className="h-8 w-8 text-print3d-purple" />
              <span className="font-bold text-xl">3D-Принт Сервис</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Профессиональная 3D-печать пластиками с индивидуальным подходом к каждому клиенту
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-print3d-purple" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-print3d-purple" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-print3d-purple" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-print3d-purple">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-print3d-purple">Услуги</Link>
              </li>
              <li>
                <Link to="/materials" className="text-gray-400 hover:text-print3d-purple">Материалы</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-print3d-purple">Портфолио</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-print3d-purple">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-print3d-purple">3D-печать прототипов</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-print3d-purple">Функциональные детали</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-print3d-purple">Мелкосерийное производство</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-print3d-purple">3D-моделирование</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-print3d-purple" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-print3d-purple" />
                <span>info@3dprint-service.ru</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-print3d-purple" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} 3D-Принт Сервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
