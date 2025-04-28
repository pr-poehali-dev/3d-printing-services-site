
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Printer, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-br from-print3d-lightGray to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/5 bg-[size:20px_20px] opacity-10"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-print3d-darkBlue">
                Профессиональная 3D-печать <span className="text-print3d-purple">на заказ</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                От прототипов до готовых изделий — воплотим вашу идею с точностью до микрона
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-print3d-purple hover:bg-print3d-darkPurple">
                <Link to="/contact">
                  Заказать печать <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Узнать больше</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Printer className="h-4 w-4 text-print3d-purple" />
                <span>Современное оборудование</span>
              </div>
              <div className="flex items-center gap-1">
                <Printer className="h-4 w-4 text-print3d-purple" />
                <span>Качественные материалы</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 relative">
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-full bg-print3d-purple/10 p-4">
              <img
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                alt="3D принтер в процессе печати"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
