import mongoose from "mongoose";
import slugify from "slugify";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    description: String,
    seoTitle: String,
    seoDescription: String,
  },
  { timestamps: true },
);

CategorySchema.pre("save", function () {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true });
  }
});

export default mongoose.model("Category", CategorySchema);
