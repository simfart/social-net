const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../models/user');

const { JWT_SECRET } = require('../utils/config');

const { NotFoundError, DuplicateKeyError, ValidationError } = require('../utils/errors');

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

const getUsersMe = (req, res, next) => {
  User
    .findById(req.user._id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Нет пользователя с таким id'));
      }
      res.send({ data: user });
    })
    .catch(next);
};

const updateUsers = (req, res, next, data) => {
  // const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, data, {
    new: true,
    runValidators: true,
  })
    .orFail(new NotFoundError('Нет пользователя с таким id'))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {

      console.log(err)
      // if (err.name === 'ValidationError') {
      //   next(new ValidationError('Переданы некорректные данные при обновлении профиля'));
      // } else if (err.code === 11000) {
      //   next(new DuplicateKeyError());
      // } else {
      //   next(err);
      // }
    });
};
const updateUser = (req, res, next) => {
  const data = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    data,
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      // upsert: true // если пользователь не найден, он будет создан
    }
  )
    .then(user => res.send(user))
    .catch(err => res.status(500).send({ message: "Данные не прошли валидацию. Либо произошло что-то совсем немыслимое" }));
}




const createUser = (req, res, next) => {
  const { email, password, name, lastname, avatar, location, about } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
      lastname,
      avatar,
      location,
      about
    }))
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные при создании пользователя'));
      } else if (err.code === 11000) {
        next(new DuplicateKeyError());
      } else {
        console.log(err)
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const payload = { _id: user.id, email: user.email };
      const token = JWT.sign(payload, JWT_SECRET, { expiresIn: '7d' });
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 7,
          sameSite: 'none',
          SameSite: 'None',
          secure: true,
        });
      res.send({ token });
    })
    .catch(next);
};

const logout = (req, res) => {
  res.clearCookie('jwt', {
    sameSite: 'none',
    SameSite: 'None',
    secure: true,
  }).send({ message: 'Выход' });
};

module.exports = {
  createUser,
  getUsersMe,
  updateUser,
  login,
  logout,
  getUsers
};
