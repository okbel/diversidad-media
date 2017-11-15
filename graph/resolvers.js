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
        const { data } = await tmdbRequest.get(
          `/4/list/${credentials.tmdb.lists.movies}?api_key=${credentials.tmdb
            .api_key}&page=${page}`
        )
        return data.results
      } catch (err) {
        return err
      }
    },
    shows: async (root, { page = 1 }) => {
      try {
        const { data } = await tmdbRequest.get(
          `/4/list/${credentials.tmdb.lists.shows}?api_key=${credentials.tmdb
            .api_key}&page=${page}`
        )
        return data.results
      } catch (err) {
        return err
      }
    },

    videos: async (root, { pageToken = '' }) => {
      try {
        const { data } = await ytRequest.get(
          `/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${credentials
            .yt.lists.videos}&key=${credentials.yt.key}&pageToken=${pageToken}`
        )
        return {
          results: data.items,
          prev_page: data.prevPageToken,
          next_page: data.nextPageToken,
          total_pages: parseInt(
            Math.ceil(
              data.pageInfo.totalResults / data.pageInfo.resultsPerPage
            ),
            10
          )
        }
      } catch (err) {
        return err
      }
    }
  }
}
