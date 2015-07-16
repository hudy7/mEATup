/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Events = require('../api/events/events.model');
var Deals = require('../api/deals/deals.model');
var Expires = require('../api/deals/expire/expire.model');

User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
  );
});

Events.find({}).remove(function () {
  Events.create({
      name: 'WALNUT WEDNESDAY!',
      description: 'LETS GET OUR FOOD TRUCK ON WITH SOME DELICIOUS TACOS!',
      time: '11:45',
      location: 'Walnut street',
      meetingLocation: '1st floor lobby',
      meetingTime: '11:30',
      attendees: ['Test User'],
      createdBy: 'Test User',
      createdAt: new Date()
    },
    {
      name: 'PIZZA TIME!!!',
      description: 'Lets go get vincenzas!',
      time: '12:00',
      location: 'Vincenza\'s',
      meetingLocation: '13th kitchen',
      meetingTime: '11:55',
      attendees: ['Test User'],
      createdBy: 'Test User',
      createdAt: new Date()
    });
});

Deals.find({}).remove(function () {
  Deals.create({
      name: 'WALNUT WEDNESDAY!',
      description: 'Every wednesday there are food trucks on walnut street.'
    },
    {
      name: '10c wings at winking lizard',
      description: 'Cheap wings on mondays'
    });
});

Expires.find({}).remove(function () {
  Expires.create({
      name: 'This is a short term freebie',
      description: 'free donuts'
    },
    {
      name: 'So is this one',
      description: 'free pizza'
    });
});
