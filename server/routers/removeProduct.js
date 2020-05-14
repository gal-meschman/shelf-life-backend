const router = require("express").Router();
const { Product } = require("../models/product");

router.delete("/", (req, res) => {
  Product.findOneAndDelete(req.body).then(
    product => {
        console.log("delete",product);
        res.status(200).send(product);
    },
    e => {
      console.log("Unable to remove product", e);
      res.status(400).send(e);
    }
)
});

module.exports = router;