import { Link } from "react-router-dom";
import { Printer3D } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Printer3D className="h-8 w-8 text-print3d-purple" />
          <span className="font-bold text-xl text-print3d-darkBlue">3D-Принт Сервис</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-md font-medium hover:text-print3d-purple transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-md font-medium hover:text-print3d-purple transition-colors">
            Услуги
          </Link>
          <Link to="/materials" className="text-md font-medium hover:text-print3d-purple transition-colors">
            Материалы
          </Link>
          <Link to="/portfolio" className="text-md font-medium hover:text-print3d-purple transition-colors">
            Портфолио
          </Link>
          <Link to="/contact" className="text-md font-medium hover:text-print3d-purple transition-colors">
            Контакты
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden md:inline-flex rounded-md bg-print3d-purple px-4 py-2 text-sm font-medium text-white shadow hover:bg-print3d-darkPurple transition-colors"
          >
            Заказать печать
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
