'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DealsSchema = new Schema({
  name: String,
  description: String,
  expires: Boolean
});

module.exports = mongoose.model('Deals', DealsSchema);
