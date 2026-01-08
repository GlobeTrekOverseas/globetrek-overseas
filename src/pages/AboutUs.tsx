import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Globe, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Students Placed" },
  { value: "50+", label: "Countries" },
  { value: "98%", label: "Visa Success" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make global education simple, accessible, and transparent for every student, empowering them to achieve their dreams of studying abroad.",
    color: "from-primary to-globe-blue-light",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted and innovative overseas education consultancy, creating pathways for millions of students to access world-class education.",
    color: "from-accent to-globe-green-light",
  },
  {
    icon: Heart,
    title: "Core Values",
    description: "Integrity, transparency, student-first approach, and excellence in service. We believe in building lasting relationships based on trust.",
    color: "from-globe-blue-light to-primary",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Academic & Course Counseling",
    description: "Expert guidance to choose the right course and university based on your profile and career goals.",
  },
  {
    icon: Globe,
    title: "University Selection",
    description: "Access to 500+ partner universities across 50+ countries with personalized recommendations.",
  },
  {
    icon: Award,
    title: "Visa Assistance",
    description: "Comprehensive visa support with 98% success rate and interview preparation.",
  },
  {
    icon: Users,
    title: "Pre-Departure Support",
    description: "Complete guidance on accommodation, travel, banking, and settling abroad.",
  },
];

const whyChooseUs = [
  "Expert counselors with international education experience",
  "Partnerships with 500+ universities worldwide",
  "98% visa success rate across all countries",
  "Comprehensive pre-departure and post-arrival support",
  "Scholarship guidance saving millions for students",
  "Dedicated support until you settle abroad",
  "Transparent processes with no hidden fees",
  "Personalized attention to every student",
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="Students celebrating graduation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="w-4 h-4" />
              About GlobeTrek Overseas
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Turning Dreams into{" "}
              <span className="text-accent">Global Reality</span>
            </h1>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              For over 15 years, we've been the trusted partner for thousands of students 
              embarking on their international education journey. Your success is our story.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                A Journey of{" "}
                <span className="text-accent">Transforming Lives</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">GlobeTrek Overseas was born out of a shared dream</strong> — to make global education simple, accessible, and transparent for every student.
                </p>
                <p>
                  Over the years, we have guided aspiring learners to universities across continents, helping them shape their careers and futures with confidence.
                </p>
                <p>
                  What sets us apart is not just our network of global universities, but the <strong className="text-foreground">personal touch</strong> we bring to each student's journey.
                </p>
                <p>
                  For us, every success story is personal — because when a student achieves their dream, it becomes our achievement too.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={aboutTeam} 
                  alt="GlobeTrek Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Decorative badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              Mission, Vision & <span className="text-accent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative bg-background rounded-2xl p-8 shadow-elegant border border-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our Education <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive suite of services designed to provide students with a stress-free overseas education journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-6 bg-secondary/50 rounded-2xl border border-border hover:bg-background hover:shadow-elegant transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
                Why GlobeTrek
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Why Students <span className="text-accent">Choose Us</span>
              </h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                With over 15 years of experience and a proven track record, we've helped 
                thousands of students achieve their dreams of studying abroad. Here's what 
                makes us different.
              </p>
              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Ready to Start Your <span className="text-accent">Journey?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Book a free consultation with our expert counselors and take the first step 
                towards your dream of studying abroad.
              </p>
              <motion.a
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
