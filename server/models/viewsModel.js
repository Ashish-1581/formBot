const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
    views: { type: Number, required: true ,default:0},
    formId: {
    type: String,
    required: true,
    unique: true,
  },
});

const ViewModel = mongoose.model('Views', viewSchema);

module.exports = ViewModel;
