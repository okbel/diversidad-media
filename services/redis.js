const Redis = require("ioredis");
const credentials = require("../creds");
const debug = require("debug")("diversidad-media:services:redis");

// Keep track of all clients so we can connect them all in one fell swoop.
const clients = [];

// Keep track of when we call connect to ensure that clients all have a chance
// to connect.
let didConnect = false;

// Connect will call a Connect command for all the clients.
const connect = () =>
  Promise.all(clients.map(client => client.connect())).then(() => {
    didConnect = true;
  });

// Disconnect all the clients.
const disconnect = () =>
  Promise.all(clients.map(client => client.disconnect()));

const createClient = (options = {}) => {
  debug("created Redis instance");

  const client = new Redis(credentials.redis_url, {
    lazyConnect: !didConnect,
    retry_strategy: options => {
      // reconnect after
      return Math.max(options.attempt * 100, 3000);
    },
    ...options
  });

  if (didConnect) {
    debug(
      "Redis instance created after connect was called, not enabling lazy connect"
    );
  } else {
    // Keep track of this client that wasn't connected.
    clients.push(client);

    // Attach logging.
    client.on("connect", () => {
      debug("Redis instance connected");
    });
  }

  return client;
};

module.exports = createClient;
module.exports.client = createClient();
module.exports.connect = connect;
module.exports.disconnect = disconnect;
