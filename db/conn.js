
const mongoose  = require("mongoose")

mongoose
  .connect("mongodb://localhost/shoping14", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });