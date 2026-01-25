import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Headphones, 
  BookOpen, 
  PenTool, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  Target, 
  Globe, 
  GraduationCap,
  Briefcase,
  Home,
  Star,
  Calendar,
  FileText,
  Video,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import ieltsHero from "@/assets/ielts-hero.jpg";
import ieltsListening from "@/assets/ielts-listening.jpg";
import ieltsReading from "@/assets/ielts-reading.jpg";
import ieltsWriting from "@/assets/ielts-writing.jpg";
import ieltsSpeaking from "@/assets/ielts-speaking.jpg";

const modules = [
  {
    title: "Listening",
    description: "Understanding conversations, monologues, and lectures in various accents. Practice with different question types and improve your ability to follow spoken English.",
    icon: Headphones,
    image: ieltsListening,
    skills: ["Form/Note Completion", "Map Labeling", "Multiple Choice", "British/Australian/American Accents"]
  },
  {
    title: "Reading",
    description: "Mastering skimming, scanning, and comprehension of various text types. Learn strategies for different question formats and improve reading speed and accuracy.",
    icon: BookOpen,
    image: ieltsReading,
    skills: ["Skimming & Scanning", "True/False/Not Given", "Matching Headings", "Main Idea Identification"]
  },
  {
    title: "Writing",
    description: "Developing structured essays, reports, and letters with appropriate vocabulary. Learn task response strategies, coherence, and academic writing conventions.",
    icon: PenTool,
    image: ieltsWriting,
    skills: ["Task 1 Academic/General", "Essay Structure", "Cohesive Devices", "Band-based Corrections"]
  },
  {
    title: "Speaking",
    description: "Building fluency, pronunciation, and confidence in face-to-face communication. Practice all three parts of the speaking test with personalized feedback.",
    icon: MessageSquare,
    image: ieltsSpeaking,
    skills: ["Part 1 Introduction", "Part 2 Cue Card", "Part 3 Discussion", "Pronunciation Drills"]
  }
];

const whyIelts = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Required by universities in UK, Canada, Australia, New Zealand, and USA for admission."
  },
  {
    icon: Briefcase,
    title: "Work Abroad",
    description: "Employers in English-speaking countries often demand proof of language proficiency."
  },
  {
    icon: Home,
    title: "Migrate & Settle",
    description: "The only English test accepted by all major immigration authorities worldwide."
  },
  {
    icon: Award,
    title: "Professional Recognition",
    description: "Accepted by global institutions for professional registration in healthcare, engineering, and more."
  }
];

const curriculum = [
  {
    week: "Week 1",
    focus: "Orientation + Grammar & Vocabulary Foundation",
    goals: "Understand IELTS structure, scoring, common mistakes, and build essential grammar base."
  },
  {
    week: "Week 2",
    focus: "Listening + Reading Skills",
    goals: "Master question types, scanning/skimming, note completion, and inference."
  },
  {
    week: "Week 3",
    focus: "Writing Task 1 & 2 (Academic/General)",
    goals: "Learn essay and letter/report formats, coherence, vocabulary, and time management."
  },
  {
    week: "Week 4",
    focus: "Speaking Skills + Full Mock Practice",
    goals: "Learn pronunciation, fluency, coherence, and confidence in Part 1–3."
  },
  {
    week: "Week 5-8",
    focus: "Advanced Strategy & Practice",
    goals: "Feedback-driven improvement through section-wise mocks for achieving Band 7+."
  }
];

const whyGlobetrek = [
  {
    icon: Award,
    title: "Certified Trainers",
    description: "With Proven Track Record"
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Band Improvement Strategies"
  },
  {
    icon: FileText,
    title: "Mock Tests & Materials",
    description: "Feedback Sessions & Study Resources"
  },
  {
    icon: Globe,
    title: "Complete Assistance",
    description: "Exam Booking, Visa & Admission Process"
  }
];

