'use strict';

var debug = require('debug')('cbp:services:user');

var mongoose = require('mongoose-q')(require('mongoose'));
var User = mongoose.model('User');

var Q = require('q');

exports.getByRecipientId = function (id) {
    return User.findOneQ({recipientId: id});
};

exports.getById = function (id) {
    return User.findOneQ({_id: id});
};


exports.getOrCreateUserByRecipientId = function(id, data) {
	return exports.getByRecipientId(id)
	.then( user => {
		if (!user) {
			user = new User({
				recipientId: id,
				firstName: data.first_name,
				lastName: data.last_name,
				gender: data.gender,
				locale: data.locale,
				timezone: data.timezone,
				profilePic: data.profile_pic
			});
			return user.saveQ();
		}
		return user;
	});
};


exports.updateUserLocation = function(recipientId, location) {
	let loc = {
		title: location.title,
		lat: location.lat,
		lon: location.lon,
		when: new Date()
	}
	return User.updateQ({recipientId: recipientId}, {$set: {lastLocation: loc}, $push: {locations: loc}});
};

exports.logActivity = function(id) {
	return User.updateQ({_id: id}, {$set: {lastActivity: new Date()}});
};


