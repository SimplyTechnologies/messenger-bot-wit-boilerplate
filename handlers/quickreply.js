'use strict';

const GraphAPI = require('../graphAPI');
const platformHelpers = require('../platformHelpers');


module.exports = function handleQuickReply(sender, sessionId, context, payload) {
	let payloadTokens = payload.split(':');
	const action = payloadTokens[0];
	const data = payloadTokens[1];

	switch(action) {
		
		case 'sampleLocation':	
			return sendShareLocationSample(sender);
			break;
		case 'sampleList':
			return sendListSample(sender);
			break;
		case 'sampleGenericCards':
			return sendGenericCardsSample(sender);
			break;
	}
}


function sendShareLocationSample(sender) {
	let data = platformHelpers.generateSendLocation('Please share your location');
	return GraphAPI.sendTemplateMessage(sender, data);	
}


function sendListSample(sender) {
	return GraphAPI.sendPlainMessage(sender, 'coming soon');
}


function sendGenericCardsSample(sender) {
	return GraphAPI.sendPlainMessage(sender, 'coming soon');	
}