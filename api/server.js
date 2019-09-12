const express = require('express');

const server = express();

server.use(express.json());

// sanity check
server.get('/', (req, res) => {
	res.send(`<h2> Party TIME!! </h2>`);
});

module.exports = server;
