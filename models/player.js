const mongoose = require('mongoose');

// Schema for querying player_data collection
let playerSchema = mongoose.Schema(
  {
    _id: String,
    rank: Number,
    full_name: String,
    first_name: String,
    last_name: String,
    player_id: String,
    years: String,
    value: Number,
    total: Number,
    peak_3: Number,
    consec_5: Number,
    avg_82: Number
  },
  { collection: 'player_data' }
);

let Player = mongoose.model('Player', playerSchema);
module.exports.Player = Player;
