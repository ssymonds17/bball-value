const express = require('express');
const router = express.Router();
const Models = require('../models/franchiseList');
const FranchiseLists = Models.FranchiseLists;

module.exports = (app) => {
  app.use('/api/v1/franchiselists', router);
};
