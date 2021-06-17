const express = require('express');
const router = express.Router();
const Models = require('../models/franchiseList');
const FranchiseLists = Models.FranchiseList;

module.exports = (app) => {
  app.use('/api/v1/franchiselists', router);

  // Get list of all franchises
  router.get('/', (req, res) => {
    FranchiseLists.find()
      .then((franchises) => {
        res.status(200).json(franchises);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Get list of current franchises
  router.get('/current', (req, res) => {
    FranchiseLists.find({
      last_year: 2020
    })
      .then((franchises) => {
        res.status(200).json(franchises);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });

  // Gte list of defunct franchises
  router.get('/defunct', (req, res) => {
    FranchiseLists.find({
      last_year: { $ne: 2020 }
    })
      .then((franchises) => {
        res.status(200).json(franchises);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error: ' + e);
      });
  });
};
