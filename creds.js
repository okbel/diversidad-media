module.exports = {
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
  "spotify": {
    "client_id": process.env.SPOTIFY_CLIENT_ID,
    "client_secret": process.env.SPOTIFY_CLIENT_SECRET,
    "user_id": process.env.SPOTIFY_USER_ID,
    "playlist_id": process.env.SPOTIFY_PLAYLIST_ID,
  }
}