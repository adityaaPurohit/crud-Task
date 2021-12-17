const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  Image: {
    type: String,
  },
});
const taskModal = mongoose.model("Alien", alienSchema);
module.exports = { taskModal };
