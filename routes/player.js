const express = require('express');
const router = express.Router();
const Models = require('../models/player');
const Players = Models.Players;

module.exports = (app) => {
  app.use('/api/v1/players', router);
};
