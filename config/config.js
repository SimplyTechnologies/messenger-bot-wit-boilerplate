'use strict';

module.exports = {
    shared: {
    },
 
    development: {
    	redis: {
            port: 6379,
            host: 'localhost',
            pass: '',
            db: 1
        },
        db: 'mongodb://localhost/chatbotdb',

    	fbPageToken: '',
    	fbPageID: '',
    	fbWebhookVerifyToken: '',
    	witToken: ''
    },
 
    production: {

    }
}