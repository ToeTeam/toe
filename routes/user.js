
"use strict"

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/users',
            options: {
                tags: ['api']
            },
            handler: (request, h) => {
                return 'I am the home route'
            }
        }
    ]
};