const img = require("../models/imgModel");

async function getAllImages(req, res) {
    try {
        let result = await img.find({});

        res.json({
            message: "success",
            payload: result,
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `getAllImages error: ${error}`,
        });
    }
}

async function createImage(req, res) {
    try {
        let newImage = {
            urlLink: req.body.urlLink,
            dateUploaded: req.body.dateUploaded,
            dateTaken: req.body.dateTaken,
        };

        await img.create(newImage);

        res.json({
            message: "success",
            payload: newImage,
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `createImage error: ${error}`,
        });
    }
}

async function deleteImage(req, res) {
    try {
        let targetImage = req.params.id;

        let deletedImage = await img.deleteOne({ _id: targetImage });

        res.json({ message: "success", payload: deletedImage });
    } catch (error) {
        console.log(`Error in deleteImage(): ` + error);
    }
}

module.exports = {
    getAllImages,
    createImage,
    deleteImage,
};