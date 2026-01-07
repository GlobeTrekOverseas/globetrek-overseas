import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MS in Computer Science",
    university: "Stanford University, USA",
    image: "PS",
    content: "GlobeTrek made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "MBA Graduate",
    university: "London Business School, UK",
    image: "RM",
    content: "The team's expertise in UK admissions helped me secure admission to LBS. The visa support was exceptional, making the entire process stress-free.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Bachelor's in Medicine",
    university: "University of Melbourne, Australia",
    image: "AP",
    content: "From university selection to accommodation, GlobeTrek was with me at every step. Their personalized approach made all the difference.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            What Our{" "}
            <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from students who achieved their study abroad dreams with GlobeTrek Overseas.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card-elevated p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote size={24} className="text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-heading font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
