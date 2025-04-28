
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">3D</span>
            <span className="text-2xl font-bold">Print</span>
          </NavLink>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Услуги
            </NavLink>
            <NavLink
              to="/materials"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Материалы
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Портфолио
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Контакты
            </NavLink>
          </nav>

          {/* Кнопка связи */}
          <Button
            asChild
            className="hidden md:flex"
          >
            <NavLink to="/contact">
              Заказать печать
            </NavLink>
          </Button>

          {/* Мобильное меню кнопка */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bg-white shadow-lg z-50 h-screen">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium p-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium p-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Услуги
              </NavLink>
              <NavLink
                to="/materials"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium p-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Материалы
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium p-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Портфолио
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium p-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                Контакты
              </NavLink>
            </nav>
            <Button
              asChild
              className="w-full"
            >
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Заказать печать
              </NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
