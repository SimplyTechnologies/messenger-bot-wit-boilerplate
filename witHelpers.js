'use strict';


class Helpers {
	getEntityValues(entities, name) {
		const val = entities && entities[name] && 
			Array.isArray(entities[name]) &&
			entities[name].length > 0 && 
			entities[name].map((e) => {return e.value;});
		if (!val || !val.length) {
			return null;
		}

		return _.uniq(val);
	}

	getFirstEntityValue(entities, entity) {

		const val = entities && entities[entity] &&
			Array.isArray(entities[entity]) &&
			entities[entity].length > 0 &&
			entities[entity][0].value;

		if (!val) {
			return null;
		}
		return typeof val === 'object' ? val.value : val;
	}
}


module.exports = new Helpers();