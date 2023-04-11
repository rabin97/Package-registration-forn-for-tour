const mongoose = require("mongoose");

const Hotel = new mongoose.Schema({
  hotelname: {
    type: String,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "place",
  },
});

module.exports = mongoose.model("hotel", Hotel);
