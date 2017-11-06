const mongoose = require('mongoose');
const {mongo_url} = require('../creds');

const formatter = require('mongoose').Collection.prototype.$format;

function debugQuery(name, i, ...args) {
  let functionCall = ['db', name, i].join('.');
  let _args = [];
  for (let j = args.length - 1; j >= 0; --j) {
    if (formatter(args[j]) || _args.length) {
      _args.unshift(formatter(args[j]));
    }
  }

  let params = `(${_args.join(', ')})`;

  console.log(functionCall + params);
}

mongoose.Promise = global.Promise;

mongoose.set('debug', debugQuery);

// Connect to the Mongo instance.
mongoose
  .createConnection(mongo_url, {
    useMongoClient: true,
  })
  .then(() => {
    console.log('Connection Established');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = mongoose;

require('../models/movie');
