/**
 * ************************************
 *
 * @module  connectDB
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description Database connection module
 * 
 * ************************************
 **/

import mongoose from 'mongoose';
import dotenv from 'dotenv';
  
dotenv.config();
  
const MONGO_URI = `mongodb+srv://${process.env.VITE_DB_USERNAME}:${process.env.VITE_DB_PASSWORD}@charon.g9lks56.mongodb.net/`;
  
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'your_database_name', // Replace with your database name
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
  
export default connectDB;
