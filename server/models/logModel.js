/**
 * ************************************
 *
 * @module  logModel
 * @authors Preston Coldwell, Ryan Smithey, Geoff Sun, Andrew Wagner, Brian Hwang
 * @date 09/06/2023
 * @description LogSchema was supposed to send logs via its schema, but at the moment - logs are being sent from logger, not through schema.
 * 
 * ************************************
 **/

import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  LogString: String,
  Context: Object,
  Severity: Number,
  Time: {
    type: Date,
    default: Date.now,
  },
});

const LogModel = mongoose.model('log', LogSchema);

export default LogModel;
