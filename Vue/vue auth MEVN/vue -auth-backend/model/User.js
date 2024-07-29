const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  number: {
    type: String,
    required: true,
    min: 6,
    max: 16,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  admin: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  picture: {
    type: String,
    // required: true,
    default: "",
  },
  others: {
    type: Object,
    // required: true,
    default: { notes: "" },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema, "User");
