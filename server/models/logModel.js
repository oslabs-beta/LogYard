import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  // properties here...
  LogString: String,
  Context: Object,
  Severity: Number,
  Time: {
    type: Date,
    default: Date.now(),
  },
  // ServerPassword: String,
});

const LogModel = mongoose.model('log', LogSchema);

export default LogModel;
