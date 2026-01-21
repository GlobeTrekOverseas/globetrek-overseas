import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Coins,
  Award,
  FileText,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Star,
  DollarSign,
  BookOpen,
  Globe,
} from "lucide-react";

import scholarshipHero from "@/assets/scholarship-hero.jpg";
import serviceScholarship from "@/assets/service-scholarship.jpg";

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Deep understanding of global scholarship programs and requirements",
  },
  {
    icon: FileText,
    title: "Deadline Management",
    description: "Assistance with tracking and meeting all important deadlines",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "Hundreds of successful scholarship applicants every year",
  },
];

const scholarshipTypes = [
  {
    title: "Merit-Based Scholarships",
    description: "Awarded based on academic excellence, leadership, and extracurricular achievements",
    icon: Award,
    examples: ["Academic Excellence Awards", "Dean's Scholarships", "Presidential Scholarships"],
  },
  {
    title: "Need-Based Financial Aid",
    description: "Financial assistance based on demonstrated financial need and family circumstances",
    icon: DollarSign,
    examples: ["Federal Grants", "Institutional Aid", "Emergency Funds"],
  },
  {
    title: "Country-Specific Scholarships",
    description: "Scholarships offered by governments and organizations for specific nationalities",
    icon: Globe,
    examples: ["Fulbright Program", "Chevening Scholarships", "DAAD Scholarships"],
  },
  {
    title: "Field-Specific Awards",
    description: "Scholarships dedicated to specific fields of study or career paths",
    icon: BookOpen,
    examples: ["STEM Scholarships", "Arts & Humanities Grants", "Business School Awards"],
  },
];

const applicationProcess = [
  {
    step: 1,
    title: "Profile Assessment",
    description: "We evaluate your academic background, achievements, and financial situation to identify suitable opportunities.",
  },
  {
    step: 2,
    title: "Scholarship Matching",
    description: "Based on your profile, we match you with the most relevant scholarship programs worldwide.",
  },
  {
    step: 3,
    title: "Document Preparation",
    description: "We help you prepare compelling essays, recommendation letters, and all required documentation.",
  },
  {
    step: 4,
    title: "Application Submission",
    description: "We guide you through the submission process and ensure all deadlines are met.",
  },
  {
    step: 5,
    title: "Interview Preparation",
    description: "For scholarships requiring interviews, we provide mock interview sessions and coaching.",
  },
];

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={scholarshipHero}
            alt="Scholarship Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container-custom relative z-10 pt-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm">
              <Coins size={16} />
              Scholarships & Funding
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              Education for{" "}
              <span className="text-accent italic">Everyone</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              At GlobeTrek Overseas, we believe that education should be accessible to all. 
              We guide students in identifying scholarships and financial aid programs that 
              align with their academic goals and financial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                <Sparkles size={14} />
                Fund Your Dreams
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Make Your Education{" "}
                <span className="text-accent italic">Affordable</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Don't let financial constraints hold you back from achieving your academic dreams. 
                Our expert team helps you discover and secure scholarships, grants, and financial 
                aid opportunities from around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With access to thousands of scholarship programs and a proven track record of 
                successful applications, we ensure that deserving students get the financial 
                support they need to pursue their education abroad.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                  <Star className="text-accent" size={18} />
                  <span className="font-medium text-sm">98% Success Rate</span>
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
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={serviceScholarship}
                  alt="Scholarship Guidance"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center">
                      <Coins className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">Financial Freedom</h4>
                      <p className="text-muted-foreground text-sm">Unlock your potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Scholarship Types Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Award size={14} />
              Scholarship Types
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Types of{" "}
              <span className="text-accent italic">Scholarships</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We help you navigate various scholarship programs tailored to your unique profile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-border/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <type.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {type.description}
                  </p>

                  <div className="space-y-2">
                    {type.examples.map((example) => (
                      <div key={example} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Users size={14} />
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Why{" "}
              <span className="text-accent italic">GlobeTrek?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <reason.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <FileText size={14} />
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Application{" "}
              <span className="text-accent italic">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process helps you maximize your chances of securing scholarships.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

            <div className="space-y-12">
              {applicationProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`bg-white rounded-3xl p-8 shadow-lg border border-border/50 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}>
                      <h3 className="text-xl font-heading font-bold mb-3">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>

                  {/* Step Circle */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary text-white font-heading font-bold text-xl shadow-xl z-10">
                    {process.step}
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
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
            <GraduationCap className="text-accent mx-auto mb-6" size={64} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Scholarship Journey Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Let us help you secure the funding you need to achieve your academic dreams. 
              Contact us to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get In Touch
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

export default ScholarshipsPage;
