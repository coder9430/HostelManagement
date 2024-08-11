const noticeSchema = require("../models/notice");

const getNotice = async (req, res) => {
    try {
        const noticeData = await noticeSchema.find();
        res.send(noticeData);
    } catch (e) {
        res.status(500).send(e); 
    }
};

module.exports = {
    getNotice
};
