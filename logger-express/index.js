const addLogger = require('./addLogger');
const addContext = require('./addContext');
const removeContext = require('./removeContext');
const createLog = require('./createLog');

/*
The express logger adds a logger to res.locals.logger
it contains a context object and a log function
the log function is a proxy for  require('logger');

It appears as follows 
{
  log: func,
  context: {
    C1: 'testing',
    C2: 'asdf'
  }
}
it can be used to log using
res.locals.log('level', 'message');

*/


module.exports = {
  addLogger,
  addContext,
  removeContext,
  createLog,
};