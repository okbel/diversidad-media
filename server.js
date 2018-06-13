// Ensure environment variables are read.
require("./config/env");

const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const { connect: connectRedis } = require("./services/redis");

require("./services/mongoose");

const app = express();

// special case public URLs that are equivalent
// as visting the root (similar to `200.html` on github)
app.get('/movie/:id', (req, res, next) => {
  req.url = '/';
  next();
});

// =============================================================================
// APPLICATION MIDDLEWARE
// =============================================================================

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: remove full CORS support.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// =============================================================================
// ROUTES
// =============================================================================

app.use("/", routes);

// Connect the Redis instances.
connectRedis();

// Parse the port from the environment.
const port = parseInt(process.env.DM_SERVER_PORT, 10) || 3000;

// Start the express application server.
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
