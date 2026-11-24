import uploadCloudinary from "../utils/cloudinaryUpload.js";
import User from "../models/user.model.js";

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image"
            });
        }

        const result = await uploadCloudinary(req.file.buffer);

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,

            profilePicture: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });

        return res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: {
                public_id: result.public_id,
                asset_id: result.asset_id,
                url: result.secure_url,
                format: result.format,
                width: result.width,
                height: result.height
            }
        });

    } catch (error) {
        console.error("Image upload error:", error);

        return res.status(500).json({
            success: false,
            message: "Image upload failed"
        });
    }
};