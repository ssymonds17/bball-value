const dotent = require('dotenv');
dotent.config();

module.exports = {
  // MONGODB CONNECTION URI
  DB: {
    CONNECTION_URI: process.env.CONNECTION_URI
  }
};
