const express = require("express");
const router = express.Router();

const {
    getAllImages,
    createImage,
    deleteImage,
} = require("../controller/imgController")

// api/allImages
router.get("/allImages", getAllImages);

// api/createImage
router.post("/createImage", createImage);

// api/deleteImage
router.delete("/deleteImage/:id", deleteImage);

module.exports = router;