const registrationSteps = [
  {
    step: 1,
    title: "Choose Test Type",
    description: "Select Academic or General Training based on your purpose."
  },
  {
    step: 2,
    title: "Select Date & City",
    description: "Choose your preferred test date and location."
  },
  {
    step: 3,
    title: "Register",
    description: "Register through the official IELTS website or visit Globetrek Overseas."
  },
  {
    step: 4,
    title: "Upload & Pay",
    description: "Upload your passport and pay the test fee (approx. ₹17,000 – ₹18,000)."
  },
  {
    step: 5,
    title: "Confirmation",
    description: "Receive confirmation email and start preparation with our personalized coaching plans."
  }
];

const additionalInclusions = [
  { title: "Weekly Mock Tests", description: "1 complete test every week with scores and trainer feedback." },
  { title: "Vocabulary Builder Kit", description: "25 topic-wise word lists with examples & collocations." },
  { title: "Writing & Speaking Tracker", description: "Individual progress reports after each mock." },
  { title: "Grammar Refresher", description: "Short video or worksheet series on common grammar issues." },
  { title: "Feedback Sessions", description: "One-on-one review every 2 weeks." },
  { title: "Final Band Prediction", description: "Assessment test to predict your actual exam band score." }
];

const IELTSPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ieltsHero} 
            alt="IELTS Preparation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Globally Recognized English Proficiency Test</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              IELTS Exam Preparation
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Recognised and trusted across the world, IELTS stands as the only English proficiency test 
              approved by all international immigration bodies for language assessment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book a Test
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FileText, title: "IELTS Exam Structure", subtitle: "Read Our Latest Structure" },
              { icon: Calendar, title: "Online Batches", subtitle: "Access Our Latest Batches" },
              { icon: Target, title: "Practice/Mock Tests", subtitle: "Practice with Our Mock Test" },
              { icon: Video, title: "Strategy Videos", subtitle: "Find IELTS Strategy Videos" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is IELTS */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is IELTS Exam?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The <strong>IELTS (International English Language Testing System)</strong> is a globally recognized 
              English proficiency test designed to assess your ability to communicate in English across four key 
              skills — <strong>Listening, Reading, Writing, and Speaking</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It is jointly managed by <strong>IDP: IELTS Australia</strong>, the <strong>British Council</strong>, 
              and <strong>Cambridge Assessment English</strong>, and is accepted by more than <strong>11,000 
              organisations worldwide</strong>, including universities, employers, immigration authorities, and 
              professional bodies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                <h3 className="font-serif font-bold text-foreground mb-2">IELTS Academic</h3>
                <p className="text-muted-foreground">For students who wish to study abroad.</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
                <h3 className="font-serif font-bold text-foreground mb-2">IELTS General Training</h3>
                <p className="text-muted-foreground">For professionals or migrants moving to English-speaking countries.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why IELTS */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Take the IELTS Exam?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your gateway to global education, career, and migration opportunities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyIelts.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Modules */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              4 Core Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive curriculum focuses on developing all four core language skills
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">{module.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{module.description}</p>
                  <div className="space-y-2">
                    {module.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Course Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A detailed week-by-week breakdown of our comprehensive IELTS preparation curriculum
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {curriculum.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full" />
                {index !== curriculum.length - 1 && (
                  <div className="absolute left-[7px] top-4 w-0.5 h-full bg-primary/20" />
                )}
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/50 ml-4">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      {item.week}
                    </span>
                    <h3 className="font-serif font-bold text-foreground">{item.focus}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.goals}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              IELTS Registration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Registering for IELTS is simple — and our experts make it even easier!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {registrationSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/50 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                
                {index !== registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/30 text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Globetrek */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Globetrek Overseas for IELTS?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyGlobetrek.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Inclusions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Inclusions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra resources and support included with all batch durations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalInclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-border/50 flex items-start gap-4"
              >
                <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Achieve Your Target Band Score?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of successful students who have achieved their dream scores with Globetrek Overseas. 
              Start your IELTS journey today!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Us: +91 92113 13899
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <Link to="/power-batches">
                <Button variant="link" className="gap-2 text-primary">
                  ← Back to Power Batches
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IELTSPage;
