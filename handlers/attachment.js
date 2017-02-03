'use strict';

const sessionStore = require('../sessionStore');
const GraphAPI = require('../graphAPI');
const userService = require('../services/user');

const _ = require('lodash');
const Q = require('q');

module.exports = function handler(sender, sessionId, context, atts) {
	
	let promises = _.map(atts, att => {
		switch(att.type){
			case 'location':
				return processLocationData(sender, att);
			default:
				return GraphAPI.sendPlainMessage(sender,'Wow, cool pic! I\'ll keep this one ;)');
		}
	});

	return Q.all(promises)
	.then(function() {
		return sessionStore.save(sessionId, context);
	});
};


function processLocationData(sender, attachment) {
	let location = {
		title: attachment.title, 
		lat: attachment.payload.coordinates.lat, 
		lon: attachment.payload.coordinates.long
	};
	
	return userService.updateUserLocation(sender, location)
	.then(user => {
		return GraphAPI.sendPlainMessage(sender, 'Hey, thanks for sharing your location')	
	});
}