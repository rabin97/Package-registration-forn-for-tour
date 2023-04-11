const mongoose = require("mongoose");

const place = new mongoose.Schema({
 placenames: {
    type: String,
  },
 
});

module.exports = mongoose.model("place", place);