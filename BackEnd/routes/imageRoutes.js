const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const imageController = require("../controllers/imageController");

// Existing Upload route

router.post("/upload", upload.single("image"), imageController.uploadImage);

// New Search Route

router.get("/images", imageController.searchImages);

module.exports = router;
