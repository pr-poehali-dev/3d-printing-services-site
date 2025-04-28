
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Наши услуги 3D печати</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы предлагаем широкий спектр услуг 3D-печати для реализации ваших идей
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Услуга 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1610851467735-8945f29126b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="3D печать прототипов" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Печать прототипов</h3>
                <p className="text-gray-600 mb-4">
                  Быстрое создание функциональных прототипов для тестирования идей и концепций перед запуском в производство.
                </p>
                <span className="text-primary font-semibold">от 500 ₽/час</span>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Печать мелкосерийных партий" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Мелкосерийное производство</h3>
                <p className="text-gray-600 mb-4">
                  Экономичное решение для производства небольших партий продукции без необходимости изготовления дорогостоящих форм.
                </p>
                <span className="text-primary font-semibold">от 400 ₽/час</span>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="3D моделирование" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">3D моделирование</h3>
                <p className="text-gray-600 mb-4">
                  Профессиональное создание 3D моделей по вашим эскизам, чертежам или описаниям от наших опытных дизайнеров.
                </p>
                <span className="text-primary font-semibold">от 1500 ₽/модель</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
