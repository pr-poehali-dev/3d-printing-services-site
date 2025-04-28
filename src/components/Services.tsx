
import { Link } from "react-router-dom";
import { Layers, Settings, Cpu, Package, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceItems = [
    {
      icon: <Layers className="h-6 w-6 text-print3d-purple" />,
      title: "3D-печать прототипов",
      description: "Быстрое изготовление прототипов для тестирования идей и концепций"
    },
    {
      icon: <Cpu className="h-6 w-6 text-print3d-purple" />,
      title: "Функциональные детали",
      description: "Печать деталей с высокой точностью для использования в готовых изделиях"
    },
    {
      icon: <Settings className="h-6 w-6 text-print3d-purple" />,
      title: "Мелкосерийное производство",
      description: "Производство малых партий изделий без затрат на дорогостоящие формы"
    }
  ];

  const features = [
    {
      icon: <Package className="h-5 w-5" />,
      title: "Широкий выбор материалов",
      description: "PLA, ABS, PETG, нейлон, гибкие пластики и специальные композиты"
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Прозрачное ценообразование",
      description: "Стоимость рассчитывается исходя из объема материала и времени печати"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Быстрое выполнение",
      description: "Выполнение большинства заказов в течение 2-3 рабочих дней"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-print3d-darkBlue">
            Наши <span className="text-print3d-purple">услуги</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl">
            Комплексные решения для ваших 3D-печатных проектов
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-print3d-purple/10 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-print3d-darkBlue">{item.title}</h3>
              <p className="text-gray-500 flex-grow mb-4">{item.description}</p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="/services">Подробнее</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="rounded-full p-2 bg-print3d-purple/10 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg text-print3d-darkBlue">{feature.title}</h3>
                <p className="text-gray-500 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
