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
  createdAt: { type: Date, expires: 28800, default: Date.now },

});

module.exports = mongoose.model('Events', EventsSchema);
