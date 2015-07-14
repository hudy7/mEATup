'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventsSchema = new Schema({
  name: String,
  description: String,
  time: String,
  location: String,
  meetingLocation: String,
  meetingTime: String,
  attendees: [String],
  createdBy: String,
  createdAt: Date
});

EventsSchema.index({"createdAt": 1}, {expireAfterSeconds: 28800});

module.exports = mongoose.model('Events', EventsSchema);
