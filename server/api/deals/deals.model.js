'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DealsSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Deals', DealsSchema);
