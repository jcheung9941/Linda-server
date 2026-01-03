const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  dateUploaded: {
    type: String,
    required: true,
  },
  name: {
    type: Number,
  },
  msgBody: {
    type: String,
    required: true,
  },
});

const msg = mongoose.model("messages", msgSchema);

module.exports = msg;