const mongoose = require("mongoose");


const hotel = require("./hotel");
const Restaurent = new mongoose.Schema({
  restaurentname: {
    type: String,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "place",
  },
});

module.exports = mongoose.model("restaurent", Restaurent);
