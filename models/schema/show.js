const mongoose = require("../../services/mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");
const GENRES = require("../enum/genres");

const Show = new Schema(
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
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      unique: true
    },
    vote_average: {
      type: String,
      required: true,
      unique: true
    },
    vote_count: {
      type: String,
      required: true,
      unique: true
    },
    poster_path: {
      type: String,
      required: true,
      unique: true
    },
    genre_ids: [GENRES],
    release_date: {
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

module.exports = Show;
