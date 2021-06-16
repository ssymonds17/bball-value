const mongoose = require('mongoose');

// Schema for querying season_index collection
let SeasonIndexSchema = mongoose.Schema(
  {
    _id: String,
    year: Number,
    league: String,
    champions: String,
    champions_franchise_code: String,
    runners_up: String,
    runners_up_franchise_code: String,
    overall_mvp: String,
    overall_mvp_player_id: String,
    overall_mvp_score: Number,
    rs_mvp: String,
    rs_mvp_player_id: String,
    rs_mvp_score: Number,
    playoffs_mvp: String,
    playoffs_mvp_player_id: String,
    playoffs_mvp_score: Number
  },
  { collection: 'season_index' }
);

let SeasonIndex = mongoose.model('SeasonIndex', SeasonIndexSchema);
module.exports.SeasonIndex = SeasonIndex;
