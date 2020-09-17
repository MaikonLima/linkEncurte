const express = require('express');

const LinkController = require('./controllers/LinkController');

const routes = express.Router();

routes.get('/links', LinkController.index);
routes.post('/links', LinkController.create);

module.exports = routes;