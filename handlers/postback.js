'use strict';

const GraphAPI = require('../graphAPI');
const platformHelpers = require('../platformHelpers');


module.exports = function handlePostback(sender, sessionId, context, payload) {
	let payloadTokens = payload.split(':');
	const action = payloadTokens[0];
	const data = payloadTokens[1];

	switch(action) {
		case 'showSamples':
			return sendSamplesQuickReplies(sender);
			break;
		case 'somepostback':
			break;
		case 'getstarted': 
			break;

	}
};


function sendSamplesQuickReplies(sender) {
	const replies = {
		'sampleLocation': 'Send location', 
		'sampleList': 'List',
		'sampleGenericCards': 'Generic cards'
	};
	let data = platformHelpers.generateQuickReplies('Explore Messenger Platform features', replies);
	return GraphAPI.sendTemplateMessage(sender, data);	
}