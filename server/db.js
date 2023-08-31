import mongoose from 'mongoose';

/**
 * @name mongoose.connect
 * @description Link to Mongoose database;
 */
const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@charon.g9lks56.mongodb.net/`;
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test', // sets the name of the DB that our collections are part of
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
