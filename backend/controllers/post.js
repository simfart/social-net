const Post = require('../models/post');

const { AccessError, NotFoundError, ValidationError } = require('../utils/errors');

const getPost = (req, res, next) => {
  const owner = req.user._id;
  Post.find({ owner })
    .then((post) => res.status(200).send(post))
    .catch(next);
};

const createPost = (req, res, next) => {
  const {
    country, director, duration, year, description,
    image, trailer, nameRU, nameEN, thumbnail, postId,
  } = req.body;
  const owner = req.user._id;

  Post.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    postId,
    owner,
  })
    .then((post) => res.status(201).send(post))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные при добавлении фильма '));
      } else {
        next(err);
      }
    });
};

const deletePost = (req, res, next) => {
  Post.findById(req.params.postId)
    .orFail(() => new NotFoundError('Фильм не найден'))
    .then((post) => {
      if (post.owner.toString() !== req.user._id) {
        return next(new AccessError());
      }
      return Post.findByIdAndDelete(req.params.postId)
        .then(() => res.send(post));
    })
    .catch(next);
};

module.exports = {
  getPost,
  createPost,
  deletePost,
};
