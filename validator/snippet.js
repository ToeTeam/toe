
'use strict';

const Joi = require('@hapi/joi');

module.exports = () => {
    return {
        wx: {
            payload: {
                id: Joi.number().required(),
                name: Joi.string().min(2).max(50).required(),
                body: Joi.string().min(5).max(5000).required(),
                tags: Joi.array()
            }
        },
        rx: {
            params: {
                id: Joi.number().required().description("The id for the snippet item")
            }
        },
        rxwx: {
            payload: {
                name: Joi.string().min(2).max(50).required(),
                body: Joi.string().min(5).max(5000).required(),
                tags: Joi.array()
            }
        }
    }
};
