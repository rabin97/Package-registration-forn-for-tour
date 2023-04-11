const mongoose = require("mongoose");
// const place = require("./place");
// const hotel = require("./hotel");
// const restarunt = require("./restaurent");



const Package = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  peoples: {
    type: Number,
    require: true,
  },
  referencePlace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "place",
  },
  referencehotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
  },
  referenceRestaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurent",
  },
});

module.exports= mongoose.model("user", Package);



// const places = new place({
//   placenames: "rabin",
 
// });

// places.save().then((savePlace) => {
//   const Hotel = new hotel({
//     hotelname: "taj",
//     place: savePlace._id,
//   });

//   Hotel.save().then((saveHotel) => {
//     const Restaurent = new restarunt({
//       restaurentname: "5STAR",
//       hotel: saveHotel._id,
//       place: savePlace._id,
//     });

//     Restaurent.save().then((saveRestaurent) => {
//       const users = new User({
//         name: "rabin",
//         duration: "1week",
//         peoples: 6,
//         referencePlace: savePlace._id,
//         referencehotel: saveHotel._id,
//         referenceRestaurant: saveRestaurent._id,
//       });
//     });
//   });
// });
