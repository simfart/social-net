const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { AuthError } = require('../utils/errors');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: 'Невалидный e-mail',
      },
    },

    password: {
      type: String,
      required: [true, 'password is required'],
      select: false,
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      minlength: 2,
      maxlength: 30,
    },

    avatar: {
      type: String,
      validate: {
        validator: (value) => validator.isURL(value),
        message: 'Невалидный URL',
      },
      default: 'https://www.filmofilia.com/wp-content/uploads/2012/09/The-Hobbit_23.jpg',
    },
    location: {
      type: String,
      default: "Hobbiton, New Zealand"
    },
    about: {
      type: String,
      default: "Hobbit, Fallohide"
    },
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }],
    followings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }],
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts'
    }]
  },
  {
    versionKey: false,
  },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthError('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthError('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
