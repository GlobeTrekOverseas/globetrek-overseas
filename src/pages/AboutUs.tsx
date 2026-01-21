import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  Handshake,
  Quote,
  MessageCircle,
  GraduationCap,
  Plane,
  FileCheck,
  Trophy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import teamCeo from "@/assets/team- director.jpeg";
import teamCounseling from "@/assets/team-co-founder.jpeg";
import teamVisa from "@/assets/team-coo.jpeg";
import teamPartnership from "@/assets/team-bdm.jpeg";
import teamitHead from "@/assets/team-it-head.jpeg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import partnerships from "@/assets/partnerships.jpg";
import universityPartnersNew from "@/assets/university-partners-new.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import studentSuccess from "@/assets/student-success.jpg";
import companyEventsCollage from "@/assets/company-events-collage.jpg";
import { cn } from "@/lib/utils";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "500+", label: "Students Placed" },
  { value: "20+", label: "Countries" },
  { value: "98%", label: "Visa Success" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make global education simple, accessible, and transparent for every student, empowering them to achieve their dreams of studying abroad.",
    color: "from-primary to-globe-blue-light",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted and innovative overseas education consultancy, creating pathways for millions of students to access world-class education.",
    color: "from-accent to-globe-green-light",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity, transparency, student-first approach, and excellence in service. We believe in building lasting relationships based on trust.",
    color: "from-globe-blue-light to-primary",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Study Abroad Preparation",
    description:
      "Expert guidance to choose the right course and university based on your profile and career goals.",
  },
  {
    icon: Globe,
    title: "University Selection",
    description:
      "Access to 350+ partner universities across 20+ countries with personalized recommendations.",
  },
  {
    icon: Award,
    title: "Visa Assistance",
    description:
      "Comprehensive visa support with 98% success rate and interview preparation.",
  },
  {
    icon: Users,
    title: "Pre-Departure Support",
    description: "Complete guidance on travel, banking, and settling abroad.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description:
      "Help students secure scholarships and financial aid to make education affordable.",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    description:
      "Flight bookings, forex services, and travel insurance arrangements.",
  },
  {
    icon: FileCheck,
    title: "Document Processing",
    description:
      "SOP writing, LOR guidance, and application document verification.",
  },
];

const teamMembers = [
  {
    name: "Ishita Gulati",
    role: "Director",
    description: "3+ years of experience in overseas education consulting",
    image: teamCeo,
  },
  {
    name: "Barun Gulati",
    role: "CO-Founder",
    description: "Expert in UK & Australia student placements",
    image: teamCounseling,
  },
  {
    name: "Suhani Gulati",
    role: "Chief Operations Officer",
    description: "Specialized in complex visa cases with 98% success rate",
    image: teamVisa,
  },
  {
    name: "Aditya Sharma",
    role: "Business Development Manager",
    description: "Manages relationships with 350+ university partners",
    image: teamPartnership,
  },
  {
    name: "Nidamanuri Chandana",
    role: "IT Head",
    description: "Manages relationships with 350+ university partners",
    image: teamitHead,
  },
];

const partnerCountries = [
  { name: "USA", universities: "100+" },
  { name: "UK", universities: "80+" },
  { name: "Canada", universities: "75+" },
  { name: "Australia", universities: "60+" },
  { name: "Germany", universities: "50+" },
  { name: "New Zealand", universities: "40+" },
];

const achievementsList = [
  {
    icon: Trophy,
    title: "Best Education Consultancy 2024",
    subtitle: "National Education Excellence Awards",
  },
  {
    icon: Star,
    title: "5-Star Service Rating",
    subtitle: "Google Reviews - 4.9/5 Average",
  },
  {
    icon: Award,
    title: "Top Visa Success Rate",
    subtitle: "98% Approval Across All Countries",
  },
  {
    icon: Globe,
    title: "Global Partner Network",
    subtitle: "350+ Universities in 20+ Countries",
  },
];

const studentTestimonials = [
  {
    name: "Ananya Gupta",
    university: "University of Toronto, Canada",
    quote:
      "GlobeTrek made my dream of studying in Canada a reality. Their guidance was invaluable throughout the process.",
    rating: 5,
    image: student1,
  },
  {
    name: "Rahul Verma",
    university: "University of Melbourne, Australia",
    quote:
      "The team's expertise in visa processing helped me secure my student visa in record time. Highly recommended!",
    rating: 5,
    image: student2,
  },
  {
    name: "Pooja Singh",
    university: "University of Manchester, UK",
    quote:
      "From course selection to pre-departure, GlobeTrek was with me every step of the way. Forever grateful!",
    rating: 5,
    image: student3,
  },
];

const whyChooseUs = [
  "Expert counselors with international education experience",
  "Partnerships with 350+ universities worldwide",
  "98% visa success rate across all countries",
  "Comprehensive pre-departure and post-arrival support",
  "Scholarship guidance saving millions for students",
  "Dedicated support until you settle abroad",
  "Transparent processes with no hidden fees",
  "Personalized attention to every student",
];

