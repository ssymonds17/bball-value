const seasonRouter = require('./season');
const playerRouter = require('./player');
const teamRouter = require('./team');
const franchiseListRouter = require('./franchiseList');
const franchiseIndexRouter = require('./franchiseIndex');
const seasonIndexRouter = require('./seasonIndex');

module.exports = async (app) => {
  seasonRouter(app);
  playerRouter(app);
  teamRouter(app);
  franchiseListRouter(app);
  franchiseIndexRouter(app);
  seasonIndexRouter(app);
};
