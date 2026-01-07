import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Globe2, Plane, Users } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { Icon: GraduationCap, delay: 0, position: "top-20 left-10" },
    { Icon: Globe2, delay: 0.5, position: "top-32 right-16" },
    { Icon: Plane, delay: 1, position: "bottom-32 left-20" },
    { Icon: Users, delay: 1.5, position: "bottom-20 right-24" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} hidden lg:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay }}
            >
              <Icon size={48} className="text-primary" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
                <Globe2 size={16} />
                Trusted by 10,000+ Students
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Journey to{" "}
              <span className="text-accent">Global Education</span>{" "}
              Starts Here
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Expert guidance for studying abroad. We simplify visa processes, university admissions, and help you achieve your dreams of international education.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="btn-accent inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Countries" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="w-[500px] h-[500px] mx-auto relative">
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Circle with Gradient */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <motion.div
                    className="w-64 h-64 rounded-full bg-gradient-to-br from-accent to-globe-green-light flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Globe2 size={120} className="text-accent-foreground" />
                  </motion.div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute top-10 -left-4 bg-background p-4 rounded-2xl shadow-elegant border border-border"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <GraduationCap size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">University Admits</div>
                      <div className="text-xs text-muted-foreground">500+ This Year</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-16 -right-4 bg-background p-4 rounded-2xl shadow-elegant border border-border"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Plane size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Visa Success</div>
                      <div className="text-xs text-muted-foreground">98% Approval</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
