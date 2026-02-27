import mongoose from "mongoose";
import slugify from "slugify";

const CountrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    code: String,
    flagImage: String,
    seoTitle: String,
    seoDescription: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

CountrySchema.pre("save", function () {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true });
  }
});

export default mongoose.model("Country", CountrySchema);
