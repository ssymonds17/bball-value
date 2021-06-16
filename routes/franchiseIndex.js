const express = require('express');
const router = express.Router();
const Models = require('../models/franchiseIndex');
const FranchiseIndexes = Models.FranchiseIndexes;

module.exports = (app) => {
  app.use('/api/v1/franchiseindexes', router);
};
