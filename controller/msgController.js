const msg = require("../models/msgModel");

async function getAllMessages(req, res) {
    try {
        let result = await msg.find({});

        res.json({
            message: "success",
            payload: result,
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `getAllMessages error: ${error}`,
        });
    }
}

async function createMessage(req, res) {
    try {
        let newMessage = {
            urlLink: req.body.urlLink,
            dateUploaded: req.body.dateUploaded,
            dateTaken: req.body.dateTaken,
        };

        await msg.create(newMessage);

        res.json({
            message: "success",
            payload: newMessage,
        });
    } catch (error) {
        res.json({
            message: "failure",
            payload: `createMessage error: ${error}`,
        });
    }
}

async function deleteMessage(req, res) {
    try {
        let targetMessage = req.params.id;

        let deletedMessage = await msg.deleteOne({ _id: targetMessage });

        res.json({ message: "success", payload: deletedMessage });
    } catch (error) {
        console.log(`Error in deleteMessage(): ` + error);
    }
}

module.exports = {
    getAllMessages,
    createMessage,
    deleteMessage,
};