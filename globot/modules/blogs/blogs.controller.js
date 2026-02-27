import Blog from "./blogs.model.js";
import cloudinary from "../../config/cloudinary.js";
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create blog",
    });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      isFeatured,
      status,
      category,
      country,
    } = req.query;

    const query = { isDeleted: false };

    if (status) query.status = status;
    if (isFeatured) query.isFeatured = isFeatured === "true";
    if (category) query.category = category;
    if (country) query.country = country;

    const skip = (page - 1) * limit;

    const blogs = await Blog.find(query)
      .populate("category", "name slug")
      .populate("country", "name slug code")
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Blog.countDocuments(query);

    res.status(200).json({
      success: true,
      count: blogs.length,
      page: Number(page),
      pages: Math.ceil(total / limit),
      total,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({
      _id: id,
      isDeleted: false,
    })
      .populate("category", "name slug")
      .populate("country", "name slug");

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("GET BLOG BY ID ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    // Fetch main blog + increment views atomically
    const blog = await Blog.findOneAndUpdate(
      {
        slug,
        status: "published",
        isDeleted: false,
      },
      { $inc: { views: 1 } },
      { new: true },
    )
      .populate("category", "name slug")
      .populate("country", "name slug");

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Fetch related blogs
    const relatedBlogs = await Blog.find({
      _id: { $ne: blog._id },
      status: "published",
      isDeleted: false,
      $or: [{ country: blog.country?._id }, { category: blog.category?._id }],
    })
      .limit(3)
      .sort({ createdAt: -1 })
      .select("title slug excerpt featuredImage createdAt")
      .populate("category", "name slug")
      .populate("country", "name slug");

    return res.status(200).json({
      success: true,
      data: blog,
      related: relatedBlogs,
    });
  } catch (error) {
    console.error("GET BLOG BY SLUG ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update blog",
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};

export const uploadBlogImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "globetrek/blogs",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error("CLOUDINARY ERROR:", error);
          return res.status(500).json({
            success: false,
            message: "Image upload failed",
          });
        }

        return res.status(200).json({
          success: true,
          image: {
            url: result.secure_url,
            public_id: result.public_id,
            width: result.width,
            height: result.height,
          },
        });
      },
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("UPLOAD IMAGE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
