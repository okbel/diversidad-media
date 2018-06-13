const mongoose = require("../services/mongoose");
const { Book } = require("./schema");

module.exports = mongoose.model("Book", Book);
