const mongoose = require("../services/mongoose");
const { Movie } = require("./schema");

module.exports = mongoose.model("Movie", Movie);
