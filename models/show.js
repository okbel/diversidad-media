const mongoose = require("../services/mongoose");
const { Show } = require("./schema");

module.exports = mongoose.model("Show", Show);
