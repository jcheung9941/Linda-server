const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  urlLink: {
    type: String,
    unique: true,
    required: true,
  },
  dateUploaded: {
    type: String,
    required: true,
  },
  dateTaken: {
    type: Number,
  },
});

const img = mongoose.model("images", imgSchema);

module.exports = img;