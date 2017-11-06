const express = require('express');
const axios = require('axios');
const credentials = require('../../creds.js');

const router = express.Router();

// =============================================================================
// AXIOS INSTANCE
// =============================================================================
const tmdbRequest = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: `Bearer ${credentials.tmdb.access_token}`,
    'Content-Type': `application/json;charset=utf-8`,
  },
});

const ytRequest = axios.create({
  baseURL: 'https://www.googleapis.com'
})

// =============================================================================
// ROUTES
// =============================================================================

router.get('/movies', async ({query: {page}}, res, next) => {
  try {
    const {data} = await tmdbRequest.get(`/4/list/${credentials.tmdb.lists.movies}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/shows', async ({query: {page}}, res, next) => {
  try {
    const {data} = await tmdbRequest.get(`/4/list/${credentials.tmdb.lists.shows}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/list/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await tmdbRequest.get(`/4/list/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/movie/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await tmdbRequest.get(`/3/movie/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/show/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await tmdbRequest.get(`/3/tv/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/videos', async ({query: {pageToken}}, res, next) => {
  try {
    const {data} = await ytRequest.get(`/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${credentials.yt.lists.videos}&key=${credentials.yt.key}&pageToken=${pageToken || ''}`);


    res.send({
        results: data.items,
        prev_page: data.prevPageToken,
        next_page: data.nextPageToken,
        total_pages: parseInt(Math.ceil(data.pageInfo.totalResults / data.pageInfo.resultsPerPage), 10),
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
