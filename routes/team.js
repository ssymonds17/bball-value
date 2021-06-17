const express = require('express');
const router = express.Router();
const Models = require('../models/team');
const Teams = Models.Team;

module.exports = (app) => {
  app.use('/api/v1/teams', router);

  // Get all time teams list and limit to 100
  router.get('/greatest', (req, res) => {
    Teams.find()
      .limit(100)
      .then((teams) => {
        res.status(200).json(teams);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get list of all team seasons by franchise code
  router.get('/:franchiseCode', (req, res) => {
    Teams.find({
      franchise_code: req.params.franchiseCode
    })
      .sort({ year: -1 })
      .then((seasons) => {
        res.status(200).json(seasons);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
