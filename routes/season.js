const express = require('express');
const router = express.Router();
const Models = require('../models/season');
const Seasons = Models.Season;

module.exports = (app) => {
  app.use('/api/v1/seasons', router);

  // Get individual player records using the player id
  router.get('/players/:playerID', (req, res) => {
    Seasons.find({
      player_id: req.params.playerID,
      rs_tm: { $ne: 'Z-TOT' }
    })
      .sort({ year: 1 })
      .then((player) => {
        res.status(200).json(player);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get individual team records based on franchise code and year
  router.get('/teams/:franchiseCode/:year', (req, res) => {
    Seasons.find({
      franchise: req.params.franchiseCode,
      year: req.params.year
    })
      .sort({ season_value: -1 })
      .then((team) => {
        res.status(200).json(team);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all player records for single season by year and league and order by season value
  router.get('/overall/:league/:year', (req, res) => {
    Seasons.find({
      year: req.params.year,
      league: req.params.league
    })
      .sort({ season_value: -1 })
      .then((season) => {
        res.status(200).json(season);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all player records for single season by year and league and order by rs score
  router.get('/regularseason/:league/:year', (req, res) => {
    Seasons.find({
      year: req.params.year,
      league: req.params.league,
      // Make sure that regular season minutes are greater than 0
      rs_mp: { $ne: 0 }
    })
      .sort({ rs_score: -1 })
      .then((season) => {
        res.status(200).json(season);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all player records for single season by year and league and order by rs score
  router.get('/playoffs/:league/:year', (req, res) => {
    Seasons.find({
      year: req.params.year,
      league: req.params.league,
      // Make sure that po team exists (string length is >= 1)
      po_tm: { $exists: true },
      $expr: { $gte: [{ $strLenCP: '$po_tm' }, 1] }
    })
      .sort({ po_score: -1 })
      .then((season) => {
        res.status(200).json(season);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all season records and order to return top 100 full season scores
  router.get('/rankings/overall', (req, res) => {
    Seasons.find()
      .sort({ season_value: -1 })
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all season records and order to return top 100 regular season scores
  router.get('/rankings/regularseason', (req, res) => {
    Seasons.find()
      .sort({ rs_score: -1 })
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get all season records and order to return top 100 playoff scores
  router.get('/rankings/playoffs', (req, res) => {
    Seasons.find({
      rs_tm: { $ne: 'Z-TOT' }
    })
      .sort({ po_score: -1 })
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
