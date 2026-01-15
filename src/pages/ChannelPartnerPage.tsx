import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Handshake,
  Globe,
  TrendingUp,
  Megaphone,
  HeadphonesIcon,
  GraduationCap,
  FileText,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Building2,
} from "lucide-react";

import servicePartner from "@/assets/service-partner.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Access top universities and institutions worldwide with strong admission support.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Earn competitive commissions and enjoy transparent revenue-sharing opportunities.",
  },
  {
    icon: Megaphone,
    title: "Marketing Resources",
    description: "Get brochures, digital content, and co-branding materials to promote effectively.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Work with an account manager for quick responses, training, and operational help.",
  },
];

const supportServices = [
  {
    icon: GraduationCap,
    title: "Training & Updates",
    description: "Stay informed with regular training sessions on admissions, visas, and scholarships.",
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Get step-by-step help in processing student applications and documentation smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Visa & Compliance",
    description: "Expert guidance on visa requirements to increase approval success rates.",
  },
];

const stats = [
  { value: "500+", label: "Partner Agencies" },
  { value: "50+", label: "Countries Covered" },
  { value: "98%", label: "Partner Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const ChannelPartnerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicePartner}
            alt="Channel Partner Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm mb-6 border border-accent/30">
                <Handshake size={16} />
                Channel Partner Program
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Collaborate for{" "}
                <span className="text-accent italic">Success</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                At Globetrek Overseas, our Channel Partner Program is built on trust, 
                transparency, and growth. We support consultants and organizations to 
                deliver the best study abroad services and create long-term success together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#contact"
                  className="btn-accent inline-flex items-center justify-center gap-2 group"
                >
                  Become a Partner
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#benefits"
                  className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20 inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                  Our Partner Network
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                      <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Award size={16} />
              Partner Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Benefits of Partnering{" "}
              <span className="text-accent italic">With Us</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our network and unlock exclusive benefits designed to help you grow your business 
              while providing exceptional services to your students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-3xl p-8 h-full border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                <Users size={16} />
                Partner Support
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                How We Support{" "}
                <span className="text-accent italic">Our Partners</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in empowering our partners with the tools, knowledge, and support 
                they need to succeed. Our comprehensive partner support system ensures you're 
                always equipped to deliver excellence.
              </p>

              <div className="space-y-6">
                {supportServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-background rounded-2xl border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <service.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-3xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-3xl" />
                
                <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-10 text-primary-foreground">
                  <Building2 size={48} className="mb-6 text-accent" />
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Join with Globetrek Overseas
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">
                    Join hands with us to expand your services, build trust, and create 
                    life-changing opportunities for students across the globe.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Exclusive partnership benefits",
                      "Dedicated account management",
                      "Regular training sessions",
                      "Priority application processing",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 leading-relaxed">
              Take the first step towards a rewarding partnership. Join our network of 
              successful education consultants and agencies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Become a Partner
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 bg-accent-foreground/10 text-accent-foreground rounded-full font-semibold hover:bg-accent-foreground/20 transition-all duration-300 border border-accent-foreground/20 inline-flex items-center justify-center"
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

export default ChannelPartnerPage;
