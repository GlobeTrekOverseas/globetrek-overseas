import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  Building2,
  FileCheck,
  Coins,
  Plane,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Import images
import serviceCounseling from "@/assets/service-counseling.jpg";
import serviceUniversity from "@/assets/service-university.jpg";
import serviceVisa from "@/assets/service-visa.jpg";
import serviceScholarship from "@/assets/service-scholarship.jpg";
import serviceTravel from "@/assets/service-travel.jpg";
import servicePartner from "@/assets/service-partner.jpg";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Preparation",
    description:
      "Our expert counselors help you identify the right academic path based on your interests, skills, and career aspirations. We provide personalized guidance to ensure you choose courses that align with your goals.",
    features: [
      "One-on-one counseling sessions",
      "Course comparison analysis",
      "Industry trend insights",
      "Long-term career planning",
    ],
    gradient: "from-accent to-accent/60",
    image: serviceCounseling,
    link: "/career-counseling", //wrong route path ;#fixed >>
  },
  {
    icon: Building2,
    title: "University Selection & Application",
    description:
      "Navigate the complex world of international universities with our comprehensive selection and application support. We help you find the perfect institution that matches your academic profile and aspirations.",
    features: [
      "University shortlisting based on profile",
      "Application document preparation",
      "Letter of Recommendation support",
      "Application tracking & follow-up",
    ],
    gradient: "from-primary to-primary/60",
    image: serviceUniversity,
    link: "/university-selection",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Our visa experts guide you through every step of the visa application process, ensuring you have the best chance of approval. We prepare you for interviews and handle all documentation meticulously.",
    features: [
      "Document checklist & verification",
      "Visa application filing",
      "Embassy appointment scheduling",
      "Post-visa guidance",
    ],
    gradient: "from-accent to-accent/60",
    image: serviceVisa,
    link: "/visa-assistance",
  },
  {
    icon: Coins,
    title: "Scholarships & Funding Guidance",
    description:
      "Education abroad doesn't have to break the bank. We help you discover and apply for scholarships, grants, and financial aid opportunities to make your dream education affordable.",
    features: [
      "Scholarship opportunity research",
      "Application essay support",
      "Financial planning consultation",
      "Education loan guidance",
    ],
    gradient: "from-primary to-primary/60",
    image: serviceScholarship,
    link: "/scholarships",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Post-Arrival Support",
    description:
      "Your journey doesn't end with admission. We ensure you're fully prepared for life abroad with comprehensive pre-departure briefings and continued support after you arrive at your destination.",
    features: [
      "Pre-departure orientation",
      "Travel & accommodation booking",
      "Airport pickup arrangements",
      "Cultural integration support",
    ],
    gradient: "from-accent to-accent/60",
    image: serviceTravel,
    link: "/pre-departure",
  },
  {
    icon: Handshake,
    title: "Channel Partner Support",
    description:
      "We work closely with educational institutions, agencies, and partners worldwide to provide seamless services. Our partner network ensures you get the best opportunities and support globally.",
    features: [
      "Partner institution network",
      "Agent training & certification",
      "Collaborative marketing support",
      "Dedicated partner portal",
      "Priority processing benefits",
    ],
    gradient: "from-primary to-primary/60",
    image: servicePartner,
    link: "/channel-partner",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <Sparkles size={16} />
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Comprehensive Support for Your{" "}
              <span className="text-accent italic">Global Education</span>{" "}
              Journey
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From choosing the right course to settling in your dream country,
              we provide end-to-end assistance at every step of your
              international education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative group">
                      {/* Decorative Elements */}
                      <div
                        className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div
                        className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Main Image */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}
                        />

                        {/* Icon Badge */}
                        <div
                          className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}
                        >
                          <service.icon
                            size={32}
                            className="text-primary-foreground"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-accent flex-shrink-0"
                            />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      {/*href reloads the page. Link changes the URL without reloading. */}
                      <Link
                        to={service.link}
                        className="btn-accent inline-flex items-center gap-2 group"
                      >
                        Get Started
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-24 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-border to-transparent rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Get in touch with our expert counselors today and take the first
              step towards your international education dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+91 93113 31899"
                className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20 inline-flex items-center justify-center"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
