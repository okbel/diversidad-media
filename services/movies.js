const debug = require("debug")("tundra:services:movie");
const Movie = require("../models/movie");

class Movies {
  static async findById(id) {
    let movie = await Movie.findOne({ id });
    return movie;
  }

  static list() {
    return Movie.find();
  }

  static async createMovie({
    title,
    overview,
    vote_average,
    vote_count,
    poster_path,
    genre_ids,
    release_date,
    backdrop_path,
    original_language,
    original_title,
    id
  }) {
    let movie = new Movie({
      title,
      overview,
      vote_average,
      vote_count,
      poster_path,
      genre_ids,
      release_date,
      backdrop_path,
      original_language,
      original_title,
      tmdb_id: id
    });

    try {
      movie = await movie.save();
      debug("movie has been created.");
    } catch (err) {
      debug(err);
    }

    return movie;
  }
}

module.exports = Movies;
