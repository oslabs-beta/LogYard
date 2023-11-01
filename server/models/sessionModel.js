/**
 * ************************************
 *
 * @module  sessionModel
 * @description creates a schema to save the cookie id and its creation time to the database
 *
 * ************************************
 **/

import mongoose from 'mongoose';

// session schema uses unique mongo _id to set a unique cookie
const sessionSchema = new mongoose.Schema({
  username: { type: String },
  createdAt: { type: Date, default: Date.now, expires: 3000 },
});

const SessionModel = mongoose.model('sessiondocument', sessionSchema);

export default SessionModel;
