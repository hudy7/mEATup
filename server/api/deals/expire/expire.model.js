'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpireSchema = new Schema({
  name: String,
  description: String,
  createdAt: { type: Date, expires: 28800, default: Date.now }
});

module.exports = mongoose.model('Expire', ExpireSchema);
