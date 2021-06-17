const express = require('express');
const router = express.Router();
const Models = require('../models/player');
const Players = Models.Player;

module.exports = (app) => {
  app.use('/api/v1/players', router);

  // Get list of all players to be listed on the player search page
  router.get('/list', (req, res) => {
    Players.find()
      .sort({ last_name: 1 })
      .then((players) => {
        res.status(200).json(players);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all time players list and limit to 250
  router.get('/greatest', (req, res) => {
    Players.find()
      .limit(250)
      .then((players) => {
        res.status(200).json(players);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
