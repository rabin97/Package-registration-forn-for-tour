const express = require("express");

const router = express.Router();
const package = require("../schema");
const place = require("../place");
const hotel = require("../hotel");
const restarunt = require("../restaurent");

router.get("/", (req, res) => {
  res.send("hello from router ");
});

router.post("/register", (req, res) => {
  const {  username, duration, peoples, placenames, hotelname, restaurentname } =    req.body;


console.log(username)

  // if (!username || !duration || !peoples || !placenames ||  !hotelname || !restaurentname) {
  //   return res.status(400).json({ err: "fill properly" });
  // }

  const places = new place({
    placenames: placenames,
  });

  places.save().then((savePlace) => {
    const Hotel = new hotel({
      hotelname: hotelname ,
      place: savePlace._id,
    });

    Hotel.save().then((saveHotel) => {
      const Restaurent = new restarunt({
        restaurentname:restaurentname ,
        hotel: saveHotel._id,
        place: savePlace._id,
      });

      Restaurent.save().then((saveRestaurent) => {
        const user = new package({
            username:  username,
          duration: duration ,
          peoples: peoples,
          referencePlace: savePlace._id,
          referencehotel: saveHotel._id,
          referenceRestaurant: saveRestaurent._id,
        });

        user.save().then(saveUser=>{
            console.log("user save")
        })
      });
    });
  });
  res.json(" success")
});

module.exports = router;
