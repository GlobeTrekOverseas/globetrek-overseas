import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Power Batches", href: "/power-batches" },
  { name: "Countries", href: "/#countries" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated Top Bar */}
      <div className="bg-gradient-to-r from-primary via-globe-blue-light to-primary text-primary-foreground py-2.5 hidden md:block relative overflow-hidden">
        {/* Animated background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-custom flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-8">
            <motion.a
              href="tel:+91 93113 31899"
              className="flex items-center gap-2 hover:text-accent transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone size={12} />
              </div>
              <span className="font-medium">+91 93113 31899</span>
            </motion.a>
            <motion.a
              href="mailto:headoffice@globetrekoverseas.com"
              className="flex items-center gap-2 hover:text-accent transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail size={12} />
              </div>
              <span className="font-medium">
                headoffice@globetrekoverseas.com
              </span>
            </motion.a>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={12} />
              </div>
              <span>Sector 135, Noida, Uttar Pradesh</span>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 bg-accent/50 px-4 py-1.5 rounded-full"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={14} className="text-white" />
            <span className="text-white font-semibold">
              Your Gateway to Global Education
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-elegant py-2"
            : "bg-background py-3"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={logo}
                alt="GlobeTrek Overseas"
                className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-14"} w-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2.5 text-foreground font-medium transition-all hover:text-accent group rounded-lg hover:bg-accent/5"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full"
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-accent to-globe-green-light text-accent-foreground font-semibold px-6 py-3 rounded-xl shadow-accent hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={16} />
              Free Consultation
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2.5 text-foreground bg-secondary rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container-custom py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-foreground font-medium hover:bg-accent/10 hover:text-accent rounded-xl transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="block bg-gradient-to-r from-accent to-globe-green-light text-accent-foreground font-semibold text-center py-4 rounded-xl mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
