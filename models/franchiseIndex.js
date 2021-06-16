const mongoose = require('mongoose');

// Schema for querying franchise_index collection
let franchiseIndexSchema = mongoose.Schema(
  {
    _id: String,
    team_abbreviation: String,
    team_name: String,
    franchise: String,
    franchise_code: String,
    first_year: Number,
    last_year: Number
  },
  { collection: 'franchise_index' }
);

let FranchiseIndex = mongoose.model('FranchiseIndex', franchiseIndexSchema);
module.exports.FranchiseIndex = FranchiseIndex;
