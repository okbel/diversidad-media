const express = require("express");
const credentials = require("../../creds");
const tmdb = require("../../services/tmdb");
const MovieService = require("../../services/movies");
const router = express.Router();

async function updateMovies() {
  let total_pages = 5;
  let page = 1;

  do {
    console.log(page, "/", total_pages);
    try {
      const { data } = await tmdb.get(
        `/4/list/${credentials.tmdb.lists.movies}`,
        {
          params: {
            page
          }
        }
      );

      data.results.map(async movie => {
        await MovieService.createMovie(movie);
      });

      if (total_pages === -1) {
        total_pages = data.total_pages;
      }

      page++;
    } catch (err) {
      console.log(err);
    }
  } while (page <= total_pages);
}

// =============================================================================
// ROUTES
// =============================================================================

router.use("/movies", async (req, res, next) => {
  console.log("runing upgrade");
  await updateMovies();
  res.send("running upgrade");
});

module.exports = router;
