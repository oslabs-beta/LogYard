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

// session schema uses unique mongo _id to set a unique cookie
const sessionSchema = new mongoose.Schema({
  createdAt: { type: Date, expires: 3000, default: Date.now }
});

const SessionModel = mongoose.model('sessiondocument', sessionSchema);

export default SessionModel;
