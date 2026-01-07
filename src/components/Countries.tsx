import { motion } from "framer-motion";
import { MapPin, Users, GraduationCap, ArrowRight } from "lucide-react";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "4,000+",
    students: "1M+",
    popular: ["MIT", "Harvard", "Stanford"],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    students: "600K+",
    popular: ["Oxford", "Cambridge", "Imperial"],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "100+",
    students: "800K+",
    popular: ["Toronto", "UBC", "McGill"],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "43+",
    students: "750K+",
    popular: ["Melbourne", "Sydney", "ANU"],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    universities: "400+",
    students: "400K+",
    popular: ["TU Munich", "Heidelberg", "LMU"],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "8",
    students: "100K+",
    popular: ["Auckland", "Otago", "Victoria"],
  },
];

const Countries = () => {
  return (
    <section id="countries" className="section-padding bg-background">
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
            <MapPin size={16} />
            Study Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Choose Your{" "}
            <span className="text-primary">Dream Destination</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We help students pursue education in top countries worldwide. 
            Explore opportunities that match your aspirations.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="group card-elevated p-6 cursor-pointer border border-border hover:border-accent/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors">
                    {country.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <GraduationCap size={14} />
                      {country.universities} Unis
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {country.students} Students
                    </span>
                  </div>
                </div>
              </div>

              {/* Popular Universities */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Top Universities</p>
                <div className="flex flex-wrap gap-2">
                  {country.popular.map((uni) => (
                    <span
                      key={uni}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {uni}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More */}
              <div className="pt-4 border-t border-border">
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
