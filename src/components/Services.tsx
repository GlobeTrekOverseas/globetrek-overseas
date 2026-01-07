import { motion } from "framer-motion";
import { 
  GraduationCap, 
  FileCheck, 
  Plane, 
  Home, 
  BookOpen, 
  Users,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    description: "Expert guidance for admission to top universities worldwide. We handle applications, documentation, and follow-ups.",
    color: "accent",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "Complete visa processing support with document preparation, interview coaching, and embassy coordination.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests.",
    color: "accent",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    description: "Flight bookings, travel insurance, forex services, and pre-departure orientation for smooth journeys.",
    color: "primary",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Safe and affordable housing options near your university. We help find the perfect place to stay.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Personalized career guidance to choose the right course and country aligned with your goals.",
    color: "primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Comprehensive Support for Your{" "}
            <span className="text-accent">Study Abroad</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From choosing the right university to settling in your new country, 
            we provide end-to-end assistance at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group card-elevated p-8 cursor-pointer border border-transparent hover:border-accent/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${
                service.color === "accent" 
                  ? "bg-accent/10 text-accent" 
                  : "bg-primary/10 text-primary"
              } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold mb-3 flex items-center gap-2 group-hover:text-accent transition-colors">
                {service.title}
                <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contact" className="btn-accent inline-flex items-center gap-2">
            Get Free Consultation
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
