import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @name mongoose.connect
 * @description Link to Mongoose database;
 */
const MONGO_URI = `mongodb+srv://${import.meta.env.VITE_DB_USERNAME}:${import.meta.env.VITE_DB_PASSWORD}@charon.g9lks56.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: 'LogYard', // sets the name of the DB that our collections are part of
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
