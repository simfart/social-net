const mongoose = require('mongoose')
const validator = require('validator')
// const Comment = require('./comment')
const Comment = require('./comment.js').schema

const postSchema = new mongoose.Schema(
  {
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
    },
    video: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value),
        message: 'Невалидный URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'owner is required'],
    },

    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
      default: [],
    },
    comments: [Comment],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('Post', postSchema)
