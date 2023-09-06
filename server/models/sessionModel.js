import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true }, // {} should signify any data type
  createdAt: { type: Date, expires: 3000, default: Date.now() }
});

const SessionModel = mongoose.model('session', sessionSchema);

export default SessionModel;
