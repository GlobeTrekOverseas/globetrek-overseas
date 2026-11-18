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
import ChatbotWidget from "@/components/ChatbotWidget";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const location = useLocation();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Show the consultation popup once per visit, a few seconds after landing,
  // so visitors see the page first. Skip it when they arrived on a section
  // link such as /#contact.
  useEffect(() => {
    if (window.location.hash) return;
    try {
      if (sessionStorage.getItem("consultation_popup_seen")) return;
    } catch {
      /* storage unavailable: still show the popup */
    }
    const timer = setTimeout(() => {
      setIsConsultationOpen(true);
      try {
        sessionStorage.setItem("consultation_popup_seen", "1");
      } catch {
        /* ignore */
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

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
      
      <ChatbotWidget />
    </div>
  );
};

export default Index;
