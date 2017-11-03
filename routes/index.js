const express = require('express');
const {graphiqlExpress} = require("graphql-server-express");

const router = express.Router();

// =============================================================================
// STATICS
// =============================================================================

router.use(express.static('build'));

// =============================================================================
// GRAPHQL ROUTER
// =============================================================================

router.use('/graph', require('./graph'));
router.use("/iql", graphiqlExpress({endpointURL: '/graph'}));

// =============================================================================
// ROUTES
// =============================================================================

router.use('/api', require('./api'));

module.exports = router;
