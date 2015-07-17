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
  createdByEmail: String,
  createdAt: { type: Date, expires: 28800, default: Date.now },
  lat: String,
  long: String,
  phone: String,
  price: Number,
  rating: Number,
  website: String,
  addressHTML: String,
  address: String
});

module.exports = mongoose.model('Events', EventsSchema);
