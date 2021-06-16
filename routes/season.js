const express = require('express');
const router = express.Router();
const Models = require('../models/season');
const Seasons = Models.Season;

module.exports = (app) => {
  app.use('/api/v1/seasons', router);

  router.get('/players/:playerID', (req, res) => {
    let yearSort = { year: 1 };
    Seasons.find({
      player_id: req.params.playerID,
      rs_tm: { $ne: 'Z-TOT' }
    })
      .sort(yearSort)
      .then((player) => {
        res.status(200).json(player);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
