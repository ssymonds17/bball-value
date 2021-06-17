const express = require('express');
const router = express.Router();
const Models = require('../models/franchiseIndex');
const FranchiseIndexes = Models.FranchiseIndex;

module.exports = (app) => {
  app.use('/api/v1/franchiseindex', router);

  // Get franchise code from team id
  router.get('/:teamAbbreviation', (req, res) => {
    FranchiseIndexes.find({
      team_abbreviation: req.params.teamAbbreviation
    })
      .then((franchise) => {
        res.status(200).json(franchise);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
