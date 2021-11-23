const { Schema, model } = require("mongoose");

const NavInfoSchema = new Schema({
  navicon: {
    type: String,
  },
  navtitle: {
    type: String,
    required: true,
  },
});

module.exports = model("navinfo", NavInfoSchema);
