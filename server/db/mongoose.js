const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/ShelfLife",{useNewUrlParser: true});

module.exports = mongoose;