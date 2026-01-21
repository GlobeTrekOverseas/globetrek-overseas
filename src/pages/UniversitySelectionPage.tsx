import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  Award,
  BookOpen,
  Users,
  MapPin,
  Coins,
  GraduationCap,
  FileText,
  FileCheck,
  Plane,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
} from "lucide-react";

import universityHero from "@/assets/university-hero.jpg";
import serviceUniversity from "@/assets/service-university.jpg";

const selectionCriteria = [
  {
    icon: Award,
    title: "Ranking & Reviews",
    description:
      "Research rankings and reviews of universities, especially in your field of interest. Check international university rankings and student reviews.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: BookOpen,
    title: "Course Offering",
    description:
      "Ensure the university offers the specific course or program you're interested in with comprehensive curriculum and practical exposure.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "Faculty Expertise",
    description:
      "Investigate the faculty's qualifications, research work, and industry connections to ensure quality education.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: MapPin,
    title: "Location & Campus Life",
    description:
      "Consider campus facilities, location (urban or rural), and extracurricular opportunities. International student support services are crucial.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Coins,
    title: "Scholarships & Financial Aid",
    description:
      "Look for universities offering scholarships or financial aid for international students to make education affordable.",
    gradient: "from-primary to-primary/60",
  },
];

const ourServices = [
  {
    icon: Building2,
    title: "University/College Selection",
    description:
      "Assistance in selecting the right university or college based on your preferences, budget, and career goals.",
    features: [
      "Profile-based shortlisting",
      "Ranking analysis",
      "Budget optimization",
      "Career alignment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Course Guidance",
    description:
      "Expert advice on choosing the most suitable courses that align with career ambitions and market trends.",
    features: [
      "Market trend analysis",
      "Career prospects review",
      "Specialization guidance",
      "Curriculum comparison",
    ],
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description:
      "Detailed support with university and college applications, ensuring your documents are up to the mark.",
    features: [
      "SOP crafting",
      "LOR guidance",
      "Portfolio preparation",
      "Application review",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Application Assistance",
    description:
      "Guidance on compiling necessary documents, submitting visa applications, and preparing for interviews.",
    features: [
      "Document checklist",
      "Visa filing support",
      "Mock interviews",
      "Embassy coordination",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    description:
      "Comprehensive orientation sessions to prepare you for life abroad, covering everything from travel to cultural adaptation.",
    features: [
      "Travel planning",
      "Accommodation tips",
      "Cultural orientation",
      "Safety guidelines",
    ],
  },
];

const applicationProcess = [
  {
    step: 1,
    title: "Profile Evaluation",
    description: "We assess your academic background, test scores, and career goals to create a personalized plan.",
  },
  {
    step: 2,
    title: "University Shortlisting",
    description: "Based on your profile, we recommend universities that match your aspirations and budget.",
  },
  {
    step: 3,
    title: "Document Verification & Preparation",
    description: "We help you prepare compelling SOPs, LORs, and ensure all documents meet requirements.",
  },
  {
    step: 4,
    title: "Application Submission",
    description: "We guide you through the application process and track submissions for each university.",
  },
  {
    step: 5,
    title: "Admission & Beyond",
    description: "Once admitted, we assist with visa processing, accommodation, and pre-departure preparation.",
  },
];

const UniversitySelectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={universityHero}
            alt="University Students"
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
              <Building2 size={16} />
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              University Selection{" "}
              <span className="text-accent italic">& Applications</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Your pathway to the perfect university experience. We guide you in selecting 
              the ideal institution and navigating the application process seamlessly.
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
                Find Your Ideal University
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Navigate Your Path to{" "}
                <span className="text-accent italic">Academic Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At GlobeTrek Overseas, we guide you in selecting the perfect university 
                and navigating the application process, ensuring alignment with your 
                academic and career aspirations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our expert counselors work closely with you to understand your goals, 
                assess your profile, and recommend institutions that will help you achieve 
                your dreams. With access to thousands of universities worldwide, we ensure 
                you find the perfect fit.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                  <Star className="text-accent" size={18} />
                  <span className="font-medium text-sm">350+ Partner Universities</span>
                </div>
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
                  src={serviceUniversity}
                  alt="University Selection"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center">
                      <Building2 className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">Expert Guidance</h4>
                      <p className="text-muted-foreground text-sm">Personalized university matching</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selection Criteria Section */}
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
              <Award size={14} />
              Selection Criteria
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              University Selection{" "}
              <span className="text-accent italic">Criteria</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Key factors to consider when choosing your ideal university for a successful academic journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectionCriteria.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-border/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${criteria.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <criteria.icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                    {criteria.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
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
              <Sparkles size={14} />
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our{" "}
              <span className="text-accent italic">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support to guide you through every step of your university application journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-primary/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-border/50 relative overflow-hidden">
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
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
              <FileText size={14} />
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Application{" "}
              <span className="text-accent italic">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to help you secure admission at your dream university.
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
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-border/50 inline-block ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}>
                      <h3 className="text-xl font-heading font-bold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 hidden lg:flex">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-xl">
                      {process.step}
                    </div>
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Ready to Find Your Dream University?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Let our expert counselors help you navigate the university selection process 
              and secure admission at top institutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 inline-flex items-center justify-center backdrop-blur-sm"
              >
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversitySelectionPage;
