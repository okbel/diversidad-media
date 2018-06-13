const express = require("express");
const path = require("path");
const shrinkRay = require("shrink-ray");
const expressStaticGzip = require("express-static-gzip");
const { graphiqlExpress } = require("graphql-server-express");

const router = express.Router();

// =============================================================================
// API Middleware
// =============================================================================

router.use(shrinkRay());

// =============================================================================
// UPDATE UTILITIES
// =============================================================================

router.use("/update", require("./update"));

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
