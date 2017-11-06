module.exports = {
  "mongo_url": process.env.DM_MONGO_URL,
  "client_email": process.env.CLIENT_EMAIL,
  "private_key": process.env.PRIVATE_KEY,
  "tmdb": {
    "api_key": process.env.TMDB_API_KEY,
    "access_token": process.env.TMDB_ACCESS_TOKEN,
    "lists": {
      "movies": process.env.TMDB_MOVIES_LIST,
      "shows": process.env.TMDB_SHOWS_LIST,
    }
  },
  "yt": {
    "key": process.env.YT_KEY,
    "lists": {
      "videos": process.env.YT_VIDEO_LIST,
    }
  }
}
