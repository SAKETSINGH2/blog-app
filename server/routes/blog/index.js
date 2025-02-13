import express from "express";
import { addBlog, getAllBlogs, getBlog } from "../../repository/index.js";
import { upload } from "../../config/cloudinary.js";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { title, content, autherName } = req.body;

        if (!title || !content || !autherName || !req.file) {
            return res.status(400).json({
                message: "All fields are required, with image",
            });
        }

        const imageUrl = req.file.path;

        const responseDetails = await addBlog({
            title,
            content,
            autherName,
            image: imageUrl,
        });

        if (!responseDetails) {
            return res.status(400).json({ message: "Failed to add blog" });
        }

        res.status(200).json({
            message: "Blog added successfully",
            blog: responseDetails,
        });
    } catch (error) {
        console.error("Error adding blog", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.status(200).json({ blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/:blogId", async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await getBlog(blogId);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ blog });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
