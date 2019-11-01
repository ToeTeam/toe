
// const Validator = require('../validator');
const Joi = require('@hapi/joi');


module.exports = function () {;
    return [
        {
            method: 'GET',
            path: '/hello/{name}',
            handler: function (request, h) {

                return `Hello ${request.params.name}!`;
            },
            options: {
                validate: {
                    params: {
                        name: Joi.string().min(3).max(10)
                    }
                }
            }
        }
    ]
};