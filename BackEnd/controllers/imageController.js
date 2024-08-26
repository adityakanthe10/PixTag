const cloudinary = require("../config/cloudinary"); // Ensure Cloudinary is configured correctly
const Image = require("../models/imageModel"); // Import your Image model if you need to save the image details to the database

// /Upload the image into the database

console.log();
const uploadImage = async (req, res) => {
  try {
    // Check if a file is present in the request
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log(file);
    // Upload image to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" }, // Automatically detect the resource type
      async (error, result) => {
        if (error) {
          console.error("Upload failed:", error);
          return res.status(500).json({ message: "Upload failed", error });
        }

        // Extract tags from the request body
        const { tags } = req.body;

        // Save URL and tags in database (optional)
        const image = new Image({
          url: result.secure_url,
          tags: tags ? tags.split(",") : [], // Convert tags to an array if provided
        });

        await image.save(); // Save the image details to the database

        // Respond with success message and image URL
        res.status(200).json({
          message: "Image uploaded successfully!",
          url: result.secure_url,
        });
      }
    );

    // Pass the file buffer to Cloudinary
    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Search via tags
const searchImages = async (req, res) => {
  try {
    const tag = req.query.tag;

    if (!tag) {
      return res.status(400).json({ message: "Tag is required" });
    }

    // Find images with the specified tag
    const images = await Image.find({ tags: tag });

    // Send the results back to the frontend
    res.status(200).json(images);
  } catch (error) {
    console.error("Error searching images:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
module.exports = { uploadImage, searchImages };
