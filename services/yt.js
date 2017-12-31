const axios = require("axios");
const credentials = require("../creds");
const cache = require("./cache");

/**
 * client is the axios reference.
 */
module.exports = axios.create({
  baseURL: "https://www.googleapis.com",
  params: {
    key: credentials.yt.key
  },
  secrets: ["key"],
  adapter: cache.axios
});
