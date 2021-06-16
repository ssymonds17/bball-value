const mongoose = require('mongoose');

// Schema for querying team_data collection
let teamSchema = mongoose.Schema(
  {
    _id: String,
    rank: Number,
    year: Number,
    team_full: String,
    team: String,
    total: Number,
    record: String,
    result: String,
    league: String,
    franchise_code: String
  },
  { collection: 'team_data' }
);

let Team = mongoose.model('Team', teamSchema);
module.exports.Team = Team;
