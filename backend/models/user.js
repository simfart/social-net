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
