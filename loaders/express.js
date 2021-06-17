const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { DB } = require('../config');

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse JSON rom requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Connection with MongoDB
  mongoose.connect(DB.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return app;
};
