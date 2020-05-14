const router = require("express").Router();
const { Product } = require("../models/product");

router.get("/", (req, res) => {
    Product.find().then(
        products => {
            console.log("products",products);
            res.send(products);
        },
        e => {
            res.status(400).send(e);
        }
    )
})

module.exports = router;