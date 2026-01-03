const express = require("express");
const router = express.Router();

const {
    getAllMessages,
    createMessage,
    deleteMessage,
} = require("../controller/msgController")

// api/allMessages
router.get("/allMessages", getAllMessages);

// api/createMessage
router.post("/createMessage", createMessage);

// api/deleteMessage
router.delete("/deleteMessage/:id", deleteMessage);

module.exports = router;