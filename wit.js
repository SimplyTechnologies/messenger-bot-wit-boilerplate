'use strict';

const debug = require('debug')('cbp:wit');
const fs = require('fs');
const path = require('path');
const Q = require('q');

const Wit = require('node-wit').Wit;

const GraphAPI = require('./graphAPI');
const sessionStore = require('./sessionStore');
const config = require('./config');


// bot actions
const actions = {
	send(request, response) {

		debug('saying', response);

		let recipientId;
		return sessionStore.get(request.sessionId)
		.then(session => {
			recipientId = session.fbid;
			return GraphAPI.sendTemplateMessage(recipientId, response);
		})
		.catch((err) => {
			console.log('Oops! An error occurred while forwarding the response to', recipientId, ':', err );
		});
    }

};



(function initCustomActions() {
    var actionsPath = path.join(__dirname, 'actions');
    var actionsFile = fs.readdirSync(actionsPath);

    actionsFile.forEach(function (js) {
    	const actionName = path.basename(js,'.js');
        debug(`Initializing wit action [${actionName}]`);
        actions[actionName] = require(path.join(actionsPath, js));
    });
})();





// Setting up our bot
module.exports = new Wit({accessToken: config.witToken, actions: actions});