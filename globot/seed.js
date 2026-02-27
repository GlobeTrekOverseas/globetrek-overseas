import mongoose from "mongoose";
import dotenv from "dotenv";
import slugify from "slugify";

import Category from "./modules/categories/category.model.js";
import Country from "./modules/countries/country.model.js";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

const categories = [
  { name: "IELTS" },
  { name: "Visa" },
  { name: "Scholarships" },
  { name: "Student Life" },
].map((cat) => ({
  ...cat,
  slug: slugify(cat.name, { lower: true, strict: true }),
  isActive: true,
}));
const countries = [
  { name: "Canada", code: "CA" },
  { name: "United Kingdom", code: "UK" },
  { name: "Australia", code: "AU" },
  { name: "United States", code: "US" },
  { name: "Germany", code: "DE" },
  { name: "Ireland", code: "IE" },
].map((country) => ({
  ...country,
  slug: slugify(country.name, { lower: true, strict: true }),
}));

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected");

    await Category.deleteMany();
    //await Country.deleteMany();

    await Category.insertMany(categories);
    //  await Country.insertMany(countries);

    console.log("Seeding completed successfully 🚀");

    process.exit();
  } catch (error) {
    console.error("SEED ERROR:", error);
    process.exit(1);
  }
};

seedData();
