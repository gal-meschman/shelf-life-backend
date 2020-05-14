const router = require("express").Router();

router.use("/addProduct", require("./addProduct"));
router.use("/getAllProducts", require("./getAllProducts"));
router.use("/removeProduct", require("./removeProduct"));

module.exports = router;
