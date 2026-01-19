import { motion } from "framer-motion";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Home,
  BookOpen,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Selection & Application",
    href: "/university-selection",
    description:
      "Expert guidance for admission to top universities worldwide. We handle applications, documentation, and follow-ups.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    href: "/visa-assistance",
    description:
      "Complete visa processing support with document preparation, interview coaching, and embassy coordination.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: BookOpen,
    title: "Study Abroad Preparation",
    href: "/career-counseling",
    description:
      "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Post-Arrival Support",
    href: "/pre-departure",
    description:
      "Flight bookings, travel insurance, forex services, and pre-departure orientation for smooth journeys.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Home,
    title: "Scholarships & Funding Guidance",
    href: "/scholarships",
    description:
      "Safe and affordable housing options near your university. We help find the perfect place to stay.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "Channel Partner Support",
    href: "/channel-partner",
    description:
      "Personalized career guidance to choose the right course and country aligned with your goals.",
    gradient: "from-primary to-primary/60",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            <Sparkles size={16} />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Comprehensive Support for Your{" "}
            <span className="text-accent italic">Study Abroad</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From choosing the right university to settling in your new country,
            we provide end-to-end assistance at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.a
              href={service.href}
              key={service.title}
              className="group relative bg-background rounded-3xl p-8 cursor-pointer border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-elegant transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-[100px] rounded-tr-3xl" />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon size={28} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold mb-3 flex items-center gap-2 group-hover:text-accent transition-colors">
                {service.title}
                <ArrowUpRight
                  size={18}
                  className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/#contact"
            className="btn-accent inline-flex items-center gap-2 text-lg"
          >
            Get Free Consultation
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
