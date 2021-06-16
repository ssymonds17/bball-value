const mongoose = require('mongoose');

// Schema for querying season_data collection
let seasonSchema = mongoose.Schema(
  {
    _id: String,
    multiple: Number,
    year: Number,
    player_name: String,
    player_id: String,
    season_value: Number,
    rs_tm: String,
    franchise: String,
    league: String,
    rs_score: Number,
    rs_pos: String,
    rs_age: Number,
    rs_g: Number,
    rs_mp: Number,
    rs_val_perc: String,
    po_score: Number,
    po_pos: String,
    po_age: Number,
    po_tm: String,
    po_g: Number,
    po_mp: Number,
    po_val_perc: String,
    tm_record: String,
    tm_result: String
  },
  { collection: 'season_data' }
);

let Season = mongoose.model('Season', seasonSchema);
module.exports.Season = Season;
