'use strict';

const fs = require('fs');
const path = require('path');
const debug = require('debug')('cbp:init');

module.exports = function (config) {
    var initPath = __dirname;
    var init = fs.readdirSync(initPath);
    init.forEach(function (js) {
        if (js === 'index.js') {
            return;
        }

        debug('initializing ' + js);

        require(path.join(initPath, js)).init(config, true);
    });
};

