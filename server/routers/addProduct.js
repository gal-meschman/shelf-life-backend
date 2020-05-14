const router = require("express").Router();
const { Product } = require("../models/product");

router.post("/", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save().then(
    (product) => {
      console.log("Saved product", product);
      res.send(product)
    },
    (e) => {
      console.log("Unable to save product", e);
      res.status(400).send(e);
    }
  );
});

module.exports = router;