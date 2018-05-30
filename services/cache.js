const { URL, URLSearchParams } = require("url");
const axios = require("axios");
const ms = require("ms");
const adapter = axios.defaults.adapter;
const { client } = require("./redis");
const debug = require("debug")("diversidad-media:services:axiosCache");

// The lifetime for API requests that should be cached.
const DEFAULT_CACHE_LIFETIME = "1 day";

/**
 * getCacheKey will create a query-param sorted cache key for GET requests.
 *
 * @param {Object} config axios configuration object
 */
const getCacheKey = config => {
  const { secrets = [] } = config;

  // Parse the url.
  const url = new URL(config.url);

  // Combine the params.
  const params = new URLSearchParams(url.search);

  // Add all the new params.
  Object.keys(config.params)
    // Exclude secrets from the cache key.
    .filter(name => !secrets.includes(name))
    .forEach(name => {
      const value = config.params[name];

      params.set(name, value);
    });

  // Sort the search params.
  params.sort();

  // Reset the params to the parsed url.
  url.search = params.toString();

  // Extract the index.
  return `axios:${url.href}`;
};

const cache = {};

/**
 * cache.axios is an axios adapter used to apply caching to requests against a
 * shared redis cache.
 *
 * @param {Object} config axios configuration object
 */
cache.axios = async config => {
  const { method, cache_ttl = DEFAULT_CACHE_LIFETIME } = config;

  // Compute the cache key.
  const key = getCacheKey(config);

  // Requests that aren't gets are not cached.
  if (method !== "get") {
    debug(`${key} is a ${method}, skipping`);
    return adapter(config);
  }

  // Lookup the value with the index.
  let data = await client.get(key);
  if (data) {
    debug(`${key} was found in the cache`);
    return { data: JSON.parse(data) };
  }

  debug(`${key} was not found in the cache`);

  // Perform the actual request.
  const response = await adapter(config);

  // Set the item in the cache on the next tick.
  process.nextTick(async () => {
    try {
      // We may have disabled cache lifetimes, meaning it doesn't expire.
      if (cache_ttl !== false) {
        // Compute the cache TTL.
        const ttl = ms(cache_ttl) / 1000;

        // Set the response data in the cache.
        await client.set(key, JSON.stringify(response.data), "EX", ttl);

        debug(`${key} was added to the cache, cached for ${ttl}`);
      } else {
        // Set the response data in the cache.
        await client.set(key, JSON.stringify(response.data));

        debug(`${key} was added to the cache, cached forever`);
      }
    } catch (err) {
      console.error(err);
    }
  });

  return response;
};

module.exports = cache;
