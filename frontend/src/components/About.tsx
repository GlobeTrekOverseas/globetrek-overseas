import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Shield, Heart } from "lucide-react";

const MotionLink = motion(Link);

const features = [
  {
    icon: Award,
    title: "3+ Years of Excellence",
    description:
      "Over a decade of experience guiding students to their dream destinations.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "Licensed consultants with transparent processes and ethical practices.",
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    description:
      "Personalized attention to understand and fulfill your unique aspirations.",
  },
];

const highlights = [
  "Expert counselors with international education experience",
  "Partnerships with 500+ universities worldwide",
  "98% visa success rate across all countries",
  "Comprehensive pre-departure and post-arrival support",
  "Scholarship guidance saving millions for students",
  "Dedicated support until you settle abroad",
];

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About GlobeTrek
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Transforming Dreams into{" "}
              <span className="text-accent">Global Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              GlobeTrek Overseas has been at the forefront of international
              education consulting, helping thousands of students achieve their
              dreams of studying abroad. Our team of experienced counselors
              provides personalized guidance tailored to each student's unique
              goals and circumstances.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <MotionLink
              to="/about"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </MotionLink>
          </motion.div>

          {/* Features Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-elevated p-6 flex items-start gap-5 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              className="bg-primary text-primary-foreground p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "500+", label: "Students Placed" },
                  { value: "20+", label: "Countries" },
                  { value: "500+", label: "Partner Universities" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl sm:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
