import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GraduationCap,
  BookOpen,
  Target,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";

// Import images
import academicHero from "@/assets/academic-hero.jpg";
import batchIelts from "@/assets/batch-ielts.jpg";
import batchPte from "@/assets/batch-pte.jpg";
import batchGmat from "@/assets/batch-gmat.jpg";
import batchGre from "@/assets/batch-gre.jpg";

const courses = [
  {
    title: "IELTS Program",
    description:
      "Comprehensive preparation for all IELTS modules with expert instructors and personalized feedback.",
    image: batchIelts,
    features: [
      "All 4 modules covered",
      "Practice tests",
      "Speaking sessions",
      "Writing feedback",
    ],
    link: "/power-batches",
    gradient: "from-accent to-accent/60",
  },
  {
    title: "PTE Academic Success",
    description:
      "Master the computer-based PTE exam with our AI-powered practice tests and detailed analytics.",
    image: batchPte,
    features: [
      "Computer-based practice",
      "AI scoring analysis",
      "Speed techniques",
      "Mock tests",
    ],
    link: "/power-batches",
    gradient: "from-primary to-primary/60",
  },
  {
    title: "GMAT Quantitative Focus",
    description:
      "Boost your quantitative reasoning skills with targeted practice and strategic problem-solving techniques.",
    image: batchGmat,
    features: [
      "Quant strategies",
      "Verbal reasoning",
      "Data insights",
      "AWA preparation",
    ],
    link: "/power-batches",
    gradient: "from-accent to-accent/60",
  },
  {
    title: "GRE Comprehensive Prep",
    description:
      "Complete preparation for all GRE sections with extensive practice materials and vocabulary building.",
    image: batchGre,
    features: [
      "Vocabulary builder",
      "Math review",
      "AWA essays",
      "Full-length tests",
    ],
    link: "/power-batches",
    gradient: "from-primary to-primary/60",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from certified trainers with years of experience and proven track records.",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description:
      "Customized study plans tailored to your strengths, weaknesses, and target scores.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose from multiple batch timings to fit your schedule - weekdays or weekends.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Thousands of students have achieved their dream scores with our guidance.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Materials",
    description:
      "Access to updated study materials, practice tests, and online resources.",
  },
  {
    icon: Award,
    title: "Score Guarantee",
    description:
      "Dedicated support until you achieve your desired band score.",
  },
];

const counselingServices = [
  {
    title: "Career Aptitude Assessment",
    description: "Discover your strengths and ideal career paths through comprehensive assessments.",
  },
  {
    title: "Course Comparison Analysis",
    description: "Compare programs across universities to find the best fit for your goals.",
  },
  {
    title: "Industry Trend Insights",
    description: "Stay informed about job market trends and emerging career opportunities.",
  },
  {
    title: "Long-term Career Planning",
    description: "Develop a strategic roadmap for your academic and professional journey.",
  },
];

const AcademicCounselingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={academicHero}
            alt="Academic Counseling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-sm">
              <Sparkles size={16} />
              Academic Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Master English & Aptitude Exams with{" "}
              <span className="text-accent italic">Confidence!</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              Join thousands of successful students who have achieved their dream scores
              with our expert-led courses and personalized learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/power-batches"
                className="btn-accent inline-flex items-center gap-2 group"
              >
                Start Learning Today
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="/#contact"
                className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20 inline-flex items-center justify-center backdrop-blur-sm"
              >
                Free Counseling
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Counseling Services Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
              <GraduationCap size={16} />
              Expert Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Personalized Academic <span className="text-accent italic">Counseling</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert counselors help you identify the right academic path based on your
              interests, skills, and career aspirations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {counselingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20">
              <BookOpen size={16} />
              Featured Courses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Exam Preparation <span className="text-accent italic">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of exam preparation courses designed
              to help you achieve your target scores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-30`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to={course.link}
                      className="flex-1 btn-accent text-center inline-flex items-center justify-center gap-2 group/btn"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                    <Link
                      to="/power-batches"
                      className="flex-1 px-6 py-3 bg-muted text-foreground rounded-full font-semibold hover:bg-muted/80 transition-all duration-300 text-center"
                    >
                      Choose Batch
                    </Link>
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
              <Award size={16} />
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Your Success is Our <span className="text-accent italic">Priority</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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
              Ready to Achieve Your Dream Score?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 leading-relaxed">
              Take the first step towards your international education journey.
              Book a free counseling session with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/power-batches"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Explore Batches
                <ArrowRight size={18} />
              </Link>
              <a
                href="/#contact"
                className="px-8 py-4 bg-accent-foreground/10 text-accent-foreground rounded-full font-semibold hover:bg-accent-foreground/20 transition-all duration-300 border border-accent-foreground/20 inline-flex items-center justify-center"
              >
                Free Counseling
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicCounselingPage;
