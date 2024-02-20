const router = require('express').Router()
const {
  getUserPost,
  createPost,
  deletePost,
  getPosts,
  likePost,
  dislikePost,
  newComment,
} = require('../controllers/post')
const { errCreatePost, errPostId } = require('../middlewares/error-celebrate')

router.get('/', getPosts)
router.get('/my', getUserPost)
router.post('/', errCreatePost, createPost)
router.delete('/:postId', errPostId, deletePost)
router.put('/:postId/likes', errPostId, likePost)
router.delete('/:postId/likes', errPostId, dislikePost)
router.post('/:postId/comment', newComment)

module.exports = router
