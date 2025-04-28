
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const materials = [
  {
    name: "PLA",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: ["Биоразлагаемый", "Хорошая детализация", "Низкая температура печати"]
  },
  {
    name: "ABS",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: ["Ударопрочный", "Термостойкий", "Для функциональных деталей"]
  },
  {
    name: "PETG",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: ["Пищевой пластик", "Влагостойкий", "Высокая прочность"]
  }
];

const MaterialsOverview = () => {
  return (
    <section className="py-12 md:py-24 bg-print3d-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-print3d-darkBlue">
            Материалы для <span className="text-print3d-purple">3D-печати</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl">
            Подберем оптимальный материал для вашего проекта
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {materials.map((material, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <img
                  src={material.image}
                  alt={`${material.name} пластик для 3D печати`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 text-print3d-darkBlue">{material.name}</h3>
                <ul className="space-y-2 mb-4">
                  {material.properties.map((property, i) => (
                    <li key={i} className="flex items-center text-gray-500">
                      <span className="mr-2 text-print3d-purple">•</span>
                      {property}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="bg-print3d-purple hover:bg-print3d-darkPurple">
            <Link to="/materials">Все материалы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaterialsOverview;
