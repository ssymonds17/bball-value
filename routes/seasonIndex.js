const express = require('express');
const router = express.Router();
const Models = require('../models/seasonIndex');
const SeasonIndexes = Models.SeasonIndexes;

module.exports = (app) => {
  app.use('/api/v1/seasonindexes', router);
};
