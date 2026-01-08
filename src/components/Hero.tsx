import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, CheckCircle } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Gradient Orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Decorative Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-full" />
        <div className="absolute top-32 left-20 w-16 h-16 border border-primary/10 rounded-full" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent/10 rounded-full" />
        
        {/* Floating Stars */}
        <motion.div
          className="absolute top-40 right-[20%] hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-accent/40" />
        </motion.div>
        <motion.div
          className="absolute bottom-60 left-[15%] hidden lg:block"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Star className="w-5 h-5 text-primary/30 fill-primary/30" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-8 border border-accent/20">
                <Sparkles size={16} />
                Trusted by 10,000+ Students Worldwide
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Journey to{" "}
              <span className="text-accent italic">Global Education</span>{" "}
              <br className="hidden sm:block" />
              Starts Here
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Expert guidance for studying abroad. We simplify visa processes, university admissions, and help you achieve your dreams of international education.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {["15+ Years Experience", "98% Visa Success", "50+ Countries"].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-accent" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="btn-accent inline-flex items-center justify-center gap-2 group text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent z-10"
                />
                <img 
                  src={heroStudents} 
                  alt="International students walking on university campus"
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                />
              </div>
              
              {/* Floating Card - Top Left */}
              <motion.div
                className="absolute -top-4 -left-4 lg:-left-8 bg-background p-4 rounded-2xl shadow-elegant border border-border z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                    <Star size={24} className="text-accent-foreground fill-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">500+</div>
                    <div className="text-sm text-muted-foreground">University Admits</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Bottom Right */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-background p-4 rounded-2xl shadow-elegant border border-border z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <CheckCircle size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg">98%</div>
                    <div className="text-sm text-muted-foreground">Visa Success Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-3xl bg-accent/10" />
              <div className="absolute -z-20 -bottom-16 -right-16 w-full h-full rounded-3xl border-2 border-dashed border-primary/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;