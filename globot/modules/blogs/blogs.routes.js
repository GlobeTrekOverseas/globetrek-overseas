import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  uploadBlogImage,
} from "./blogs.controller.js";
import upload from "../../middleware/upload.middleware.js";

const router = express.Router();
router.post("/upload-image", upload.single("image"), uploadBlogImage);
router.post("/", createBlog);
router.get("/", getAllBlogs);
router.get("/slug/:slug", getBlogBySlug);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
