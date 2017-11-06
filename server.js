const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// =============================================================================
// SERVICES
// =============================================================================

require('./services/mongoose');

// =============================================================================
// APPLICATION
// =============================================================================

const app = express();

// =============================================================================
// APPLICATION MIDDLEWARE
// =============================================================================

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// =============================================================================
// ROUTES
// =============================================================================

app.use('/', routes);

app.listen(parseInt(process.env.DM_SERVER_PORT, 10) || 3000);
