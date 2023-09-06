/**
 * ************************************
 *
 * @module  sessionModel
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description creates a schema to save the cookie id and its creation time to the database
 * 
 * ************************************
 **/


import mongoose from 'mongoose';


const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 3000, default: Date.now }
});

const SessionModel = mongoose.model('session', sessionSchema);

export default SessionModel;