const MotionLink = motion(Link);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Students celebrating graduation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="w-4 h-4" />
              About GlobeTrek Overseas
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Turning Dreams into{" "}
              <span className="text-accent">Global Reality</span>
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              For over 15 years, we've been the trusted partner for thousands of
              students embarking on their international education journey. Your
              success is our story.
            </p>

            <div className="flex flex-wrap gap-4">
              <MotionLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </MotionLink>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                A Journey of{" "}
                <span className="text-accent">Transforming Lives</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    GlobeTrek Overseas was born out of a shared dream
                  </strong>{" "}
                  — to make global education simple, accessible, and transparent
                  for every student.
                </p>
                <p>
                  Founded in 2009, we started as a small team of passionate
                  educators who believed that every student deserves access to
                  world-class education regardless of their background.
                </p>
                <p>
                  Over the years, we have guided aspiring learners to
                  universities across continents, helping them shape their
                  careers and futures with confidence.
                </p>
                <p>
                  What sets us apart is not just our network of global
                  universities, but the{" "}
                  <strong className="text-foreground">personal touch</strong> we
                  bring to each student's journey.
                </p>
                <p>
                  For us, every success story is personal — because when a
                  student achieves their dream, it becomes our achievement too.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={aboutTeam}
                  alt="GlobeTrek Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Decorative badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              Mission, Vision & <span className="text-accent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative bg-background rounded-2xl p-8 shadow-elegant border border-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our Education <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive suite of services designed to provide students with
              a stress-free overseas education journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-6 bg-secondary/50 rounded-2xl border border-border hover:bg-background hover:shadow-elegant transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second row with 3 cards centered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            {services.slice(4).map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-6 bg-secondary/50 rounded-2xl border border-border hover:bg-background hover:shadow-elegant transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Meet the <span className="text-accent">Experts</span>
            </h2>
            <p className="text-muted-foreground">
              Our dedicated team of experienced professionals is here to guide
              you every step of the way.
            </p>
          </motion.div>

          {/* Team Group Photo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-elegant mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={teamPhoto}
              alt="GlobeTrek Professional Team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                The GlobeTrek Family
              </h3>
              <p className="text-white/80">
                Dedicated professionals committed to your success
              </p>
            </div>
          </motion.div>

          {/* Individual Team Members - 5 cards with proper layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                className="group bg-background rounded-2xl overflow-hidden border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={cn(
                      "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500",
                      index === 0 && "object-[center_-80px]",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row with 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
            {teamMembers.slice(3).map((member, index) => (
              <motion.div
                key={member.name}
                className="group bg-background rounded-2xl overflow-hidden border border-border shadow-elegant"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={cn(
                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                      index === 1 && "object-[center_0px]",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              <Handshake className="w-4 h-4" />
              Global Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our Global <span className="text-accent">Partnerships</span>
            </h2>
            <p className="text-muted-foreground">
              We have established strong partnerships with over 350+
              universities across 20+ countries, ensuring our students have
              access to the best educational opportunities worldwide.
            </p>
          </motion.div>

          {/* Global Network Map */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-elegant mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={globalNetwork}
              alt="Global Education Network"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-4">
                {partnerCountries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="font-bold text-primary">
                      {country.universities}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-elegant"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={universityPartnersNew}
                alt="Partner Universities"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">
                World-Class{" "}
                <span className="text-accent">University Partners</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our partnerships span across the globe's most prestigious
                institutions, from Ivy League universities in the USA to Russell
                Group universities in the UK, Group of Eight in Australia, and
                top-ranked institutions in Canada, Germany, and beyond.
              </p>
              <div className="space-y-4">
                {[
                  "Direct admission pathways to partner universities",
                  "Exclusive scholarship opportunities for our students",
                  "Priority processing for applications",
                  "Annual university visits and webinars",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Partnership Meeting Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-elegant mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={partnerships}
              alt="Partnership Meeting"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Building Global Bridges
              </h3>
              <p className="text-white/80">
                Strengthening partnerships for student success
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Events Collage Section */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-4">
              <Star className="w-4 h-4" />
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              Our <span className="text-accent">Events & Celebrations</span>
            </h2>
            <p className="text-primary-foreground/80 mt-4">
              Moments that define our journey and celebrate our achievements
              together
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-elegant"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={companyEventsCollage}
              alt="GlobeTrek Company Events and Celebrations"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Student Insights / Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              <MessageCircle className="w-4 h-4" />
              Student Insights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What Our <span className="text-accent">Students Say</span>
            </h2>
            <p className="text-muted-foreground">
              Hear from students who have successfully achieved their dreams of
              studying abroad with our guidance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Student Success Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-elegant"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={studentSuccess}
                alt="Successful Students"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Students Successfully Placed
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Testimonials with Student Photos */}
            <div className="space-y-6">
              {studentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-secondary/50 p-6 rounded-2xl border border-border relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-accent fill-accent"
                            />
                          ),
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <div className="font-heading font-bold">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-accent">
                          {testimonial.university}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Why GlobeTrek
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Why Students <span className="text-accent">Choose Us</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience and a proven track record,
                we've helped thousands of students achieve their dreams of
                studying abroad. Here's what makes us different.
              </p>
              <motion.a
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspirational Message Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 text-accent mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
              "Education is the passport to the future, for tomorrow belongs to
              those who{" "}
              <span className="text-accent">prepare for it today.</span>"
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              At GlobeTrek Overseas, we believe every student has the potential
              to achieve greatness. Let us be your partner in this
              transformative journey towards a brighter future.
            </p>
            <p className="text-primary-foreground/60 italic">
              — The GlobeTrek Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Ready to Start Your{" "}
                <span className="text-accent">Journey?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Book a free consultation with our expert counselors and take the
                first step towards your dream of studying abroad.
              </p>
              <motion.a
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;