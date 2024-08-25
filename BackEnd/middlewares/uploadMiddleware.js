const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage(); // Use memory storage to avoid saving files locally

const upload = multer({ storage: storage });

module.exports = upload;
