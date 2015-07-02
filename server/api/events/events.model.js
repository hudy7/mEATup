'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventsSchema = new Schema({
  name: String,
  description: String,
  date: Date,
  time: String,
  location: String,
  meetingLocation: String,
  meetingTime: String,
  attendees: [String],
  createdBy: String
});

module.exports = mongoose.model('Events', EventsSchema);
