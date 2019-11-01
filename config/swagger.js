

const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('../package');


module.exports = () => {
    const SwaggerConfig = {
        plugin: HapiSwagger,
        options: {
            info: {
                title: Pack.title,
                description: Pack.description,
                version: Pack.version
            },
            swaggerUI: true,
            basePath: '/',
            sortPaths: 'path-method',
            documentationPath: '/swagger',
            securityDefinitions: {}
        }
    }
    return [
        Inert,
        Vision,
        SwaggerConfig
    ]
}