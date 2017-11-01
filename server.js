const express = require('express');
const google = require('googleapis');
const bodyParser = require('body-parser');
const axios = require('axios');

const credentials = require('./creds.js');

const app = express();

app.use(express.static('build'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const auth = new google.auth.JWT(
  credentials.google.client_email,
  null,
  credentials.google.private_key,
  ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/books'],
  null
);

google.options({auth});

const books = google.books('v1');

const getBooks = () => {
  return new Promise((resolve, reject) => {
    books.bookshelves.volumes.list({
      userId: credentials.google.books.user_id,
      shelf: credentials.google.books.shelf,
    }, (err, response) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(response);
    });
  });
};

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



const TMDBrequest = axios.create({
  baseURL: 'https://api.themoviedb.org'
});

TMDBrequest.defaults.headers.common['Authorization'] = `Bearer ${credentials.tmdb.access_token}`;
TMDBrequest.defaults.headers.common['Content-Type'] = `application/json;charset=utf-8`;

const GRrequest = axios.create({
  baseURL: ': https://www.goodreads.com/'
});

GRrequest.defaults.headers.common['Content-Type'] = `application/json;charset=utf-8`;

app.get('/update', async (req, res, next) => {
  try {
    const ids = await getMoviesIds();

    ids.map(async (id) => {
      try {
        await TMDBrequest.post(`/3/list/${credentials.tmdb.list}/add_item?api_key=${credentials.tmdb.api_key}`, {
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
});

app.get('/books', async ({query: {page}}, res, next) => {
  try {
    const {items, totalItems} = await getBooks();

    res.json({
      results: items,
      total_pages: 1,
    });
  } catch (err) {
    next(err);
  }
});

app.get('/movies', async ({query: {page}}, res, next) => {
  try {
    const {data} = await TMDBrequest.get(`/4/list/${credentials.tmdb.lists.movies}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/shows', async ({query: {page}}, res, next) => {
  try {
    const {data} = await TMDBrequest.get(`/4/list/${credentials.tmdb.lists.shows}?api_key=${credentials.tmdb.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/books', async ({query: {page}}, res, next) => {
  try {
    const {data} = await GRrequest.get(`/books/${credentials.tmdb.lists.shows}?key=${credentials.gr.api_key}&page=${page}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/list/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await TMDBrequest.get(`/4/list/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/movie/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await TMDBrequest.get(`/3/movie/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.get('/show/:id', async ({params: {id}}, res, next) => {
  try {
    const {data} = await TMDBrequest.get(`/3/tv/${id}?api_key=${credentials.tmdb.api_key}`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);