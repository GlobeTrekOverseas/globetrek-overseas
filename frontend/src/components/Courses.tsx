import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Users,
  Trophy,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const MotionLink = motion(Link);

const courses = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "Master all four modules - Listening, Reading, Writing & Speaking with expert trainers.",
    duration: "4+ Weeks",
    batchSize: "15+ Students",
    features: [
      "Band 7+ Guarantee",
      "Practice Tests",
      "Speaking Mock Sessions",
      "Personal Feedback",
    ],
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/10",
    icon: "🎯",
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English",
    description:
      "Computer-based test preparation with AI-powered practice for quick results.",
    duration: "4-6 Weeks",
    batchSize: "8-12 Students",
    features: [
      "Score 79+ Strategy",
      "Computer Lab Access",
      "Unlimited Practice",
      "Score Prediction",
    ],
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-500/10 to-pink-400/10",
    icon: "💻",
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description:
      "Excel in Quantitative, Verbal, and Analytical Writing for top MBA programs.",
    duration: "8-12 Weeks",
    batchSize: "6-10 Students",
    features: [
      "700+ Score Strategy",
      "AWA Techniques",
      "Data Insights Prep",
      "Expert Mentorship",
    ],
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-400/10",
    icon: "📊",
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examinations",
    description:
      "Comprehensive preparation for graduate school admissions worldwide.",
    duration: "8-12 Weeks",
    batchSize: "8-12 Students",
    features: [
      "320+ Score Target",
      "Vocabulary Building",
      "Quant Strategies",
      "AWA Excellence",
    ],
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/10",
    icon: "🎓",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-accent font-semibold text-sm mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} />
            Test Preparation Courses
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ace Your{" "}
            <span className="bg-gradient-to-r from-accent to-globe-green-light bg-clip-text text-transparent">
              Language Tests
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert-led coaching for all major English proficiency and aptitude
            tests. Join thousands of successful students who achieved their
            dream scores.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-3xl shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {course.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold">
                        {course.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.fullName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-accent" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-accent" />
                    <span className="font-medium">{course.batchSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {course.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <CheckCircle2
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <MotionLink
                  to="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r ${course.gradient} text-white font-semibold group-hover:shadow-lg transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary rounded-2xl">
            <Trophy size={24} className="text-accent" />
            <span className="font-medium">
              <span className="text-accent font-bold">95%</span> of our students
              achieve their target scores
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
