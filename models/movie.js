const mongoose = require('../services/mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const GenreSchema = new Schema({
  id: {
    type: String,
    default: uuid.v4,
    unique: true,
    index: true
  },
  oid: {
    type: String,
    unique: true,
  },
});

const MovieSchema = new Schema({
  id: {
    type: String,
    default: uuid.v4,
    unique: true,
    index: true
  },
  oid: {
    type: String,
    unique: true,
  },
  media_type: {
    type: String,
    default: 'movie'
  },
  title: String,
  description: String,
  original_title: String,
  original_language: String,
  backdrop_path: String,
  poster_path: String,
  vote_average: Number,
  genres: [GenreSchema]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
