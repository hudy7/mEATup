'use strict';

var _ = require('lodash');
var Deals = require('./deals.model');

// Get list of dealss
exports.index = function(req, res) {
  Deals.find(function (err, dealss) {
    if(err) { return handleError(res, err); }
    return res.json(200, dealss);
  });
};

// Get a single deals
exports.show = function(req, res) {
  Deals.findById(req.params.id, function (err, deals) {
    if(err) { return handleError(res, err); }
    if(!deals) { return res.send(404); }
    return res.json(deals);
  });
};

// Creates a new deals in the DB.
exports.create = function(req, res) {
  Deals.create(req.body, function(err, deals) {
    if(err) { return handleError(res, err); }
    return res.json(201, deals);
  });
};

// Updates an existing deals in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Deals.findById(req.params.id, function (err, deals) {
    if (err) { return handleError(res, err); }
    if(!deals) { return res.send(404); }
    var updated = _.merge(deals, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, deals);
    });
  });
};

// Deletes a deals from the DB.
exports.destroy = function(req, res) {
  Deals.findById(req.params.id, function (err, deals) {
    if(err) { return handleError(res, err); }
    if(!deals) { return res.send(404); }
    deals.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}