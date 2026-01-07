import { motion } from "framer-motion";
import { Star, Quote, GraduationCap, MapPin, Trophy } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MS in Computer Science",
    university: "Stanford University",
    country: "USA",
    image: "PS",
    content: "GlobeTrek made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable. The counselors understood my profile and recommended the perfect universities!",
    rating: 5,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Rahul Mehta",
    role: "MBA Graduate",
    university: "London Business School",
    country: "UK",
    image: "RM",
    content: "The team's expertise in UK admissions helped me secure admission to LBS. The visa support was exceptional, making the entire process completely stress-free. Highly recommended!",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ananya Patel",
    role: "Bachelor's in Medicine",
    university: "University of Melbourne",
    country: "Australia",
    image: "AP",
    content: "From university selection to accommodation, GlobeTrek was with me at every step. Their personalized approach and constant support made all the difference in my journey.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Vikram Singh",
    role: "Masters in Data Science",
    university: "University of Toronto",
    country: "Canada",
    image: "VS",
    content: "I was confused about my career path, but GlobeTrek's counselors helped me choose the right program. Their IELTS coaching helped me score 8.0 bands! Now studying at UofT!",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
];

const stats = [
  { value: "10,000+", label: "Students Placed", icon: GraduationCap },
  { value: "98%", label: "Visa Success", icon: Trophy },
  { value: "50+", label: "Countries", icon: MapPin },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
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
            <Trophy size={16} />
            Success Stories
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Dreams Turned{" "}
            <span className="bg-gradient-to-r from-accent to-globe-green-light bg-clip-text text-transparent">
              Into Reality
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful students who trusted GlobeTrek Overseas 
            to guide them towards their international education dreams.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-4 px-8 py-4 bg-card rounded-2xl shadow-elegant border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <stat.icon size={24} className="text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative bg-card rounded-3xl p-8 shadow-elegant border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Quote Icon */}
                <motion.div 
                  className={`absolute top-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <Quote size={24} className="text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star size={20} className="fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.image}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <GraduationCap size={14} className="text-accent" />
                      <span className="text-xs text-accent font-medium">
                        {testimonial.university}, {testimonial.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 btn-accent text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy size={20} />
            Start Your Success Story
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
