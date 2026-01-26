import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    {
      name: "University Selection & Application",
      href: "/university-selection",
    },
    { name: "Visa Assistance", href: "/visa-assistance" },
    { name: "Academic & Course Counseling", href: "/career-counseling" },
    { name: "Pre-Departure & Post-Arrival Support", href: "/pre-departure" },
    { name: "Scholarships & Funding Guidance", href: "/scholarships" },
    { name: "Channel Partner Support", href: "/channel-partner" },
  ],
  destinations: [
    { name: "Study in UK", href: "/country/uk" },
    { name: "Study in Canada", href: "/country/canada" },
    { name: "Study in Switzerland", href: "/country/switzerland" },
    { name: "Study in Germany", href: "/country/germany" },
    { name: "Study in Europe", href: "/country/europe" },
    { name: "Study in USA", href: "/country/usa" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Power batches", href: "/power-batches" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Services", href: "/services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/globetrekoverseas?rdid=08p2MhX3ThuGRGNh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BhTFGoreF%2F#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/globetrekieltspathway?igsh=MXZvMzUwZHAybXhpYg==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/globetrek-overseas/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@GlobeTrekOverseasPathway", label: "YouTube" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.img
              src={logo}
              alt="GlobeTrek Overseas"
              className="h-12 mb-6 brightness-0 invert"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for international education. We help students
              achieve their dreams of studying abroad with expert guidance and
              comprehensive support.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} GlobeTrek Overseas. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
