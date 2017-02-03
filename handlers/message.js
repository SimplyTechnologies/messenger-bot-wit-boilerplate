'use strict';

const sessionStore = require('../sessionStore');
const wit = require('../wit');

module.exports = function handleTextMessage (sessionId, context, msg) {
	context.message = msg;
	//console.log(context)
	wit.runActions(sessionId, msg, context, (error, context) => {
		if (error) {
			console.log('Oops! Got an error from Wit:', error);
			return;
		} 
		
		console.log('Waiting for futher messages.');

		if (context['done']) {
		   	sessionStore.destroy(sessionId);
		}			
	});
};


