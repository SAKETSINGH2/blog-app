import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "blogs",
        resource_type: "image",
        format: async (req, file) => "png",
        public_id: (req, file) => file.originalname.split(".")[0],
    },
});

export const upload = multer({ storage });
