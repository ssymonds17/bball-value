const express = require('express');
const router = express.Router();
const Models = require('../models/team');
const Teams = Models.Teams;

module.exports = (app) => {
  app.use('/api/v1/teams', router);
};
