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

const likeDeletePost = (req, res, next, keyMethod) => {
  Post.findByIdAndUpdate(req.params.postId, keyMethod, { new: true })
    .orFail(new NotFoundError('Карточка с указанным _id не найдена'))
    .then((post) => {
      res.send(post)
    })
    .catch(next)
}

const likePost = (req, res, next) => {
  const keyMethod = { $addToSet: { likes: req.user._id } }
  likeDeletePost(req, res, next, keyMethod)
}

const dislikePost = (req, res, next) => {
  const keyMethod = { $pull: { likes: req.user._id } }
  likeDeletePost(req, res, next, keyMethod)
}

const createComment = (req, res, next) => {
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

const newComment = async (req, res) => {
  // find out which post you are commenting
  const id = req.params.postId
  // get the comment text and record post id
  const comment = new Comment({
    text: req.body.comment,
    post: id,
  })
  // save comment
  await comment.save()
  // get this particular post
  const postRelated = await Post.findById(id)
  // push the comment into the post.comments array
  postRelated.comments.push(comment)
  // save and redirect...
  await postRelated.save(function (err) {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
}

module.exports = {
  getUserPost,
  createPost,
  deletePost,
  getPosts,
  likePost,
  dislikePost,
  newComment,
}
