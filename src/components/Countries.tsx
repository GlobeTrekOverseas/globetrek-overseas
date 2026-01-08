import { motion } from "framer-motion";
import { MapPin, Users, GraduationCap, ArrowRight } from "lucide-react";

import countryUSA from "@/assets/country-usa.jpg";
import countryUK from "@/assets/country-uk.jpg";
import countryCanada from "@/assets/country-canada.jpg";
import countryAustralia from "@/assets/country-australia.jpg";
import countryGermany from "@/assets/country-germany.jpg";
import countryNewZealand from "@/assets/country-newzealand.jpg";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    image: countryUSA,
    universities: "4,000+",
    students: "1M+",
    popular: ["MIT", "Harvard", "Stanford"],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: countryUK,
    universities: "150+",
    students: "600K+",
    popular: ["Oxford", "Cambridge", "Imperial"],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    image: countryCanada,
    universities: "100+",
    students: "800K+",
    popular: ["Toronto", "UBC", "McGill"],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: countryAustralia,
    universities: "43+",
    students: "750K+",
    popular: ["Melbourne", "Sydney", "ANU"],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: countryGermany,
    universities: "400+",
    students: "400K+",
    popular: ["TU Munich", "Heidelberg", "LMU"],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    image: countryNewZealand,
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
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
            <MapPin size={16} />
            Study Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Choose Your{" "}
            <span className="text-primary italic">Dream Destination</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We help students pursue education in top countries worldwide. 
            Explore opportunities that match your aspirations.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={country.image} 
                  alt={`Study in ${country.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                {/* Flag Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center text-3xl border border-primary-foreground/20">
                  {country.flag}
                </div>

                {/* Country Info */}
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-accent-foreground transition-colors">
                    {country.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm opacity-90 mb-4">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={16} />
                      {country.universities} Unis
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={16} />
                      {country.students}
                    </span>
                  </div>

                  {/* Top Universities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {country.popular.map((uni) => (
                        <span
                          key={uni}
                          className="px-3 py-1 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-xs font-medium border border-primary-foreground/20"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                  >
                    Explore Programs
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;