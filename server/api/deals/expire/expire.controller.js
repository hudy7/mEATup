'use strict';

var _ = require('lodash');
var Expire = require('./expire.model.js');

// Get list of expires
exports.index = function(req, res) {
  Expire.find(function (err, expires) {
    if(err) { return handleError(res, err); }
    return res.json(200, expires);
  });
};

// Get a single expire
exports.show = function(req, res) {
  Expire.findById(req.params.id, function (err, expire) {
    if(err) { return handleError(res, err); }
    if(!expire) { return res.send(404); }
    return res.json(expire);
  });
};

// Creates a new expire in the DB.
exports.create = function(req, res) {
  Expire.create(req.body, function(err, expire) {
    if(err) { return handleError(res, err); }
    return res.json(201, expire);
  });
};

// Updates an existing expire in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Expire.findById(req.params.id, function (err, expire) {
    if (err) { return handleError(res, err); }
    if(!expire) { return res.send(404); }
    var updated = _.merge(expire, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, expire);
    });
  });
};

// Deletes a expire from the DB.
exports.destroy = function(req, res) {
  Expire.findById(req.params.id, function (err, expire) {
    if(err) { return handleError(res, err); }
    if(!expire) { return res.send(404); }
    expire.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
