// Ensure environment variables are read.
require("./config/env");

module.exports = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost/dm"
};
