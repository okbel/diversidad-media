const express = require("express");
const logger = require("morgan");
const routes = require("./routes");

const app = express();

// =============================================================================
// APPLICATION MIDDLEWARE
// =============================================================================

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(parseInt(process.env.DM_SERVER_PORT, 10) || 3000);
