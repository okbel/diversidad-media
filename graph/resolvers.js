const axios = require("axios");
const credentials = require("../creds");
const tmdb = require("../services/tmdb");
const yt = require("../services/yt");

module.exports = {
  Query: {
    movies: async (root, { page = 1 }) => {
      try {
        const { data } = await tmdb.get(
          `/4/list/${credentials.tmdb.lists.movies}`,
          {
            params: {
              page
            }
          }
        );
        return data.results;
      } catch (err) {
        return err;
      }
    },
    shows: async (root, { page = 1 }) => {
      try {
        const { data } = await tmdb.get(
          `/4/list/${credentials.tmdb.lists.shows}`,
          {
            params: {
              page
            }
          }
        );
        return data.results;
      } catch (err) {
        return err;
      }
    },

    videos: async (root, { pageToken = "" }) => {
      try {
        const { data } = await yt.get(
          "/youtube/v3/playlistItems?part=snippet&maxResults=10",
          { params: { pageToken, playlistId: credentials.yt.lists.videos } }
        );
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
        };
      } catch (err) {
        return err;
      }
    }
  }
};
