import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Globetrek Overseas ("we," "our," or "us") provides guidance and
          consultancy services to students seeking opportunities to study
          abroad. Our website and services assist students in exploring
          universities, courses, visa guidance, application processes, language
          test preparation, and related support.
        </p>
        <p>
          These Terms & Conditions govern your use of our website, services, and
          interactions with us.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Our services are intended for individuals aged 16 years or older.
        </li>
        <li>
          You confirm that all information provided is accurate, current, and
          complete.
        </li>
        <li>
          Parents or guardians are responsible for applicants under 18 years of
          age.
        </li>
      </ul>
    ),
  },
  {
    title: "3. Scope of Services",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Study abroad consultation and academic counseling</li>
          <li>University and course selection guidance</li>
          <li>Application and documentation support</li>
          <li>Student visa guidance</li>
          <li>Test preparation support (IELTS, TOEFL, PTE, GRE, GMAT, etc.)</li>
          <li>Pre & post-departure assistance</li>
        </ul>
        <p className="mt-4 font-medium">
          Disclaimer: We do not guarantee admissions, scholarships, or visa
          approvals. Final decisions rest with universities and government
          authorities.
        </p>
      </>
    ),
  },
  {
    title: "4. User Responsibilities",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide truthful and complete information</li>
        <li>Ensure authenticity of submitted documents</li>
        <li>Comply with admission and visa requirements</li>
        <li>Use the website only for lawful purposes</li>
      </ul>
    ),
  },
  {
    title: "5. Fees & Payments",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Fees will be communicated clearly before engagement</li>
        <li>Payments must be made via approved methods only</li>
        <li>Fees once paid are non-refundable unless stated otherwise</li>
        <li>
          Students bear additional costs such as exam fees, visa charges,
          insurance, and travel expenses
        </li>
      </ul>
    ),
  },
  {
    title: "6. Third-Party Institutions",
    content: (
      <p>
        Globetrek Overseas acts solely as a facilitator. We are not responsible
        for decisions or policy changes made by universities, embassies, visa
        authorities, or testing agencies.
      </p>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <p>
        All website content including text, images, branding, and materials is
        the intellectual property of Globetrek Overseas and may not be copied,
        reproduced, or distributed without written consent.
      </p>
    ),
  },
  {
    title: "8. Privacy & Data Protection",
    content: (
      <p>
        We collect personal information strictly for study abroad consultation
        purposes. By using our services, you consent to data usage and sharing
        with relevant institutions. Please refer to our Privacy Policy for
        details.
      </p>
    ),
  },
  {
    title: "9. Limitation of Liability",
    content: (
      <p>
        Globetrek Overseas is not liable for admission denials, visa rejections,
        policy changes, academic or financial losses, or document inaccuracies
        provided by students.
      </p>
    ),
  },
  {
    title: "10. Code of Conduct",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>No submission of forged or misleading documents</li>
        <li>No misuse of the website</li>
        <li>No harassment or abuse of staff or partners</li>
        <li>No violation of intellectual property rights</li>
      </ul>
    ),
  },
  {
    title: "11. Termination of Services",
    content: (
      <p>
        We reserve the right to refuse or terminate services if false
        information is provided or these terms are violated.
      </p>
    ),
  },
  {
    title: "12. Changes to Terms",
    content: (
      <p>
        These Terms & Conditions may be updated at any time. Continued use of
        our services constitutes acceptance of revised terms.
      </p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of India. Any disputes shall be
        subject to the exclusive jurisdiction of Indian courts.
      </p>
    ),
  },
  {
    title: "14. Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          <strong>Company:</strong> Globetrek Overseas
        </p>
        <p>
          <strong>Email:</strong> headoffice@globetrekoverseas.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9311331899 | +91 9211313899
        </p>
        <p>
          <strong>Address:</strong> Tower 4 - 1210 Asshotech Business Cresterra,
          Sector 135, Noida, Uttar Pradesh 201304
        </p>
      </div>
    ),
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Terms & Conditions
            </h1>

            <p className="text-muted-foreground mb-10">
              Welcome to Globetrek Overseas. By accessing or using our website
              and services, you agree to the following Terms & Conditions.
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-heading font-semibold mb-3">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
