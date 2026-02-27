import Blog from "../blogs/blogs.model.js";
import Country from "../countries/country.model.js";

export const generateSitemap = async (req, res) => {
  try {
    const baseUrl = "https://www.globetrekoverseas.com";

    // 1️⃣ Static Pages
    const staticPages = `
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
    `;

    // 2️⃣ Blog Pages
    const blogs = await Blog.find({
      status: "published",
      isDeleted: false,
    }).select("slug updatedAt");

    const blogUrls = blogs
      .map(
        (blog) => `
  <url>
    <loc>${baseUrl}/blogs/${blog.slug}</loc>
    <lastmod>${blog.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
      )
      .join("");

    // 3️⃣ Country Landing Pages
    const countries = await Country.find({ isActive: true }).select("slug");

    const countryUrls = countries
      .map(
        (country) => `
  <url>
    <loc>${baseUrl}/study-in-${country.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
      )
      .join("");

    // Final XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages}
  ${countryUrls}
  ${blogUrls}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.status(200).send(xml);
  } catch (error) {
    console.error("SITEMAP ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate sitemap",
    });
  }
};
