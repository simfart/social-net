const Post = require('../models/post')

const {
  AccessError,
  NotFoundError,
  ValidationError,
} = require('../utils/errors')

const getUserPost = (req, res, next) => {
  const owner = req.user._id
  Post.find({ owner })
    .then((post) => res.status(200).send(post))
    .catch(next)
}

const getPosts = (req, res, next) => {
  Post.find({})
    .populate('owner')
    .then((post) => res.send(post))
    .catch(next)
}

const createPost = (req, res, next) => {
  const { description, image, video } = req.body
  const owner = req.user._id

  Post.create({ description, image, video, owner })
    .then((post) => res.status(201).send(post))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.log(err)
        next(
          new ValidationError(
            'Переданы некорректные данные при добавлении фильма ',
          ),
        )
      } else {
        next(err)
      }
    })
}

const deletePost = (req, res, next) => {
  Post.findById(req.params.postId)
    .orFail(() => new NotFoundError('Фильм не найден'))
    .then((post) => {
      if (post.owner.toString() !== req.user._id) {
        return next(new AccessError())
      }
      return Post.findByIdAndDelete(req.params.postId).then(() =>
        res.send(post),
      )
    })
    .catch(next)
}

module.exports = {
  getUserPost,
  createPost,
  deletePost,
  getPosts,
}
