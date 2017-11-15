const axios = require('axios')
const credentials = require('../creds.js')

const tmdbRequest = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer ${credentials.tmdb.access_token}`,
    'Content-Type': `application/json;charset=utf-8`
  }
})

const ytRequest = axios.create({
  baseURL: 'https://www.googleapis.com'
})

module.exports = {
  Query: {
    movies: async (root, { page = 1 }) => {
      try {
        const { data } = await axios.get(
          `https://diversidadmedia.com/api/movies?page=${page}`
        )
        return data.results
      } catch (err) {
        return err
      }
    },
    shows: async (root, { page = 1 }) => {
      try {
        const { data } = await axios.get(
          `https://diversidadmedia.com/api/shows?page=${page}`
        )
        return data.results
      } catch (err) {
        return err
      }
    }
  }
}
