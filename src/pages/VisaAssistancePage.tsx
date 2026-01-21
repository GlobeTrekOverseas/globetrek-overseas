import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  FileText,
  Send,
  Users,
  Bell,
  Shield,
} from "lucide-react";

import visaHero from "@/assets/visa-hero.jpg";

const visaServices = [
  {
    icon: ClipboardCheck,
    title: "Eligibility Assessment",
    description:
      "Comprehensive evaluation of your eligibility for the visa category (Student Visa, Work Visa). Guidance on meeting the specific requirements of the destination country.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Assistance in gathering and organizing essential documents, including academic credentials, financial proof (bank statements, sponsorship letters), passport and photographs, acceptance letters (for student visas), and work authorization documents (for work visas).",
  },
  {
    icon: Send,
    title: "Application Submission",
    description:
      "Accurate completion of visa application forms and submission through official channels. We ensure every detail is correct to avoid delays or rejections.",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    description:
      "Mock interview sessions to help you confidently face visa officers, along with tips and strategies to answer common questions effectively.",
  },
  {
    icon: Bell,
    title: "Follow-Up & Updates",
    description:
      "Regular updates on your application status and prompt responses to queries or additional document requests from the visa authorities.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free consultation to understand your travel goals and assess visa requirements",
  },
  {
    step: "02",
    title: "Eligibility Check",
    description: "Comprehensive evaluation of your profile against visa category requirements",
  },
  {
    step: "03",
    title: "Document Collection",
    description: "Guidance on gathering all necessary documents with verification support",
  },
  {
    step: "04",
    title: "Application Filing",
    description: "Expert completion and submission of your visa application",
  },
  {
    step: "05",
    title: "Interview Prep",
    description: "Mock interviews and coaching for visa officer interactions",
  },
  {
    step: "06",
    title: "Visa Approval",
    description: "Application tracking and celebration upon successful visa grant",
  },
];

const VisaAssistancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <img
            src={visaHero}
            alt="Visa Assistance Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-primary/10 blur-[60px]" />

        <div className="container-custom relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <FileCheck size={16} />
                Visa Assistance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Simplifying Your{" "}
                <span className="text-accent italic">Visa Journey</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                At GlobeTrek Overseas, we understand that obtaining a visa can be one of the most
                complex and crucial steps in your journey to study, work, or travel abroad. Our
                expert team simplifies this process, ensuring a smooth and stress-free experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#contact"
                  className="btn-accent inline-flex items-center justify-center gap-2 group"
                >
                  Start Your Application
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:+1234567890"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Call Us Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="text-accent" size={20} />
                  <span className="text-sm text-muted-foreground">98% Visa Success Rate</span>
                </div>
                
              </div>
            </motion.div>

            {/* Right side - decorative card */}
            <motion.div
              className="hidden lg:flex justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                      <FileCheck size={32} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">Visa Types We Handle</h3>
                    
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {["Student Visa", "Work Visa"].map((visa, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 size={16} className="text-accent" />
                        {visa}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Visa Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Sparkles size={14} />
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our Visa Processing <span className="text-accent italic">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive visa assistance tailored to your specific needs and destination country
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative bg-card border border-border/50 rounded-3xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Sparkles size={14} />
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Your Visa Application <span className="text-accent italic">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined process designed to maximize your chances of visa approval
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card border border-border/50 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-5xl font-heading font-bold text-accent/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
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
              Start Your Visa Application Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Let us guide you through the visa process with ease and confidence. Contact us to
              begin your journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+1234567890"
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

export default VisaAssistancePage;
