'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  lat: Number,
  lng: Number,
  attendees: [String]
});

module.exports = mongoose.model('Place', PlaceSchema);
