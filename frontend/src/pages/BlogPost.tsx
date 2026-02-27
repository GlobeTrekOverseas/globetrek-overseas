import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogAxios } from "@/lib/bot";

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await blogAxios.get(`/slug/${slug}`);
        setBlog(data.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
        setTimeout(() => setHeroVisible(true), 100);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c0e]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
          .loader-ring { animation: spin 1.2s cubic-bezier(0.5,0,0.5,1) infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
        <div className="loader-ring w-10 h-10 border-2 border-[#c8a97e]/20 border-t-[#c8a97e] rounded-full mb-5" />
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[#c8a97e]/60 text-sm tracking-[0.2em] uppercase"
        >
          Loading Article
        </p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c0e]">
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[#c8a97e] text-2xl"
        >
          Article not found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        * { box-sizing: border-box; }

        .progress-bar {
          background: linear-gradient(90deg, #c8a97e, #e8c99e, #c8a97e);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer { to { background-position: -200% 0; } }

        .hero-image {
          transform: scale(1.08);
          transition: transform 8s ease-out;
        }
        .hero-image.loaded { transform: scale(1); }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .hero-content.visible { opacity: 1; transform: translateY(0); }

        .hero-content .category-tag {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .hero-content.visible .category-tag { opacity: 1; transform: translateY(0); }

        .hero-content .title-text {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }
        .hero-content.visible .title-text { opacity: 1; transform: translateY(0); }

        .hero-content .meta-row {
          opacity: 0;
          transition: opacity 0.8s ease 0.7s;
        }
        .hero-content.visible .meta-row { opacity: 1; }

        .divider-line {
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c8a97e, transparent);
          transition: width 1.2s ease 0.3s;
        }
        .divider-line.visible { width: 100%; }

        .blog-premium-content {
          font-family: 'DM Sans', sans-serif;
          color: #2d2d2d;
          font-size: 1.05rem;
          line-height: 1.9;
          font-weight: 300;
        }
        .blog-premium-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 3.5rem 0 1.2rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }
        .blog-premium-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-weight: 600;
          font-style: italic;
          color: #2d2d2d;
          margin: 2.5rem 0 1rem;
        }
        .blog-premium-content p {
          margin-bottom: 1.6rem;
        }
        .blog-premium-content p:first-of-type::first-letter {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.75;
          margin: 0.1rem 0.15rem -0.1rem 0;
          color: #c8a97e;
        }
        .blog-premium-content a {
          color: #a07850;
          text-decoration: underline;
          text-decoration-color: #c8a97e60;
          text-underline-offset: 3px;
          transition: text-decoration-color 0.2s;
        }
        .blog-premium-content a:hover { text-decoration-color: #c8a97e; }
        .blog-premium-content strong { font-weight: 500; color: #1a1a1a; }
        .blog-premium-content blockquote {
          border-left: 2px solid #c8a97e;
          margin: 2.5rem 0;
          padding: 0.5rem 0 0.5rem 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-style: italic;
          color: #5a4a35;
          line-height: 1.5;
        }
        .blog-premium-content ul, .blog-premium-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.6rem;
        }
        .blog-premium-content li {
          margin-bottom: 0.5rem;
        }
        .blog-premium-content ul li::marker { color: #c8a97e; }

        .sidebar-card {
          background: #fff;
          border: 1px solid #e8e0d5;
          border-radius: 2px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .sidebar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c8a97e, transparent);
        }
        .sidebar-card:hover { box-shadow: 0 8px 32px rgba(200,169,126,0.12); }

        .cta-card {
          background: #1a1208;
          border-radius: 2px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, #c8a97e18, transparent 60%),
                      radial-gradient(ellipse at bottom right, #e8c99e10, transparent 60%);
        }
        .cta-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border: 1px solid #c8a97e25;
          border-radius: 2px;
          pointer-events: none;
        }
        .cta-btn {
          width: 100%;
          background: linear-gradient(135deg, #c8a97e, #e8c99e, #c8a97e);
          background-size: 200% 100%;
          color: #1a1208;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.875rem 1.5rem;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .cta-btn:hover {
          background-position: 100% 0;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(200,169,126,0.4);
        }

        .ornament {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: #c8a97e;
          letter-spacing: 0.3em;
        }

        .whatsapp-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 52px;
          height: 52px;
          background: #1a1208;
          border: 1px solid #c8a97e40;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          z-index: 50;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .whatsapp-btn:hover {
          background: #c8a97e;
          border-color: #c8a97e;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(200,169,126,0.4);
        }

        .related-section { background: #f5f2ee; }

        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c8a97e;
        }
      `}</style>

      {/* Reading Progress */}
      <div
        className="progress-bar fixed top-0 left-0 h-[2px] z-50 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[300px] w-full overflow-hidden bg-[#0c0c0e]"
      >
        {blog.featuredImage && (
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className={`hero-image absolute inset-0 w-full h-full object-cover ${heroVisible ? "loaded" : ""}`}
            style={{ opacity: 0.45 }}
          />
        )}

        {/* Layered overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,12,14,0.3) 0%, rgba(12,12,14,0.2) 40%, rgba(12,12,14,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(12,12,14,0.6) 100%)",
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* Hero Content */}
        <div
          className={`hero-content relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-20 ${heroVisible ? "visible" : ""}`}
        >
          {blog.category?.name && (
            <div className="category-tag mb-6 flex items-center gap-3">
              <div
                style={{ width: "2rem", height: "1px", background: "#c8a97e" }}
              />
              <span className="section-eyebrow">{blog.category.name}</span>
              <div
                style={{ width: "2rem", height: "1px", background: "#c8a97e" }}
              />
            </div>
          )}

          <h1
            className="title-text text-white max-w-3xl leading-[1.1] tracking-tight mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 600,
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            {blog.title}
          </h1>

          <div
            className="meta-row flex items-center gap-4 text-white/50"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
            }}
          >
            <span>
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              className="ornament"
              style={{ fontSize: "0.5rem", letterSpacing: 0 }}
            >
              ✦
            </span>
            <span>{blog.readTime} min read</span>
            <span
              className="ornament"
              style={{ fontSize: "0.5rem", letterSpacing: 0 }}
            >
              ✦
            </span>
            <span>{blog.views} views</span>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="bg-[#faf9f7] py-10 flex flex-col items-center gap-3">
        <div className={`divider-line visible`} />
        <span className="ornament text-base">✦</span>
        <div
          className={`divider-line visible`}
          style={{ transitionDelay: "0.5s" }}
        />
      </div>

      {/* CONTENT */}
      <section className="bg-[#faf9f7] pb-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-20">
          {/* MAIN CONTENT */}
          <article className="blog-premium-content">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />

            {/* End ornament */}
            <div className="flex items-center gap-4 mt-16 mb-4">
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, #e8e0d5, transparent)",
                }}
              />
              <span className="ornament">✦ ✦ ✦</span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #e8e0d5)",
                }}
              />
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {/* Article Info */}
              <div className="sidebar-card">
                <p className="section-eyebrow mb-5">Article Details</p>

                <div
                  className="space-y-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {[
                    {
                      label: "Published",
                      value: new Date(blog.publishedAt).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" },
                      ),
                    },
                    { label: "Read Time", value: `${blog.readTime} minutes` },
                    { label: "Views", value: blog.views.toLocaleString() },
                    ...(blog.category?.name
                      ? [{ label: "Category", value: blog.category.name }]
                      : []),
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-baseline"
                      style={{
                        borderBottom: "1px solid #f0e8de",
                        paddingBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#9a8a7a",
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#2d2d2d",
                          fontWeight: 400,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="cta-card">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    className="section-eyebrow mb-4"
                    style={{ color: "#c8a97e80" }}
                  >
                    Free Consultation
                  </p>
                  <h4
                    className="text-white mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    Planning to Study Abroad?
                  </h4>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 300,
                    }}
                  >
                    Get a free expert consultation tailored to your academic
                    goals and budget.
                  </p>
                  <button className="cta-btn">Book Free Consultation</button>
                </div>
              </div>

              {/* Share */}
              <div className="sidebar-card">
                <p className="section-eyebrow mb-4">Share Article</p>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "Copy Link"].map((platform) => (
                    <button
                      key={platform}
                      style={{
                        flex: 1,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        padding: "0.6rem 0.5rem",
                        border: "1px solid #e8e0d5",
                        borderRadius: "1px",
                        background: "#faf9f7",
                        color: "#7a6a5a",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.background = "#1a1208";
                        (e.target as HTMLElement).style.color = "#c8a97e";
                        (e.target as HTMLElement).style.borderColor =
                          "#c8a97e40";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.background = "#faf9f7";
                        (e.target as HTMLElement).style.color = "#7a6a5a";
                        (e.target as HTMLElement).style.borderColor = "#e8e0d5";
                      }}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="related-section py-20 border-t border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-12">
            <p className="section-eyebrow">Continue Reading</p>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(90deg, #c8a97e40, transparent)",
              }}
            />
          </div>
          <h3
            className="mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 600,
              color: "#1a1208",
              letterSpacing: "-0.02em",
            }}
          >
            Related Articles
          </h3>
          {/* Related blog cards rendered here */}
        </div>
      </section>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/919311331899"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      <Footer />
    </div>
  );
}
