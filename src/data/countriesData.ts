import countryUSA from "@/assets/country-usa.jpg";
import countryUK from "@/assets/country-uk.jpg";
import countryAustralia from "@/assets/country-australia.jpg";
import countryGermany from "@/assets/country-germany.jpg";

export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  heroImage: string;
  tagline: string;
  description: string;
  facts: {
    universities: string;
    internationalStudents: string;
    avgTuition: string;
    postStudyWork: string;
  };
  topUniversities: {
    name: string;
    ranking: string;
    location: string;
  }[];
  whyStudy: {
    title: string;
    description: string;
  }[];
  popularCourses: string[];
  requirements: string[];
  visaInfo: {
    type: string;
    duration: string;
    processingTime: string;
    workRights: string;
  };
}

export const countriesData: Record<string, CountryData> = {
  uk: {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    heroImage: countryUK,
    tagline: "World-Class Education in Historic Institutions",
    description: "The United Kingdom offers a rich academic tradition with some of the world's oldest and most prestigious universities. With shorter degree programs and a multicultural environment, the UK remains a top destination for international students seeking quality education.",
    facts: {
      universities: "150+",
      internationalStudents: "600,000+",
      avgTuition: "£10,000 - £38,000/year",
      postStudyWork: "2 Years Graduate Route",
    },
    topUniversities: [
      { name: "University of Oxford", ranking: "#1 in UK", location: "Oxford" },
      { name: "University of Cambridge", ranking: "#2 in UK", location: "Cambridge" },
      { name: "Imperial College London", ranking: "#3 in UK", location: "London" },
      { name: "UCL", ranking: "#4 in UK", location: "London" },
      { name: "University of Edinburgh", ranking: "#5 in UK", location: "Edinburgh" },
      { name: "King's College London", ranking: "#6 in UK", location: "London" },
    ],
    whyStudy: [
      { title: "Shorter Degree Programs", description: "Complete undergraduate degrees in 3 years and master's in 1 year, saving time and money." },
      { title: "Global Recognition", description: "UK degrees are recognized and respected by employers and institutions worldwide." },
      { title: "Research Excellence", description: "Home to groundbreaking research and Nobel Prize winners across various fields." },
      { title: "Cultural Diversity", description: "Experience a multicultural environment with students from over 180 countries." },
      { title: "Work Opportunities", description: "Graduate Route visa allows 2 years of work experience after completing your degree." },
      { title: "Historic Heritage", description: "Study in cities rich with history, culture, and world-famous landmarks." },
    ],
    popularCourses: ["Business & Management", "Engineering", "Computer Science", "Law", "Medicine", "Arts & Design", "Finance", "Data Science"],
    requirements: [
      "Valid passport with minimum 6 months validity",
      "English proficiency (IELTS 6.0-7.0 or equivalent)",
      "Academic transcripts and certificates",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation",
      "Proof of financial support",
      "TB test certificate (if applicable)",
    ],
    visaInfo: {
      type: "Student Visa (Tier 4)",
      duration: "Duration of course + 4 months",
      processingTime: "3-4 weeks",
      workRights: "20 hours/week during term, full-time during breaks",
    },
  },
  usa: {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    heroImage: countryUSA,
    tagline: "Land of Endless Opportunities & Innovation",
    description: "The United States is home to the world's largest number of top-ranked universities and offers unparalleled opportunities for research, innovation, and career growth. With diverse programs and flexible education systems, the USA attracts students from every corner of the globe.",
    facts: {
      universities: "4,000+",
      internationalStudents: "1,000,000+",
      avgTuition: "$20,000 - $60,000/year",
      postStudyWork: "OPT up to 3 Years",
    },
    topUniversities: [
      { name: "Massachusetts Institute of Technology", ranking: "#1 in USA", location: "Massachusetts" },
      { name: "Harvard University", ranking: "#2 in USA", location: "Massachusetts" },
      { name: "Stanford University", ranking: "#3 in USA", location: "California" },
      { name: "California Institute of Technology", ranking: "#4 in USA", location: "California" },
      { name: "University of Chicago", ranking: "#5 in USA", location: "Illinois" },
      { name: "Princeton University", ranking: "#6 in USA", location: "New Jersey" },
    ],
    whyStudy: [
      { title: "World-Leading Universities", description: "Home to more top-ranked universities than any other country in the world." },
      { title: "Cutting-Edge Research", description: "Access to state-of-the-art facilities and groundbreaking research opportunities." },
      { title: "Flexible Education System", description: "Choose your major later and explore diverse subjects before specializing." },
      { title: "Career Opportunities", description: "Strong industry connections and internship programs with leading companies." },
      { title: "Cultural Melting Pot", description: "Experience diverse cultures and build a global network of connections." },
      { title: "Innovation Hub", description: "Study in the land of Silicon Valley, Wall Street, and countless startups." },
    ],
    popularCourses: ["Computer Science", "Business Administration", "Engineering", "Data Science", "Healthcare", "Finance", "Biotechnology", "Artificial Intelligence"],
    requirements: [
      "Valid passport",
      "SAT/ACT scores (for undergraduate)",
      "GRE/GMAT scores (for graduate)",
      "English proficiency (TOEFL/IELTS)",
      "Academic transcripts",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Proof of financial support (I-20 requirement)",
    ],
    visaInfo: {
      type: "F-1 Student Visa",
      duration: "Duration of study program",
      processingTime: "3-5 weeks",
      workRights: "20 hours/week on-campus, OPT/CPT for off-campus",
    },
  },
  australia: {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    heroImage: countryAustralia,
    tagline: "Quality Education in a Beautiful Environment",
    description: "Australia combines world-class education with an exceptional quality of life. Known for its welcoming culture, stunning landscapes, and strong economy, Australia offers international students a safe and enriching study experience with excellent post-study work opportunities.",
    facts: {
      universities: "43+",
      internationalStudents: "750,000+",
      avgTuition: "AUD 20,000 - 45,000/year",
      postStudyWork: "2-4 Years Post-Study Work",
    },
    topUniversities: [
      { name: "University of Melbourne", ranking: "#1 in Australia", location: "Melbourne" },
      { name: "University of Sydney", ranking: "#2 in Australia", location: "Sydney" },
      { name: "Australian National University", ranking: "#3 in Australia", location: "Canberra" },
      { name: "University of Queensland", ranking: "#4 in Australia", location: "Brisbane" },
      { name: "UNSW Sydney", ranking: "#5 in Australia", location: "Sydney" },
      { name: "Monash University", ranking: "#6 in Australia", location: "Melbourne" },
    ],
    whyStudy: [
      { title: "High Quality of Life", description: "Australian cities consistently rank among the world's most livable cities." },
      { title: "Work While Studying", description: "Work up to 48 hours per fortnight during term time with your student visa." },
      { title: "Post-Study Work Rights", description: "Generous post-study work visas of 2-4 years depending on your qualification." },
      { title: "Research Excellence", description: "Strong focus on research with significant government investment in innovation." },
      { title: "Multicultural Society", description: "Welcoming and diverse community with students from around the world." },
      { title: "Beautiful Environment", description: "Study surrounded by stunning beaches, unique wildlife, and natural wonders." },
    ],
    popularCourses: ["Business & Management", "Engineering", "Information Technology", "Health Sciences", "Environmental Science", "Hospitality", "Education", "Creative Arts"],
    requirements: [
      "Valid passport",
      "English proficiency (IELTS 6.0-7.0)",
      "Academic qualifications",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of financial capacity",
      "Overseas Student Health Cover (OSHC)",
      "Character and health requirements",
    ],
    visaInfo: {
      type: "Student Visa (Subclass 500)",
      duration: "Duration of course + extra months",
      processingTime: "4-6 weeks",
      workRights: "48 hours/fortnight during term, unlimited during breaks",
    },
  },
  switzerland: {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    heroImage: countryGermany, // Using Germany image as placeholder
    tagline: "Excellence in Education Amidst Alpine Beauty",
    description: "Switzerland is renowned for its exceptional quality of education, particularly in hospitality, finance, and engineering. With a multilingual environment and stunning Alpine scenery, Switzerland offers a unique and prestigious study experience in the heart of Europe.",
    facts: {
      universities: "12+",
      internationalStudents: "60,000+",
      avgTuition: "CHF 1,000 - 30,000/year",
      postStudyWork: "6 Months Job Search",
    },
    topUniversities: [
      { name: "ETH Zurich", ranking: "#1 in Switzerland", location: "Zurich" },
      { name: "EPFL", ranking: "#2 in Switzerland", location: "Lausanne" },
      { name: "University of Zurich", ranking: "#3 in Switzerland", location: "Zurich" },
      { name: "University of Geneva", ranking: "#4 in Switzerland", location: "Geneva" },
      { name: "University of Basel", ranking: "#5 in Switzerland", location: "Basel" },
      { name: "EHL Hospitality", ranking: "#1 Hospitality School", location: "Lausanne" },
    ],
    whyStudy: [
      { title: "World-Class Institutions", description: "Home to ETH Zurich and EPFL, consistently ranked among the world's top universities." },
      { title: "Multilingual Environment", description: "Study in German, French, Italian, or English in a truly international setting." },
      { title: "Innovation Hub", description: "Switzerland leads in research and innovation with strong industry partnerships." },
      { title: "Quality of Life", description: "One of the highest standards of living with safety and excellent infrastructure." },
      { title: "Central Location", description: "Easy access to explore Europe during your studies." },
      { title: "Hospitality Excellence", description: "World-renowned for hospitality and hotel management education." },
    ],
    popularCourses: ["Hospitality Management", "Finance & Banking", "Engineering", "International Relations", "Luxury Brand Management", "Computer Science", "Life Sciences", "Business Administration"],
    requirements: [
      "Valid passport",
      "Language proficiency (German/French/Italian or English)",
      "Academic transcripts and diplomas",
      "Motivation letter",
      "CV/Resume",
      "Proof of financial means",
      "Health insurance",
    ],
    visaInfo: {
      type: "Student Visa (Type D)",
      duration: "1 year, renewable",
      processingTime: "6-12 weeks",
      workRights: "15 hours/week after 6 months",
    },
  },
  germany: {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    heroImage: countryGermany,
    tagline: "Free Education & Engineering Excellence",
    description: "Germany is a top destination for international students, offering tuition-free education at public universities and world-renowned engineering and technology programs. With a strong economy and rich cultural heritage, Germany provides excellent career prospects for graduates.",
    facts: {
      universities: "400+",
      internationalStudents: "400,000+",
      avgTuition: "€0 - €20,000/year",
      postStudyWork: "18 Months Job Seeker Visa",
    },
    topUniversities: [
      { name: "Technical University of Munich", ranking: "#1 in Germany", location: "Munich" },
      { name: "LMU Munich", ranking: "#2 in Germany", location: "Munich" },
      { name: "Heidelberg University", ranking: "#3 in Germany", location: "Heidelberg" },
      { name: "Humboldt University Berlin", ranking: "#4 in Germany", location: "Berlin" },
      { name: "RWTH Aachen", ranking: "#5 in Germany", location: "Aachen" },
      { name: "Free University of Berlin", ranking: "#6 in Germany", location: "Berlin" },
    ],
    whyStudy: [
      { title: "Tuition-Free Education", description: "Most public universities offer free tuition for international students." },
      { title: "Engineering Excellence", description: "World-renowned for engineering, automotive, and technology education." },
      { title: "Strong Economy", description: "Europe's largest economy with excellent job opportunities for graduates." },
      { title: "Research Opportunities", description: "Significant investment in research and development across all fields." },
      { title: "Central European Location", description: "Easy access to explore other European countries during your studies." },
      { title: "Work Opportunities", description: "18-month post-study job seeker visa to find employment in Germany." },
    ],
    popularCourses: ["Engineering", "Computer Science", "Automotive Engineering", "Business Administration", "Natural Sciences", "Medicine", "Architecture", "Renewable Energy"],
    requirements: [
      "Valid passport",
      "German or English proficiency (TestDaF/IELTS)",
      "Academic transcripts (APS certificate for some countries)",
      "Motivation letter",
      "CV/Resume",
      "Proof of financial means (blocked account ~€11,208/year)",
      "Health insurance",
    ],
    visaInfo: {
      type: "Student Visa (National Visa)",
      duration: "Duration of studies",
      processingTime: "4-12 weeks",
      workRights: "120 full days or 240 half days/year",
    },
  },
  europe: {
    slug: "europe",
    name: "Europe",
    flag: "🇪🇺",
    heroImage: countryUK, // Using UK image as placeholder for Europe
    tagline: "Diverse Cultures, World-Class Education",
    description: "Europe offers an incredible diversity of educational opportunities across multiple countries, cultures, and languages. From Scandinavia to the Mediterranean, European universities provide affordable, high-quality education with the added benefit of exploring the continent's rich history and culture.",
    facts: {
      universities: "5,000+",
      internationalStudents: "2,500,000+",
      avgTuition: "€0 - €25,000/year",
      postStudyWork: "Varies by Country",
    },
    topUniversities: [
      { name: "University of Amsterdam", ranking: "Top in Netherlands", location: "Netherlands" },
      { name: "KU Leuven", ranking: "Top in Belgium", location: "Belgium" },
      { name: "Uppsala University", ranking: "Top in Sweden", location: "Sweden" },
      { name: "University of Copenhagen", ranking: "Top in Denmark", location: "Denmark" },
      { name: "Trinity College Dublin", ranking: "Top in Ireland", location: "Ireland" },
      { name: "Politecnico di Milano", ranking: "Top in Italy", location: "Italy" },
    ],
    whyStudy: [
      { title: "Affordable Education", description: "Many European countries offer low or no tuition fees for international students." },
      { title: "Cultural Diversity", description: "Experience multiple cultures, languages, and traditions across the continent." },
      { title: "Erasmus+ Programs", description: "Opportunity to study in multiple European countries during your degree." },
      { title: "High Quality of Life", description: "European countries consistently rank high in quality of life indexes." },
      { title: "Travel Opportunities", description: "Easy and affordable travel across the Schengen zone during your studies." },
      { title: "English-Taught Programs", description: "Thousands of programs taught in English across non-English speaking countries." },
    ],
    popularCourses: ["Business & Economics", "Engineering", "Arts & Humanities", "Social Sciences", "Natural Sciences", "Medicine", "Design", "Sustainability"],
    requirements: [
      "Valid passport",
      "Language proficiency (English or local language)",
      "Academic transcripts",
      "Motivation letter",
      "CV/Resume",
      "Proof of financial means",
      "Health insurance",
      "Country-specific requirements may apply",
    ],
    visaInfo: {
      type: "Student Visa (varies by country)",
      duration: "Duration of studies",
      processingTime: "2-12 weeks (varies by country)",
      workRights: "Usually 10-20 hours/week (varies by country)",
    },
  },
};

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countriesData[slug.toLowerCase()];
};

export const getAllCountrySlugs = (): string[] => {
  return Object.keys(countriesData);
};
