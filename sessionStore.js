'use strict';

const redis = require('./services/redis');
const uuid = require('node-uuid');
const SESSION_WINDOW = 60 * 20;

class SessionStore {
	constructor() {
		this.sessions = {};
		this._redisPrefix = "cs";
	}

	get(id) {
		return redis.getKey(id)
		.then(data => {
			return redis.setExpire(id, SESSION_WINDOW)
			.then(() => {
				return JSON.parse(data);	
			});
		});
	}

	save(id, context) {
		return this.get(id)
		.then(session => {
			session.context = context;
			return redis.setKey(id, JSON.stringify(session))
			.then(() => {
				return redis.setExpire(id, SESSION_WINDOW);
			})
			.then(() => {
				return context;
			});
		});
	}
	saveSession(id, session) {
		return redis.setKey(id, JSON.stringify(session))
		.then(() => {
			return redis.setExpire(id, SESSION_WINDOW);
		})
		.then(() => {
			return session.context;
		});
	}

	findOrCreate(fbid) {
		let newSession = false;
		return redis.findFirstKey(this._redisPrefix + '*' + fbid)
		.then(key => {
			if (key) {
				return key;
			}
			newSession = true;
			key = this._redisPrefix + uuid.v1() + fbid;
			
			return redis.setKey(key, JSON.stringify({fbid: fbid, context: {}}))
			.then(() => {
				return key;
			});
		})
		.then(key => {
			return redis.setExpire(key, SESSION_WINDOW)
			.then(() => {
				return redis.getKey(key)
			})
			.then(data => {
				return JSON.parse(data);	
			})
			.then(session => {
				return {sessionId: key, newSession: newSession, session: session};
			});
		});
	}

	destroy(id) {
		return redis.deleteHash(id);
	}
}

module.exports = new SessionStore();
