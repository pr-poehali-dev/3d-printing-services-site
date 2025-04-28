
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MaterialsOverview from "@/components/MaterialsOverview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <MaterialsOverview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
