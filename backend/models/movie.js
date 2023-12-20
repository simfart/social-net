const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'country is required'],
    },
    director: {
      type: String,
      required: [true, 'director is required'],
    },
    duration: {
      type: Number,
      required: [true, 'duration is required'],
    },
    year: {
      type: String,
      required: [true, 'year is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    image: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value),
        message: 'Невалидный URL',
      },
      required: [true, 'image is required'],
    },
    trailer: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value),
        message: 'Невалидный URL',
      },
      required: [true, 'trailer is required '],
    },
    thumbnail: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value),
        message: 'Невалидный URL',
      },
      required: [true, 'thumbnail is required'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'owner is required'],
    },
    movieId: {
      type: Number,
      required: [true, 'movieId is required'],
    },
    nameRU: {
      type: String,
      required: [true, 'nameRU is required'],
    },
    nameEN: {
      type: String,
      required: [true, 'nameEN is required'],
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);
