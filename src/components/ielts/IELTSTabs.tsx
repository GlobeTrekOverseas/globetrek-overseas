import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Calendar, 
  Target, 
  Video, 
  Headphones, 
  BookOpen, 
  PenTool, 
  MessageSquare,
  Clock,
  CheckCircle,
  Play,
  ArrowRight,
  Zap,
  Award,
  Users,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

import ieltsHero from "@/assets/ielts-hero.jpg";

// Tab data
const tabs = [
  { 
    id: "structure", 
    label: "IELTS Exam Structure", 
    icon: FileText,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-500"
  },
  { 
    id: "batches", 
    label: "Online Batches", 
    icon: Calendar,
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-500",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-500"
  },
  { 
    id: "mock", 
    label: "Practice Mock Test", 
    icon: Target,
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-500"
  },
  { 
    id: "videos", 
    label: "Strategy Videos", 
    icon: Video,
    color: "from-rose-500 to-rose-700",
    bgColor: "bg-rose-500",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-500"
  }
];

// IELTS Structure data
const examStructure = {
  listening: {
    duration: "30 minutes + 10 min transfer time",
    sections: [
      "Section 1: Everyday social conversation",
      "Section 2: Monologue in social context",
      "Section 3: Educational/training discussion",
      "Section 4: Academic lecture"
    ],
    questions: "40 questions total",
    types: ["Multiple choice", "Matching", "Plan/map labeling", "Form completion", "Sentence completion"]
  },
  reading: {
    duration: "60 minutes (no extra time)",
    academic: "3 long authentic texts (books, journals, newspapers)",
    general: "3 sections of increasing difficulty",
    types: ["Multiple choice", "True/False/Not Given", "Matching headings", "Sentence completion", "Summary completion"]
  },
  writing: {
    duration: "60 minutes",
    task1: {
      time: "20 minutes",
      words: "150+ words",
      academic: "Describe visual information (graph/chart/diagram)",
      general: "Write a letter (formal/semi-formal/informal)"
    },
    task2: {
      time: "40 minutes",
      words: "250+ words",
      description: "Essay on a given topic (same for both versions)"
    }
  },
  speaking: {
    duration: "11-14 minutes",
    format: "Face-to-face interview",
    parts: [
      { part: "Part 1", time: "4-5 mins", description: "Introduction and interview about familiar topics" },
      { part: "Part 2", time: "3-4 mins", description: "Cue card/topic card monologue" },
      { part: "Part 3", time: "4-5 mins", description: "Discussion on abstract issues related to Part 2" }
    ]
  }
};

// Online batches data
const batches = [
  {
    name: "IELTS Fastrack",
    duration: "5-6 Weeks",
    originalPrice: "₹15,999",
    discountedPrice: "₹11,999",
    description: "Intensive revision course designed for quick results",
    features: [
      "Intensive revision program",
      "Group or personal trainer sessions",
      "All modules covered",
      "Daily practice sessions",
      "Weekly progress tests"
    ],
    dates: ["12 January 2026", "19 January 2026"],
    popular: false,
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    name: "IELTS Advance",
    duration: "3-4 Months",
    originalPrice: "₹24,999",
    discountedPrice: "₹17,999",
    description: "Comprehensive coverage with weekly practice tests and feedback",
    features: [
      "Comprehensive coverage of all modules",
      "Weekly practice tests with detailed feedback",
      "Personalized study plan",
      "Doubt clearing sessions",
      "Performance analytics"
    ],
    dates: ["12 January 2026", "19 January 2026"],
    popular: true,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    name: "IELTS Expert",
    duration: "1 Year Unlimited",
    originalPrice: "₹34,999",
    discountedPrice: "₹24,999",
    description: "In-depth preparation with personalized mentorship",
    features: [
      "In-depth preparation",
      "Personalized mentorship",
      "Extensive mock tests",
      "Free access to Question Bank",
      "Free access to Practice Series",
      "1 Year unlimited access"
    ],
    dates: ["12 January 2026", "19 January 2026"],
    popular: false,
    gradient: "from-indigo-600 to-purple-700"
  }
];

// Mock test questions sample
const mockQuestions = [
  {
    category: "Listening",
    icon: Headphones,
    color: "text-blue-500",
    bg: "bg-blue-100",
    questions: 10,
    duration: "12 mins"
  },
  {
    category: "Reading",
    icon: BookOpen,
    color: "text-emerald-500",
    bg: "bg-emerald-100",
    questions: 13,
    duration: "20 mins"
  },
  {
    category: "Writing",
    icon: PenTool,
    color: "text-amber-500",
    bg: "bg-amber-100",
    questions: 2,
    duration: "40 mins"
  },
  {
    category: "Speaking",
    icon: MessageSquare,
    color: "text-rose-500",
    bg: "bg-rose-100",
    questions: 3,
    duration: "15 mins"
  }
];

