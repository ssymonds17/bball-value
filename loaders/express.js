const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse JSON rom requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
