const express = require('express');
const google = require('googleapis');
const bodyParser = require('body-parser');
const axios = require('axios');

const credentials = require('./creds.js');

const app = express();

// special case public URLs that are equivalent
// as visting the root (similar to `200.html` on github)
app.get('/peliculas/:id', (req, res, next) => {
  req.url = '/';
  next();
});

app.use(express.static('build'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets'],
  null
);

google.options({auth});

const sheets = google.sheets('v4');
const spreadsheetId = '18Q3kTrNtTYUyscylEly5mMms_n9g_sj0IPdAnn-9EME';

const getMoviesIds = (req, res) => {
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'diversidadmedia!B7:B'
    }, (err, response) => {
      resolve(response.values[0]);
    });
  });
}

const request = axios.create({
  baseURL: 'https://api.themoviedb.org'
});

request.defaults.headers.common['Authorization'] = `Bearer ${credentials.tmdb.access_token}`;
request.defaults.headers.common['Content-Type'] = `application/json;charset=utf-8`;

app.get('/update', async (req, res, next) => {
  try {
    const ids = await getMoviesIds();

    ids.map(async (id) => {
      try {
        await request.post(`/3/list/${credentials.tmdb.list}/add_item?api_key=${credentials.tmdb.api_key}`, {
          media_id: id
        }); 
      } catch (err) {
        return next(err);
      }
    })

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

app.get('/movies', async ({query: {page}}, res, next) => {
  try {
    const {data} = await request.get(`/4/list/${credentials.tmdb.list}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/list/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await request.get(`/4/list/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/movie/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await request.get(`/3/movie/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
