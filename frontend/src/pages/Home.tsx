import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Countries from "@/components/Countries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConsultationPopup from "@/components/ConsultationPopup";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const location = useLocation();
  const [isConsultationOpen, setIsConsultationOpen] = useState(true);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Countries />
      <Testimonials />
      <Contact />
      <Footer />
      
      <ConsultationPopup 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </div>
  );
};

export default Index;
