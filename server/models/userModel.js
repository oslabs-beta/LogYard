/**
 * ************************************
 *
 * @module  sessionModel
 * @description creates a schema to save the user to the database
 * 
 * ************************************
 **/


import mongoose from 'mongoose';

// session schema uses unique mongo _id to set a unique cookie
const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  },
  savedFilters: {
    type: Object,
    required: true,
    default: {}
  },
  createdAt: { type: Date, default: Date.now },
}, {
  minimize: false,
});

const UserModel = mongoose.model('userdocument', userSchema);

export default UserModel;