// Strategy videos
const strategyVideos = [
  {
    title: "IELTS Listening: Top 10 Tips",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "12:45",
    views: "1.2M",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Reading Section Masterclass",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "18:30",
    views: "890K",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Writing Task 2 Essay Structure",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "22:15",
    views: "2.1M",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Speaking Part 2 Cue Card Strategies",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "15:20",
    views: "1.5M",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Band 9 Speaking Tips",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "20:00",
    views: "3.2M",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Common Grammar Mistakes to Avoid",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "14:10",
    views: "750K",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const IELTSTabs = () => {
  const [activeTab, setActiveTab] = useState("structure");

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete IELTS Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your IELTS preparation journey - from exam structure to practice tests
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : "bg-white text-muted-foreground hover:bg-muted/50 border border-border"
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden"
          >
            {/* Tab Header with Image */}
            <div className={`relative h-48 md:h-64 bg-gradient-to-r ${activeTabData?.color}`}>
              <img 
                src={ieltsHero} 
                alt={activeTabData?.label}
                className="w-full h-full object-cover mix-blend-overlay opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  {activeTabData && (
                    <activeTabData.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
                  )}
                  <h3 className="font-serif text-2xl md:text-4xl font-bold">{activeTabData?.label}</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Structure Tab */}
              {activeTab === "structure" && (
                <div className="space-y-8">
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    The <strong className="text-foreground">IELTS (International English Language Testing System)</strong> is globally recognized 
                    for assessing English proficiency across four key skills. Available in <strong className="text-foreground">Academic</strong> and 
                    <strong className="text-foreground"> General Training</strong> versions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Listening */}
                    <motion.div 
                      className="bg-blue-50 rounded-xl p-6 border border-blue-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-500 rounded-lg">
                          <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-blue-700">Listening</h4>
                          <p className="text-sm text-blue-600">{examStructure.listening.duration}</p>
                        </div>
                      </div>
                      <p className="text-blue-700 font-medium mb-3">{examStructure.listening.questions}</p>
                      <ul className="space-y-2">
                        {examStructure.listening.sections.map((section, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-blue-600">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-blue-500" />
                            {section}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Reading */}
                    <motion.div 
                      className="bg-emerald-50 rounded-xl p-6 border border-emerald-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-emerald-500 rounded-lg">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-emerald-700">Reading</h4>
                          <p className="text-sm text-emerald-600">{examStructure.reading.duration}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-3">
                        <p className="text-sm text-emerald-600"><strong>Academic:</strong> {examStructure.reading.academic}</p>
                        <p className="text-sm text-emerald-600"><strong>General:</strong> {examStructure.reading.general}</p>
                      </div>
                      <ul className="space-y-2">
                        {examStructure.reading.types.map((type, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-emerald-600">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-500" />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Writing */}
                    <motion.div 
                      className="bg-amber-50 rounded-xl p-6 border border-amber-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-500 rounded-lg">
                          <PenTool className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-amber-700">Writing</h4>
                          <p className="text-sm text-amber-600">{examStructure.writing.duration}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/50 rounded-lg p-3">
                          <p className="font-medium text-amber-700">Task 1 ({examStructure.writing.task1.time}, {examStructure.writing.task1.words})</p>
                          <p className="text-sm text-amber-600 mt-1"><strong>Academic:</strong> {examStructure.writing.task1.academic}</p>
                          <p className="text-sm text-amber-600"><strong>General:</strong> {examStructure.writing.task1.general}</p>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3">
                          <p className="font-medium text-amber-700">Task 2 ({examStructure.writing.task2.time}, {examStructure.writing.task2.words})</p>
                          <p className="text-sm text-amber-600 mt-1">{examStructure.writing.task2.description}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Speaking */}
                    <motion.div 
                      className="bg-rose-50 rounded-xl p-6 border border-rose-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-rose-500 rounded-lg">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-rose-700">Speaking</h4>
                          <p className="text-sm text-rose-600">{examStructure.speaking.duration} • {examStructure.speaking.format}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {examStructure.speaking.parts.map((part, idx) => (
                          <div key={idx} className="bg-white/50 rounded-lg p-3">
                            <p className="font-medium text-rose-700">{part.part} ({part.time})</p>
                            <p className="text-sm text-rose-600">{part.description}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Batches Tab */}
              {activeTab === "batches" && (
                <div className="space-y-8">
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Choose the perfect plan for your IELTS preparation. All courses include expert guidance, 
                    practice materials, and personalized feedback.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {batches.map((batch, index) => (
                      <motion.div
                        key={batch.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 ${
                          batch.popular ? "border-purple-500" : "border-border"
                        }`}
                        whileHover={{ y: -5 }}
                      >
                        {batch.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                            MOST POPULAR
                          </div>
                        )}
                        
                        <div className={`bg-gradient-to-r ${batch.gradient} p-6 text-white`}>
                          <h4 className="font-serif text-2xl font-bold">{batch.name}</h4>
                          <p className="text-white/80">{batch.duration}</p>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-3xl font-bold text-foreground">{batch.discountedPrice}</span>
                            <span className="text-muted-foreground line-through">{batch.originalPrice}</span>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-6">{batch.description}</p>
                          
                          <ul className="space-y-3 mb-6">
                            {batch.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 mt-0.5 text-purple-500" />
                                <span className="text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="bg-purple-50 rounded-lg p-4 mb-6">
                            <p className="text-sm font-medium text-purple-700 mb-2">Upcoming Batches:</p>
                            <div className="flex flex-wrap gap-2">
                              {batch.dates.map((date, idx) => (
                                <span key={idx} className="bg-white text-purple-600 text-xs px-3 py-1 rounded-full border border-purple-200">
                                  {date}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <Button className={`w-full bg-gradient-to-r ${batch.gradient} hover:opacity-90`}>
                            Enroll Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mock Test Tab */}
              {activeTab === "mock" && (
                <div className="space-y-8">
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Practice with our comprehensive mock tests designed to simulate the real IELTS exam experience. 
                    Get instant feedback and detailed analysis of your performance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {mockQuestions.map((mock, index) => (
                      <motion.div
                        key={mock.category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${mock.bg} rounded-xl p-6 border border-border/50 text-center cursor-pointer hover:shadow-lg transition-all`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-16 h-16 ${mock.bg} rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg`}>
                          <mock.icon className={`w-8 h-8 ${mock.color}`} />
                        </div>
                        <h4 className="font-serif text-xl font-bold text-foreground mb-2">{mock.category}</h4>
                        <p className={`${mock.color} font-medium`}>{mock.questions} Questions</p>
                        <p className="text-muted-foreground text-sm">{mock.duration}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Full Mock Test CTA */}
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap className="w-8 h-8" />
                        <h3 className="font-serif text-2xl md:text-3xl font-bold">Full IELTS Mock Test</h3>
                      </div>
                      <p className="text-white/90 mb-6">
                        Take a complete simulated IELTS exam with all 4 modules. Get detailed band score prediction 
                        and personalized improvement recommendations.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                          <p className="text-2xl font-bold">40</p>
                          <p className="text-sm text-white/80">Listening Q's</p>
                        </div>
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                          <p className="text-2xl font-bold">40</p>
                          <p className="text-sm text-white/80">Reading Q's</p>
                        </div>
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                          <p className="text-2xl font-bold">2</p>
                          <p className="text-sm text-white/80">Writing Tasks</p>
                        </div>
                        <div className="bg-white/20 rounded-lg px-4 py-2">
                          <p className="text-2xl font-bold">3</p>
                          <p className="text-sm text-white/80">Speaking Parts</p>
                        </div>
                      </div>
                      <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                        <Play className="w-5 h-5 mr-2" />
                        Start Full Mock Test
                      </Button>
                    </div>
                  </motion.div>

                  {/* Practice Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
                      <Award className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                      <h4 className="font-serif font-bold text-foreground mb-2">Band Score Prediction</h4>
                      <p className="text-muted-foreground text-sm">Get accurate band score predictions based on your performance</p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
                      <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                      <h4 className="font-serif font-bold text-foreground mb-2">Expert Feedback</h4>
                      <p className="text-muted-foreground text-sm">Receive detailed feedback from certified IELTS trainers</p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
                      <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                      <h4 className="font-serif font-bold text-foreground mb-2">Timed Practice</h4>
                      <p className="text-muted-foreground text-sm">Practice under real exam conditions with strict timing</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Videos Tab */}
              {activeTab === "videos" && (
                <div className="space-y-8">
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                    Learn proven strategies and tips from our expert IELTS trainers. These video tutorials 
                    will help you understand the exam format and improve your scores.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategyVideos.map((video, index) => (
                      <motion.a
                        key={video.title}
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white rounded-xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative aspect-video bg-rose-100">
                          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-serif font-bold text-foreground mb-2 group-hover:text-rose-600 transition-colors">
                            {video.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{video.views} views</span>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* YouTube Channel CTA */}
                  <motion.div
                    className="bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl p-8 text-white text-center"
                    whileHover={{ scale: 1.01 }}
                  >
                    <Video className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-3">Subscribe to Our YouTube Channel</h3>
                    <p className="text-white/90 mb-6 max-w-xl mx-auto">
                      Get access to 100+ free IELTS preparation videos, live sessions, and expert tips. 
                      Join our community of 50,000+ subscribers!
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-rose-600 hover:bg-white/90"
                      onClick={() => window.open("https://www.youtube.com/@GlobetrekOverseas", "_blank")}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Visit YouTube Channel
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IELTSTabs;
