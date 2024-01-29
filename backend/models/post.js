const mongoose = require('mongoose')
const validator = require('validator')
// const Comment = require('./comment')
const Comment = require('./comment.js').schema

const postSchema = new mongoose.Schema(
  {
    description: {
      type: String,
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

// {
//     "likes": [
//         {
//             "name": "Beautiful",
//             "about": "Life",
//             "avatar": "https://i.yapx.cc/MvQ5k.gif",
//             "_id": "0835d3929689eb084ba8ae41",
//             "cohort": "cohort-59"
//         }
//     ],
//     "_id": "65b65e39c5ce7667093440d8",
//     "name": "Panda",
//     "link": "https://avatars.mds.yandex.net/i?id=2cf63655942cc9c1f00c2e72fd60d7755daaf03b-10471613-images-thumbs&n=13",
//     "owner": {
//         "name": "Beautiful",
//         "about": "Life",
//         "avatar": "https://i.yapx.cc/MvQ5k.gif",
//         "_id": "0835d3929689eb084ba8ae41",
//         "cohort": "cohort-59"
//     },
//     "createdAt": "2024-01-28T14:01:29.257Z"
// },
