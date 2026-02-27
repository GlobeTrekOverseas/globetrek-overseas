import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema(
  {
    // -------------------------
    // Core Content
    // -------------------------

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },

    excerpt: {
      type: String,
      required: true,
      maxlength: 300,
    },

    content: {
      type: String,
      required: true,
    },

    featuredImage: {
      url: String,
      public_id: String,
    },

    author: {
      type: String,
      default: "Globetrek Team",
    },

    // -------------------------
    // Relations
    // -------------------------

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },

    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      index: true,
    },

    tags: [String],

    // -------------------------
    // Publishing Control
    // -------------------------

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    publishedAt: Date,

    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },

    // -------------------------
    // SEO
    // -------------------------

    seoTitle: String,

    seoDescription: {
      type: String,
      maxlength: 160,
    },

    canonicalUrl: String,

    focusKeyword: String,
    secondaryKeywords: [String],

    // -------------------------
    // UX Enhancements
    // -------------------------

    readTime: Number,

    tableOfContents: [
      {
        heading: String,
        anchor: String,
      },
    ],

    faqs: [
      {
        question: String,
        answer: String,
      },
    ],

    // -------------------------
    // Conversion / Business
    // -------------------------

    ctaType: {
      type: String,
      enum: ["consultation", "apply", "download-guide", "none"],
      default: "consultation",
    },

    relatedServiceSlug: String,

    // -------------------------
    // Analytics
    // -------------------------

    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    shares: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

BlogSchema.pre("save", function () {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if (this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }
});

// Index for sorting
BlogSchema.index({ createdAt: -1 });
BlogSchema.index({
  status: 1,
  country: 1,
  category: 1,
  isDeleted: 1,
  createdAt: -1,
});

export default mongoose.model("Blog", BlogSchema);
