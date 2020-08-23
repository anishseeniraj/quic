const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const activitySchema = new Schema({
  username: { type: String, required: true, trim: true, minlength: 3 },
  contact: { type: String, required: true, trim: true, minlength: 5 },
  activity: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  location: { type: String, required: true, trim: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});
const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
