const express = require('express');
const axios = require('axios');
const credentials = require('../../creds.js');

const router = express.Router();

// =============================================================================
// AXIOS INSTANCE
// =============================================================================
const request = axios.create({
  baseURL: 'https://api.themoviedb.org'
});

request.defaults.headers.common['Authorization'] = `Bearer ${credentials.tmdb.access_token}`;
request.defaults.headers.common['Content-Type'] = `application/json;charset=utf-8`;

// =============================================================================
// ROUTES
// =============================================================================

router.use('/music', require('./music'));

router.get('/movies', async ({ query: { page } }, res, next) => {
  try {
    const { data } = await request.get(`/4/list/${credentials.tmdb.lists.movies}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/shows', async ({ query: { page } }, res, next) => {
  try {
    const { data } = await request.get(`/4/list/${credentials.tmdb.lists.shows}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/list/:id', async ({ params: { id } }, res, next) => {
  try {
    const { data } = await request.get(`/4/list/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/movie/:id', async ({ params: { id } }, res, next) => {
  try {
    const { data } = await request.get(`/3/movie/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get('/show/:id', async ({ params: { id } }, res, next) => {
  try {
    const { data } = await request.get(`/3/tv/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
