const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

module.exports = {Product};