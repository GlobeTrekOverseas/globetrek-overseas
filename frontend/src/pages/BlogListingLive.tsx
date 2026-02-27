import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { blogAxios } from "@/lib/bot";
import globetrek from "@/assets/blogpagebackground.png";
import bg from "@/assets/BGBLOGS.jpeg";
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [featured, setFeatured] = useState<any>(null);
  const [loadingFeatured, setLoadingFeatured] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await blogAxios.get(
          "?isFeatured=true&status=published",
        );
        if (data.data.length > 0) {
          setFeatured(data.data[0]);
        }
      } catch (err) {
        console.error("Error fetching featured blog:", err);
      } finally {
        setLoadingFeatured(false);
      }
    };

    fetchFeatured();
  }, []);

  const categories = [
    { _id: "cat_visa", name: "Visa" },
    { _id: "cat_scholarships", name: "Scholarships" },
    { _id: "cat_ielts", name: "IELTS" },
    { _id: "cat_student_life", name: "Student Life" },
    { _id: "destination", name: "Destination" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={bg}
          alt="Study Abroad Guide"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <span className="mb-4 px-5 py-1.5 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            GTO BLOGS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Insights, <span className="text-[#337347]">Guides</span> & Stories
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Expert advice on universities, visas, scholarships, and everything
            in between.
          </p>

          <div className="mt-10 flex max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden shadow-xl">
            <Input
              placeholder="Search visa guides, scholarships..."
              className="bg-transparent border-none text-white placeholder:text-white/60 focus-visible:ring-0 px-6"
            />
            <Button className="bg-[#337347] hover:bg-[#295e39] text-white px-8">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex gap-3 bg-white shadow-md p-2 rounded-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === "all"
                  ? "bg-[#0f2f4f] text-white shadow"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat._id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat._id
                    ? "bg-[#0f2f4f] text-white shadow"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#0f172a]">
            Featured Article
          </h2>

          {loadingFeatured && (
            <div className="h-[400px] bg-gray-200 animate-pulse rounded-3xl" />
          )}

          {!loadingFeatured && featured && (
            <div className="group grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="relative h-[320px] md:h-full overflow-hidden">
                <img
                  src={featured.featuredImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-10 space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    {new Date(featured.publishedAt).toLocaleDateString()}
                  </span>
                  <span>•</span>
                  <span>{featured.readTime} min read</span>
                  <span>•</span>
                  <span>{featured.views} views</span>
                </div>

                <h3 className="text-4xl font-bold text-[#0f172a]">
                  {featured.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {featured.excerpt}
                </p>

                <Link to={`/blog/${featured.slug}`}>
                  <button className="mt-4 px-8 py-3 rounded-full bg-[#0f2f4f] text-white font-semibold shadow hover:scale-105 transition">
                    Read Full Guide →
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= PREMIUM NEWSLETTER ================= */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-[#0f2f4f] rounded-3xl p-16 text-center text-white shadow-2xl">
          <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full">
            Exclusive Updates
          </span>

          <h2 className="text-4xl font-bold mb-6">
            Stay Ahead of Every Deadline
          </h2>

          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            Weekly visa updates and scholarship alerts. No spam. Just clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white text-black rounded-full px-6 py-3"
            />

            <button className="px-8 py-3 rounded-full bg-white text-[#0f2f4f] font-semibold hover:scale-105 transition shadow-md">
              Join →
            </button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            4,200+ students already subscribed
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
