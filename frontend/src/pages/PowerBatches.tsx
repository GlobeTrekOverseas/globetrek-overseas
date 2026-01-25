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

// Import batch images
import batchIelts from "@/assets/batch-ielts.jpg";
import batchPte from "@/assets/batch-pte.jpg";
import batchGmat from "@/assets/batch-gmat.jpg";
import batchGre from "@/assets/batch-gre.jpg";
import powerBatchesHero from "@/assets/power-batches-hero.jpg";

const batches = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "Master the world's most popular English proficiency test with our comprehensive training program designed for academic and general training modules.",
    icon: Globe,
    color: "from-primary to-globe-blue-light",
    bgGradient: "from-primary/5 to-primary/10",
    duration: "4Weeks-1year",
    batchSize: "15 Students",
    rating: "4.9",
    studentsPlaced: "500+",
    image: batchIelts,
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
    fee: "₹10,000"
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
    batchSize: "15 Students",
    rating: "4.8",
    image: batchPte,
    features: [
      "AI-powered scoring pattern understanding",
      "Computer-based practice labs",
      "Speaking & writing integration techniques",
      "Weekly progress tracking"
    ],
    modules: [
      { name: "Speaking & Writing", icon: PenTool, duration: "77-93 min" },
      { name: "Reading", icon: BookOpen, duration: "32-41 min" },
      { name: "Listening", icon: Headphones, duration: "45-57 min" }
    ],
    targetScore: "79+ Score",
    fee: "₹8,000"
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
    batchSize: "15 Students",
    rating: "4.9",
    image: batchGmat,
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
    fee: "₹30,000"
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
    batchSize: "15 Students",
    rating: "4.8",
    image: batchGre,
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
    fee: "₹25,000"
  }
];

const PowerBatches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={powerBatchesHero} 
            alt="Power Batches" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
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
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Students Guided</p>
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
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Student Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {batches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-5 gap-8 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  {/* Image Section - 2 columns */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative group sticky top-32">
                      {/* Decorative frame */}
                      <div className={`absolute -inset-3 bg-gradient-to-br ${batch.color} rounded-[2rem] opacity-20 group-hover:opacity-30 blur-sm transition-all duration-500`} />
                      
                      {/* Main image container */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img 
                          src={batch.image} 
                          alt={batch.name}
                          className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent`} />
                        
                        {/* Floating badge */}
                        <div className="absolute top-6 left-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${batch.color} flex items-center justify-center shadow-xl`}>
                            <batch.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                        
                        {/* Bottom info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-heading font-bold text-foreground">{batch.name}</h3>
                            <span className="flex items-center gap-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                              <Star className="w-3 h-3 fill-current" />
                              {batch.rating}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{batch.fullName}</p>
                        </div>
                      </div>
                      
                      {/* Stats row below image */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className={`bg-gradient-to-br ${batch.bgGradient} rounded-2xl p-4 text-center border border-border/30`}>
                          <Target className="w-6 h-6 text-accent mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Target Score</p>
                          <p className="text-lg font-bold text-foreground">{batch.targetScore}</p>
                        </div>
                        <div className={`bg-gradient-to-br ${batch.bgGradient} rounded-2xl p-4 text-center border border-border/30`}>
                          <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Course Fee</p>
                          <p className="text-lg font-bold text-foreground">{batch.fee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section - 3 columns */}
                  <div className={`lg:col-span-3 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {batch.description}
                      </p>
                      
                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 border border-border/50">
                          <Clock className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">{batch.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 border border-border/50">
                          <Users className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">{batch.batchSize}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 border border-border/50">
                          <Trophy className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">{batch.studentsPlaced} Placed</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Features */}
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/30">
                      <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        What You'll Get
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {batch.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Exam Modules */}
                    <div className="bg-card rounded-2xl p-6 border border-border/30">
                      <h4 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Exam Modules
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {batch.modules.map((module, i) => (
                          <div 
                            key={i}
                            className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <module.icon className="w-5 h-5 text-primary" />
                              </div>
                              <span className="font-medium text-foreground text-sm">{module.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-full">
                              {module.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      {batch.id === "ielts" ? (
                        <>
                          <Link 
                            to="/#contact"
                            className="flex-1 btn-accent text-center flex items-center justify-center gap-2 group"
                          >
                           Book Free Demo Session
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <Link 
                            to="/ielts"
                            className="flex-1 bg-primary/10 border border-primary/30 rounded-xl px-6 py-4 font-semibold text-primary hover:bg-primary/20 transition-colors text-center flex items-center justify-center gap-2 group"
                          >
                            Explore More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </>
                      ) : (
                        <button 
                          className="flex-1 bg-muted border border-border rounded-xl px-6 py-4 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          <Clock className="w-4 h-4 group-hover:animate-pulse" />
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                {index < batches.length - 1 && (
                  <div className="mt-24 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-border to-transparent rounded-full" />
                  </div>
                )}
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
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Book a free counseling session with our experts and get personalized guidance 
              on choosing the right exam and preparation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book Free Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+91 93113 31899"
                className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20 inline-flex items-center justify-center"
              >
                Call:+91 93113 31899
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