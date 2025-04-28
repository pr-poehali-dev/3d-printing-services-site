
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Смирнов",
    role: "Продуктовый дизайнер",
    content: "Заказывал прототипы для нового продукта. Качество печати превзошло ожидания, а сроки были соблюдены точно. Однозначно буду обращаться снова!",
    rating: 5
  },
  {
    name: "Марина Котова",
    role: "Инженер-конструктор",
    content: "Использовали сервис для печати функциональных деталей из нейлона. Результат точно соответствовал 3D-модели, все размеры в допуске. Рекомендую.",
    rating: 5
  },
  {
    name: "Дмитрий Волков",
    role: "Архитектор",
    content: "Заказывал макеты зданий для презентации клиентам. Очень доволен детализацией и качеством. Сервис стал надежным партнером для наших проектов.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-print3d-darkBlue">
            Отзывы наших <span className="text-print3d-purple">клиентов</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl">
            Что говорят о нас те, кто уже воспользовался нашими услугами
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-print3d-purple/10 w-12 h-12 flex items-center justify-center text-print3d-purple font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-print3d-darkBlue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
