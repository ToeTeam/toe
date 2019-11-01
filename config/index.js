'use strict';

var path = require('path');
var fs = require('fs');


var configCollection = fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .map(file => require(path.join(__dirname, file)))
    .map(fn => fn());

module.exports = [].concat.apply([], configCollection);

