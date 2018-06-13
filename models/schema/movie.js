const mongoose = require("../../services/mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");
const GENRES = require("../enum/genres");

const Movie = new Schema(
  {
    id: {
      type: String,
      default: uuid.v4,
      unique: true,
      required: true,
      index: true
    },
    title: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    vote_average: {
      type: String,
      required: true
    },
    vote_count: {
      type: String,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    backdrop_path: {
      type: String,
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_title: {
      type: String,
      required: true
    },
    genres: [GENRES],
    release_date: {
      type: String,
      required: true
    },
    tmdb_id: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = Movie;
