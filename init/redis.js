'use strict';

const debug = require('debug')('cbp:init:redis');
const redis = require('../services/redis');

exports.init = function (config) {
    debug('initializing redis');

    redis.init(config);
};