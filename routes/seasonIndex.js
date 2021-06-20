const express = require('express');
const router = express.Router();
const Models = require('../models/seasonIndex');
const SeasonIndexes = Models.SeasonIndex;

module.exports = (app) => {
  app.use('/api/v1/seasonindex', router);

  // Get season index data to be shown on season index page
  router.get('/', (req, res) => {
    SeasonIndexes.find()
      .sort({ year: -1 })
      .then((index) => {
        res.status(200).json(index);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
