import { createLogger, format, transports } from 'winston';
import 'winston-mongodb';
import dotenv from 'dotenv';

export default createLogger({
  transports: [
    // new transports.File({
    //   filename: 'logs/server.log',
    //   format: format.combine(
    //     format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
    //     format.align(),
    //     format.printf(
    //       (info) => `${info.level} : ${info.timestamp} : ${info.message}`
    //     )
    //   ),
    // }),

    /*
    LOGGER TEMPLATE

    _id: standard
    timestamp: standard
    level: (error, warn, info, http, verbose, debug, silly)
    message: USER DECLARED!
    meta: {
      Context1: USER DECLARED
      Context2: USER DECLARED
    }

    */

    new transports.MongoDB({
      level: 'silly', 
      defaultMeta: {
        context: 'hello'
      },
      db: `mongodb+srv://${process.env.VITE_DB_USERNAME}:${process.env.VITE_DB_PASSWORD}@charon.g9lks56.mongodb.net/`,
      options: {
        useUnifiedTopology: true,
      },
      dbName: 'your_database_name',
      collection: 'logs',
      format: format.combine(
        format.json(),
        format.metadata()
      )
    })
  ]
});

