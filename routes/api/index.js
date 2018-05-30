const express = require("express");
const axios = require("axios");
const credentials = require("../../creds");
const tmdb = require("../../services/tmdb");
const yt = require("../../services/yt");

const router = express.Router();

// =============================================================================
// ROUTES
// =============================================================================

router.use("/music", require("./music"));

router.get("/movies", async ({ query: { page = 1 } }, res, next) => {
  try {
    const { data } = await tmdb.get(
      `/4/list/${credentials.tmdb.lists.movies}`,
      {
        params: {
          page
        }
      }
    );
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/shows", async ({ query: { page = 1 } }, res, next) => {
  try {
    const { data } = await tmdb.get(`/4/list/${credentials.tmdb.lists.shows}`, {
      params: {
        page
      }
    });
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/list/:id", async ({ params: { id } }, res, next) => {
  try {
    const { data } = await tmdb.get(`/4/list/${id}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async ({ params: { id } }, res, next) => {
  try {
    const { data } = await tmdb.get(`/3/movie/${id}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/show/:id", async ({ params: { id } }, res, next) => {
  try {
    const { data } = await tmdb.get(`/3/tv/${id}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/videos", async ({ query: { pageToken = "" } }, res, next) => {
  try {
    const { data } = await yt.get(
      "/youtube/v3/playlistItems?part=snippet&maxResults=10",
      {
        params: {
          pageToken,
          playlistId: credentials.yt.lists.videos
        }
      }
    );
    res.send({
      results: data.items,
      prev_page: data.prevPageToken,
      next_page: data.nextPageToken,
      total_pages: parseInt(
        Math.ceil(data.pageInfo.totalResults / data.pageInfo.resultsPerPage),
        10
      )
    });
  } catch (err) {
    next(err);
  }
});

router.get("/video/:id", async ({ params: { id } }, res, next) => {
  try {
    const { data } = await yt.get(`/youtube/v3/videos?part=snippet`, {
      params: { id }
    });
    res.send(data.items[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
