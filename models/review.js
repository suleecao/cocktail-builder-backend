const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  cocktail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cocktail',
    required: true
  },
    author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    maxlength: 1000
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);