/**
 * ************************************
 *
 * @module  createLogger
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Winston logger functionality
 * 
 * ************************************
 **/

const { createLogger, format, transports } = require('winston');
require('winston-mongodb');
const dotenv = require('dotenv');

module.exports = createLogger({
  transports: [
    /* !LOGGER TEMPLATE!

    _id: AUTO GENERATED
    timestamp: AUTO GENERATED
    level: USER DECLARED ( (0)error, (1)warn, (2)info, (3)http, (4)verbose, (5)debug, (6)silly )
    message: USER DECLARED
    meta: {
      Context1: USER DECLARED
      Context2: USER DECLARED
    }

    logger.error('message', {Contexts: ''})

    */

    new transports.MongoDB({
      // to collect all level types in DB, put this as 'silly'. Anything at or below the indicated level here will be placed in the database.
      level: 'silly', 
      db: `${process.env.VITE_DB_URI}`,
      options: {
        useUnifiedTopology: true,
      },
      // dbName and collection MUST match the location at which the mongo server is pointing to in db.js!
      dbName: 'your_database_name',
      collection: 'logs',
      format: format.combine(
        format.json(),
        format.metadata()
      )
    })
  ]
});

