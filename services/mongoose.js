const { MONGO_URL } = require("../config");
const mongoose = require("mongoose");
const debug = require("debug")("diversidad-media:services:mongoose");

// Provide a newly wrapped debugQuery function which wraps the `debug` package.
function debugQuery(name, operation, ...args) {
  debug(
    {
      query: `db.${name}.${operation}(${args
        .map(arg => JSON.stringify(arg))
        .join(", ")})`
    },
    "mongodb query"
  );
}

// Use native promises
mongoose.Promise = global.Promise;

// Let's debug queries
mongoose.set("debug", debugQuery);

mongoose.connection.on("connected", () => debug("mongodb connected"));
mongoose.connection.on("disconnected", () => debug("mongodb disconnected"));

// Connect to the Mongo instance.
mongoose.connect(MONGO_URL).catch(err => {
  console.error(err);
  process.exit(1);
});

module.exports = mongoose;
