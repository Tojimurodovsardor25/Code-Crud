const { Schema, model } = require("mongoose");

const FooterinfoSchema = new Schema({
    siteTitle: {
        type: String,
        required: true
    },
    manbaa1: {
        type: String,
    },
    link1: {
        type: String,
    },
    manbaa2: {
        type: String,
    },
    link2: {
        type: String,
    },
    manbaa3: {
        type: String,
    },
    link3: {
        type: String,
    },
});

module.exports = model("footerinfo", FooterinfoSchema);