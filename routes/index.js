

var path = require('path');
var fs = require('fs');


var routesCollection = fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .map(file => require(path.join(__dirname, file)))
    .map(fn => fn());

module.exports = [].concat.apply([], routesCollection);

