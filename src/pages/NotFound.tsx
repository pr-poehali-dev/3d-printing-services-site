
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-bold text-print3d-purple">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6 text-print3d-darkBlue">Страница не найдена</h2>
          <p className="text-gray-500 mb-8">
            Страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild size="lg" className="bg-print3d-purple hover:bg-print3d-darkPurple">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
