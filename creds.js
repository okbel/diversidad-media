module.exports = {
  "google": {
    "client_email": process.env.GOOGLE_CLIENT_EMAIL,
    "private_key": process.env.GOOGLE_PRIVATE_KEY,
    "books": {
      "user_id": process.env.GOOGLE_BOOKS_USER_ID,
      "shelf": process.env.GOOGLE_BOOKS_SHELF,
    },
  },
  "tmdb": {
    "api_key": process.env.TMDB_API_KEY,
    "access_token": process.env.TMDB_ACCESS_TOKEN,
    "lists": {
      "movies": process.env.TMDB_MOVIES_LIST,
      "shows": process.env.TMDB_SHOWS_LIST,
    },
  },
  "gr": {
    "api_key": process.env.GR_API_KEY
  },
};
