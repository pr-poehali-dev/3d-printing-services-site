
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Materials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Материалы для 3D печати</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Мы используем широкий спектр качественных материалов для создания ваших проектов
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Материал 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1602414120380-24a70427be0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="PLA пластик" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PLA пластик</h3>
                <p className="text-gray-600 mb-4">
                  Экологичный биоразлагаемый материал, идеальный для прототипов, игрушек и декоративных элементов.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">от 2500 ₽/кг</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    Эко-материал
                  </span>
                </div>
              </div>
            </div>

            {/* Материал 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1609942072337-43f9ad4e31cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="ABS пластик" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ABS пластик</h3>
                <p className="text-gray-600 mb-4">
                  Прочный и термостойкий материал для функциональных деталей, выдерживающих механические нагрузки.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">от 2800 ₽/кг</span>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    Прочный
                  </span>
                </div>
              </div>
            </div>

            {/* Материал 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1611502867268-9193c5c95f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="PETG пластик" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PETG пластик</h3>
                <p className="text-gray-600 mb-4">
                  Универсальный материал с отличными механическими свойствами и химической стойкостью.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">от 3200 ₽/кг</span>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    Универсальный
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
