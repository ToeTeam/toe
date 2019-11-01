"use strict"

var routes = require('./routes');
const Hapi = require('@hapi/hapi');
var config = require('./config');


const server = new Hapi.Server({ 
    host: 'localhost', 
    port: 3101, 
});

const preprocess = async () => {
    await server.route(routes);
    await server.register(config);
}

const launch = async () => {
    try {
        await preprocess();
        await server.start(); 
    } catch (err) { 
        console.error(err); 
        process.exit(1); 
    };
    console.log(`Server running at ${server.info.uri}`); 
}

launch();

