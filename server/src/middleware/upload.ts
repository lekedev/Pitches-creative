import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

export const upload = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "insights",
      public_id: (req, file) =>
        `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`,
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only jpg, png, and webp images are allowed"));
  },
});
