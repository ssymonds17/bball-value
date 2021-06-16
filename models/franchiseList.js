const mongoose = require('mongoose');

// Schema for querying franchise_list collection
let franchiseListSchema = mongoose.Schema(
  {
    _id: String,
    franchise: String,
    franchise_code: String,
    first_year: Number,
    last_year: Number
  },
  { collection: 'franchise_list' }
);

let FranchiseList = mongoose.model('FranchiseList', franchiseListSchema);
module.exports.FranchiseList = FranchiseList;
