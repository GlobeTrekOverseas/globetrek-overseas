import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  Trophy, 
  Target, 
  Sparkles,
  GraduationCap,
  Award,
  TrendingUp,
  Calendar,
  ArrowRight,
  Globe,
  Headphones,
  FileText,
  PenTool
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const batches = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "Master the world's most popular English proficiency test with our comprehensive training program designed for academic and general training modules.",
    icon: Globe,
    color: "from-primary to-globe-blue-light",
    bgGradient: "from-primary/5 to-primary/10",
    duration: "8 Weeks",
    batchSize: "15 Students",
    rating: "4.9",
    studentsPlaced: "5000+",
    features: [
      "Listening, Reading, Writing & Speaking modules",
      "Mock tests with real exam conditions",
      "Personalized feedback on each section",
      "British Council certified trainers",
      "Flexible morning & evening batches"
    ],
    modules: [
      { name: "Listening", icon: Headphones, duration: "40 min" },
      { name: "Reading", icon: BookOpen, duration: "60 min" },
      { name: "Writing", icon: PenTool, duration: "60 min" },
      { name: "Speaking", icon: Users, duration: "15 min" }
    ],
    targetScore: "7.0+ Band",
    fee: "₹25,000"
  },
  {
    id: "pte",
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    description: "Fast-track your English proficiency with computer-based testing. Get results in just 48 hours and unlock unlimited score reports.",
    icon: Target,
    color: "from-accent to-globe-green-light",
    bgGradient: "from-accent/5 to-accent/10",
    duration: "6 Weeks",
    batchSize: "12 Students",
    rating: "4.8",
    studentsPlaced: "3500+",
    features: [
      "AI-powered scoring pattern understanding",
      "Computer-based practice labs",
      "Speaking & writing integration techniques",
      "Pearson certified preparation material",
      "Weekly progress tracking"
    ],
    modules: [
      { name: "Speaking & Writing", icon: PenTool, duration: "77-93 min" },
      { name: "Reading", icon: BookOpen, duration: "32-41 min" },
      { name: "Listening", icon: Headphones, duration: "45-57 min" }
    ],
    targetScore: "79+ Score",
    fee: "₹22,000"
  },
  {
    id: "gmat",
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description: "Unlock doors to top MBA programs worldwide with our intensive GMAT preparation focused on analytical, quantitative, and verbal reasoning.",
    icon: TrendingUp,
    color: "from-primary to-accent",
    bgGradient: "from-primary/5 to-accent/10",
    duration: "12 Weeks",
    batchSize: "10 Students",
    rating: "4.9",
    studentsPlaced: "1500+",
    features: [
      "Integrated Reasoning mastery",
      "Quantitative & Verbal reasoning techniques",
      "Analytical Writing Assessment prep",
      "700+ score strategies",
      "Top B-school admission guidance"
    ],
    modules: [
      { name: "Analytical Writing", icon: FileText, duration: "30 min" },
      { name: "Integrated Reasoning", icon: Target, duration: "30 min" },
      { name: "Quantitative", icon: TrendingUp, duration: "62 min" },
      { name: "Verbal", icon: BookOpen, duration: "65 min" }
    ],
    targetScore: "700+ Score",
    fee: "₹45,000"
  },
  {
    id: "gre",
    name: "GRE",
    fullName: "Graduate Record Examinations",
    description: "Excel in the most widely accepted graduate admissions test with our structured approach to verbal, quantitative, and analytical writing.",
    icon: GraduationCap,
    color: "from-globe-blue-light to-primary",
    bgGradient: "from-globe-blue-light/5 to-primary/10",
    duration: "10 Weeks",
    batchSize: "12 Students",
    rating: "4.8",
    studentsPlaced: "2000+",
    features: [
      "Vocabulary building with 3500+ words",
      "Quantitative reasoning shortcuts",
      "Issue & Argument essay techniques",
      "Adaptive testing strategies",
      "University shortlisting support"
    ],
    modules: [
      { name: "Analytical Writing", icon: FileText, duration: "60 min" },
      { name: "Verbal Reasoning", icon: BookOpen, duration: "60 min" },
      { name: "Quantitative Reasoning", icon: TrendingUp, duration: "70 min" }
    ],
    targetScore: "320+ Score",
    fee: "₹35,000"
  }
];

const PowerBatches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl floating-element" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating-element-delayed" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Expert-Led Training Programs
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Power Batches for
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Global Success
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Master internationally recognized exams with our intensive coaching programs. 
              Join thousands of successful students who achieved their dream scores.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-elegant"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">12,000+</p>
                  <p className="text-sm text-muted-foreground">Students Trained</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-elegant"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-elegant"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {batches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${batch.bgGradient} border border-border/50`}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${batch.color} flex items-center justify-center shadow-lg`}>
                        <batch.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                          {batch.name}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {batch.fullName}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {batch.description}
                    </p>
                    
                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-card/80 rounded-xl px-4 py-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{batch.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-card/80 rounded-xl px-4 py-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{batch.batchSize}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-card/80 rounded-xl px-4 py-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{batch.rating} Rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-card/80 rounded-xl px-4 py-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{batch.studentsPlaced} Placed</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        What You'll Get
                      </h4>
                      <ul className="grid gap-2">
                        {batch.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Content - Modules & CTA */}
                  <div className="space-y-6">
                    {/* Exam Modules */}
                    <div className="bg-card/80 rounded-2xl p-6 space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Exam Modules
                      </h4>
                      <div className="grid gap-3">
                        {batch.modules.map((module, i) => (
                          <div 
                            key={i}
                            className="flex items-center justify-between bg-background/50 rounded-xl px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <module.icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-medium text-foreground">{module.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                              {module.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Target Score & Fee */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl p-6 text-center">
                        <Target className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Target Score</p>
                        <p className="text-2xl font-bold text-foreground">{batch.targetScore}</p>
                      </div>
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-6 text-center">
                        <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Course Fee</p>
                        <p className="text-2xl font-bold text-foreground">{batch.fee}</p>
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/#contact"
                        className="flex-1 btn-accent text-center flex items-center justify-center gap-2"
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="flex-1 bg-card border border-border rounded-xl px-6 py-4 font-semibold text-foreground hover:bg-secondary transition-colors">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Batches */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The GlobeTrek Advantage
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the difference with our proven methodology and expert guidance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Expert Trainers",
                description: "Certified instructors with 10+ years of experience"
              },
              {
                icon: Target,
                title: "Proven Methods",
                description: "Structured curriculum with high success rates"
              },
              {
                icon: Clock,
                title: "Flexible Timings",
                description: "Morning, evening & weekend batches available"
              },
              {
                icon: Trophy,
                title: "Score Guarantee",
                description: "Re-training available if target not achieved"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 text-center card-elevated"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-globe-blue-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Achieve Your Dream Score?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join our next batch and take the first step towards your global education journey.
              Book a free counseling session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                Book Free Counseling
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+919876543210"
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground rounded-xl px-8 py-4 font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerBatches;
