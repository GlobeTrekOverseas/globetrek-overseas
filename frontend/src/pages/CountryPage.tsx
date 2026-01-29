import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  DollarSign,
  Briefcase,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  FileText,
  Clock,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getCountryBySlug } from "@/data/countriesData";

const CountryPage = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const country = countrySlug ? getCountryBySlug(countrySlug) : undefined;

  if (!country) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={country.heroImage}
            alt={`Study in ${country.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-24 pb-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#countries"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
              Back to Countries
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
                  Study in {country.name}
                </h1>
              </div>
            </div>

            <p className="text-xl text-primary-foreground/90 italic font-heading mb-6">
              {country.tagline}
            </p>

            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              {country.description}
            </p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              asChild
            >
              <a href="#contact">Get Free Counseling</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: GraduationCap,
                label: "Universities",
                value: country.facts.universities,
              },
              {
                icon: Users,
                label: "International Students",
                value: country.facts.internationalStudents,
              },
              {
                icon: DollarSign,
                label: "Average Tuition",
                value: country.facts.avgTuition,
              },
              {
                icon: Briefcase,
                label: "Post-Study Work",
                value: country.facts.postStudyWork,
              },
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <fact.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">
                  {fact.value}
                </p>
                <p className="text-muted-foreground">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Study Here */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <BookOpen size={16} />
              Why Choose {country.name}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Benefits of Studying in{" "}
              <span className="text-primary italic">{country.name}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.whyStudy.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="bg-secondary/30 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <Building2 size={16} />
              Top Institutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Leading Universities in{" "}
              <span className="text-primary italic">{country.name}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.topUniversities.map((uni, index) => (
              <motion.div
                key={uni.name}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {uni.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {uni.location}
                    </p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {uni.ranking}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <GraduationCap size={16} />
              Popular Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              In-Demand Courses in{" "}
              <span className="text-primary italic">{country.name}</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {country.popularCourses.map((course, index) => (
              <motion.span
                key={course}
                className="px-6 py-3 bg-secondary/50 rounded-full text-foreground font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements & Visa Info */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold">
                  Admission Requirements
                </h2>
              </div>

              <div className="space-y-4">
                {country.requirements.map((req, index) => (
                  <motion.div
                    key={req}
                    className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visa Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold">
                  Visa Information
                </h2>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border/50 shadow-lg">
                <div className="space-y-6">
                  {[
                    {
                      label: "Visa Type",
                      value: country.visaInfo.type,
                      icon: FileText,
                    },
                    {
                      label: "Duration",
                      value: country.visaInfo.duration,
                      icon: Clock,
                    },
                    {
                      label: "Processing Time",
                      value: country.visaInfo.processingTime,
                      icon: Clock,
                    },
                    {
                      label: "Work Rights",
                      value: country.visaInfo.workRights,
                      icon: Briefcase,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Study in {country.name}?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get personalized guidance from our expert counselors and start
              your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                asChild
              >
                <a href="#contact">Schedule Free Consultation</a>
              </Button>
              <Button
                size="lg"
                className="
    bg-primary-foreground/10
    text-primary-foreground
    border border-primary-foreground/30
    hover:bg-primary-foreground/20
    hover:border-primary-foreground/50
    font-semibold
    px-8
  "
                asChild
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CountryPage;
