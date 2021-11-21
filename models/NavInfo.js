const { Schema, model } = require("mongoose");

const NavInfoSchema = new Schema({
  navicon: {
    type: String,
    required: true,
  },
  navtitle: {
    type: String,
    required: true,
  },
});

module.exports = model("navinfo", NavInfoSchema);
