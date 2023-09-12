const logger = require('logger');

function log(level, message) {
  logger[level](message, { Context: this.context });
}

module.exports = log;