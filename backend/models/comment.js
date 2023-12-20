const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema(
  {

    //   commentID: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId()
    // },

    commentnBody: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    }

  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('Comment', commentSchema);

// module.exports.commentSchema = commentSchema;