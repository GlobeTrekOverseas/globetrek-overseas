import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Plane,
  MapPin,
  Home,
  Wallet,
  Shield,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Luggage,
  Smartphone,
  FileText,
  Globe,
} from "lucide-react";

// Import images
import predepartureHero from "@/assets/predeparture-hero.jpg";
import serviceTravel from "@/assets/service-travel.jpg";

const briefingTopics = [
  {
    icon: Plane,
    title: "Travel Preparation",
    description:
      "Guidance on flight bookings, packing essentials, and customs regulations to ensure a smooth journey.",
  },
  {
    icon: Globe,
    title: "Understanding Your Destination",
    description:
      "Cultural orientation, local weather tips, and basic language skills to help you adapt quickly.",
  },
  {
    icon: Home,
    title: "Accommodation & Transportation",
    description:
      "Finding suitable housing options and navigating local transportation systems efficiently.",
  },
  {
    icon: Wallet,
    title: "Financial Planning",
    description:
      "Banking setup, budgeting strategies, and currency exchange tips for smart money management.",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description:
      "Health insurance guidance, emergency contacts, and personal safety advice for your wellbeing.",
  },
  {
    icon: GraduationCap,
    title: "Academic/Work Readiness",
    description:
      "Familiarization with institution or workplace protocols and essential documentation requirements.",
  },
  {
    icon: Users,
    title: "Networking & Support",
    description:
      "Connecting with alumni groups, local associations, and community resources for ongoing support.",
  },
  {
    icon: Smartphone,
    title: "Communication Setup",
    description:
      "Setting up local SIM cards, communication tools, and staying connected with family back home.",
  },
];

const additionalSupport = [
  "Emergency backup plans for unexpected situations",
  "Advice on setting up communication tools",
  "A final checklist review to ensure everything is in place",
  "Airport pickup and drop coordination",
  "Initial accommodation booking assistance",
  "Local bank account opening guidance",
];

const processSteps = [
  {
    step: "01",
    title: "Pre-Departure Session",
    description:
      "Attend our comprehensive briefing session covering all essential aspects of your journey abroad.",
  },
  {
    step: "02",
    title: "Document Review",
    description:
      "Final review of all your travel documents, visa, and academic paperwork to ensure everything is in order.",
  },
  {
    step: "03",
    title: "Travel Arrangements",
    description:
      "Assistance with flight bookings, travel insurance, and foreign exchange arrangements.",
  },
  {
    step: "04",
    title: "Arrival Support",
    description:
      "Airport pickup coordination, initial accommodation, and settling-in assistance at your destination.",
  },
];

const PreDeparturePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={predepartureHero}
            alt="Students preparing for departure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-sm">
              <Luggage size={16} />
              Pre-Departure & Post-Arrival Support
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Prepare for Your{" "}
              <span className="text-accent italic">Journey Abroad</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              At GlobeTrek Overseas, we believe that preparation is the key to a
              smooth transition into your new life abroad. Our comprehensive support
              ensures you are fully equipped to navigate your journey confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Schedule Your Briefing
                <ArrowRight size={18} />
              </a>
              <a
                href="#briefing"
                className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20 inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Pre-Departure Briefing */}
      <section id="briefing" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                <FileText size={16} />
                About Our Briefing
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                What Is a Pre-Departure Briefing?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A pre-departure briefing is a comprehensive session designed to provide
                students, workers, or travelers with essential information and practical
                tips to prepare for their move to a foreign country.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                It helps you understand what to expect and how to manage various aspects
                of living abroad, ensuring a seamless transition to your new environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-2xl p-6 text-center">
                  <span className="text-4xl font-heading font-bold text-primary">500+</span>
                  <p className="text-sm text-muted-foreground mt-1">Students Briefed</p>
                </div>
                <div className="bg-accent/5 rounded-2xl p-6 text-center">
                  <span className="text-4xl font-heading font-bold text-accent">98%</span>
                  <p className="text-sm text-muted-foreground mt-1">Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
              <img
                src={serviceTravel}
                alt="Pre-departure preparation"
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <CheckCircle2 size={16} />
              What We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Comprehensive Briefing Topics
            </h2>
            <p className="text-lg text-muted-foreground">
              Our pre-departure briefing covers everything you need to know for a
              successful transition abroad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {briefingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <topic.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-border/50">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Additional Support Services
                </h3>
                <div className="space-y-4">
                  {additionalSupport.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                <Shield size={16} />
                Complete Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                We've Got You Covered
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beyond the standard briefing, we provide additional support services
                to ensure nothing is left to chance. From emergency planning to
                communication setup, we handle all the details.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is to make your transition as smooth as possible, so you
                can focus on what matters most – your education and future success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <MapPin size={16} />
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Your Journey With Us
            </h2>
            <p className="text-lg text-muted-foreground">
              A step-by-step approach to ensure you're fully prepared for your adventure abroad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 h-full">
                  <span className="text-5xl font-heading font-bold text-primary/20 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
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
              Start Your Pre-Departure Journey Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Let us help you prepare for a seamless transition to your new life abroad.
              Contact us to schedule your briefing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Schedule Your Briefing
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

export default PreDeparturePage;
