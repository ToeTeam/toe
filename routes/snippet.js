
"use strict"

const Validator = require('../validator');


module.exports = function () {;
    return [
        {
            method: 'GET',
            path: '/snippets',
            options: {
                tags: ['api']
            },
            handler: (request, h) => {
                return [{
                    id: 1,
                    name: 'Email',
                    body: `class EmailHandler:\n\tdef __init__(self):\n\t\tprint("Email Handler")`,
                    tags: ['email']
                }]
            }
        },
        {
            method: 'GET',
            path: '/snippets/{id}',
            handler: (request, h) => {
                return {
                    id: request.params.id,
                    name: 'Email',
                    body: `class EmailHandler:\n\tdef __init__(self):\n\t\tprint("Email Handler")`,
                    tags: ['email']
                }
            },
            options: {
                tags: ['api'],
                validate: {
                    params: Validator.snippet.read
                }
            }
        },
        {
            method: 'POST',
            path: '/snippets',
            handler: (request, h) => {
            },
            options: {
                tags: ['api'],
                validate: Validator.snippet.wx
            }
        },
        {
            method: 'DELETE',
            path: '/snippets/{id}',
            handler: (request, h) => {
            },
            options: {
                tags: ['api'],
                validate: Validator.snippet.rx
            }
        },
        {
            method: 'PUT',
            path: '/snippets/{id}',
            handler: (request, h) => {
            },
            options: {
                tags: ['api'],
                validate: Validator.snippet.rxwx
            }
        }
    ]
};