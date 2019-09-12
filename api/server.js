const express = require('express');
const configureMiddleware = require('./middleware');

// const recipeRouter = require('../recipes/recipes-router')

const server = express();

configureMiddleware(server);

// server.use('/api/recipes', recipeRouter)

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2> Party TIME!! </h2>`);
});

module.exports = server;
