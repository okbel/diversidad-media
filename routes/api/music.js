const express = require('express');
const axios = require('axios');
const btoa = require('btoa');
const credentials = require('../../creds.js');

const router = express.Router();

// =============================================================================
// SPOTIFY AUTH Client Credentials Flow
// =============================================================================

let authToken = {}

const getAccessToken = async () => {
  if (Object.keys(authToken).length === 0 || authToken.exp <= Math.floor(Date.now() / 1000)) {
    await renewAuthToken();
  }

  return authToken.access_token;
}

const renewAuthToken = async () => {
  try {
    const authorization = `${credentials.spotify.client_id}:${credentials.spotify.client_secret}`;

    const { data } = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      params: { grant_type: 'client_credentials' },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(authorization)}`
      }
    });

    authToken = {
      access_token: data.access_token,
      exp: Math.floor(Date.now() / 1000) + data.expires_in
    };

  } catch (err) {
    next(err);
  }
}

// =============================================================================
// AXIOS INSTANCE
// =============================================================================

const instance = axios.create({
  baseURL: 'https://api.spotify.com'
})

// Add a request interceptor with a valid Access Token.
instance.interceptors.request.use(async (config) => {
  try {
    const accessToken = await getAccessToken();
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  } catch (err) {
    next(err);
  }
})

// =============================================================================
// ROUTES
// =============================================================================

router.get('/', async ({ query: { page } }, res, next) => {
  try {
    const offset = (page == null)? '&offset=0' : `&offset=${(page - 1) * 20}`
    const { data: { items: results, limit, total } } = await instance.get(`/v1/users/${credentials.spotify.user_id}/playlists/${credentials.spotify.playlist_id}/tracks?fields=limit,total,items.track(id,album(images,id,name),artists(id,name),name,popularity)&limit=20` + offset);
    const total_pages = Math.ceil(total / limit);

    results.map(result => {
      result.id = result.track.id;
      return result;
    });

    res.send({ results, total_pages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;