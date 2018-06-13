const axios = require("axios");
const credentials = require("../creds");
const cache = require("./cache");

/**
 * client is the axios reference.
 */
module.exports = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    Authorization: `Bearer ${credentials.tmdb.access_token}`,
    "Content-Type": `application/json;charset=utf-8`
  },
  params: {
    api_key: credentials.tmdb.api_key
  },
  secrets: ["api_key"],
  adapter: cache.axios
});
