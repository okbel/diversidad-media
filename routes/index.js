const express = require("express");
const path = require("path");
const shrinkRay = require("shrink-ray");
const expressStaticGzip = require("express-static-gzip");
const { graphiqlExpress } = require("graphql-server-express");

const router = express.Router();

// =============================================================================
// SLACK
// =============================================================================

router.use("/slack", require("./slack"));

// =============================================================================
// API Middleware
// =============================================================================

router.use(shrinkRay());

// =============================================================================
// UTILITIES
// =============================================================================

router.use("/update", require("./update"));
router.use("/slack", require("./slack"));

// =============================================================================
// GRAPHQL ROUTER
// =============================================================================

router.use("/graph", require("./graph"));
router.use("/iql", graphiqlExpress({ endpointURL: "/graph" }));

// =============================================================================
// ROUTES
// =============================================================================

router.use("/api", require("./api"));

// =============================================================================
// STATICS
// =============================================================================

if (process.env.NODE_ENV === "production") {
  router.use(
    expressStaticGzip(path.resolve(path.join(__dirname, "../build")), {
      indexFromEmptyFile: false,
      enableBrotli: true,
      customCompressions: [
        {
          encodingName: "deflate",
          fileExtension: "zz"
        }
      ]
    })
  );
} else {
  router.use(express.static(path.resolve(path.join(__dirname, "../build"))));
}

module.exports = router;
