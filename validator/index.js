'use strict';

const fs = require('fs');
const path = require('path');

module.exports = fs.readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .map(file => ({[path.basename(file, '.js')]: require(path.join(__dirname, file))}))
    .reduce((result, item) => {
        var key = Object.keys(item)[0];
        result[key] = item[key]();
        return result;
}, {});
