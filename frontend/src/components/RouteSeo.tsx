import { useLocation } from "react-router-dom";
import { getCountryBySlug } from "@/data/countriesData";
import { PageMeta, SITE_NAME, usePageMeta } from "@/lib/seo";

type StaticMeta = Omit<PageMeta, "path">;

const STATIC_META: Record<string, StaticMeta> = {
  "/": {
    title: `${SITE_NAME} | Study Abroad Consultants in Noida`,
    description:
      "GlobeTrek Overseas helps students study abroad in the UK, USA, Australia, Germany, Switzerland and Europe with university admissions, visa guidance, scholarships and IELTS coaching.",
  },
  "/about": {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Meet GlobeTrek Overseas, a Noida-based study abroad consultancy helping students reach top universities worldwide with honest, end-to-end guidance.",
  },
  "/services": {
    title: `Study Abroad Services | ${SITE_NAME}`,
    description:
      "University selection, applications, visa assistance, scholarships, academic counselling and pre-departure support, all under one roof at GlobeTrek Overseas.",
  },
  "/university-selection": {
    title: `University Selection & Applications | ${SITE_NAME}`,
    description:
      "Shortlist the right universities and submit strong applications with expert help on SOPs, LORs, documents and deadlines.",
  },
  "/visa-assistance": {
    title: `Student Visa Assistance | ${SITE_NAME}`,
    description:
      "Step-by-step student visa guidance for the UK, USA, Australia, Germany and more: documentation, financials and interview preparation.",
  },
  "/scholarships": {
    title: `Scholarships & Funding Guidance | ${SITE_NAME}`,
    description:
      "Find and apply for scholarships, bursaries and education loans to fund your studies abroad, with guidance from GlobeTrek Overseas.",
  },
  "/pre-departure": {
    title: `Pre-Departure & Post-Arrival Support | ${SITE_NAME}`,
    description:
      "Accommodation, travel, forex, insurance and arrival support so you settle in smoothly at your university abroad.",
  },
  "/career-counseling": {
    title: `Academic & Career Counselling | ${SITE_NAME}`,
    description:
      "One-on-one academic and career counselling to choose the right course, country and university for your goals.",
  },
  "/channel-partner": {
    title: `Become a Channel Partner | ${SITE_NAME}`,
    description:
      "Partner with GlobeTrek Overseas to offer study abroad services to your students, with full support for applications and visas.",
  },
  "/ielts": {
    title: `IELTS Coaching in Noida | ${SITE_NAME}`,
    description:
      "Expert IELTS coaching for Listening, Reading, Writing and Speaking, with mock tests and personalised feedback to reach your target band.",
  },
  "/power-batches": {
    title: `Power Batches: IELTS, PTE, GMAT & GRE | ${SITE_NAME}`,
    description:
      "Intensive test-prep batches for IELTS, PTE, GMAT and GRE with expert trainers, flexible timings and mock tests.",
  },
  "/blog-live": {
    title: `Study Abroad Blog | ${SITE_NAME}`,
    description:
      "Guides, tips and the latest updates on studying abroad: admissions, visas, scholarships, IELTS and student life.",
  },
  "/terms-and-conditions": {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description: "Terms and conditions for using GlobeTrek Overseas services.",
  },
};

const SHORT_COUNTRY_NAME: Record<string, string> = {
  uk: "the UK",
  usa: "the USA",
};

const NOT_FOUND: StaticMeta = {
  title: `Page Not Found | ${SITE_NAME}`,
  description: "The page you are looking for does not exist.",
  noindex: true,
};

function resolveMeta(rawPath: string): PageMeta | null {
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;

  if (STATIC_META[path]) return { ...STATIC_META[path], path };

  const countryMatch = path.match(/^\/country\/([^/]+)$/);
  if (countryMatch) {
    const country = getCountryBySlug(countryMatch[1]);
    if (country) {
      return {
        path,
        // Kept under ~60 characters so Google doesn't truncate it.
        title: `Study in ${SHORT_COUNTRY_NAME[country.slug] || country.name}: Universities, Costs & Visa | GlobeTrek`,
        description: `Plan your studies in ${country.name}: top universities, tuition fees, post-study work rights, admission requirements and visa process, with expert guidance from GlobeTrek Overseas.`,
      };
    }
  }

  // Blog posts set their own meta once the article has loaded.
  if (/^\/blog\/[^/]+$/.test(path)) return null;

  return { ...NOT_FOUND, path };
}

/** Sets per-route <title>, description, canonical and social tags. */
const RouteSeo = () => {
  const { pathname } = useLocation();
  usePageMeta(resolveMeta(pathname));
  return null;
};

export default RouteSeo;
