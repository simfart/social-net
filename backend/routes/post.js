const router = require('express').Router()
const {
  getUserPost,
  createPost,
  deletePost,
  getPosts,
  likePost,
  dislikePost,
} = require('../controllers/post')
const { errCreatePost, errPostId } = require('../middlewares/error-celebrate')

router.get('/', getPosts)
router.get('/my', getUserPost)
router.post('/', errCreatePost, createPost)
router.delete('/:postId', errPostId, deletePost)
router.put('/:postId/likes', errPostId, likePost)
router.delete('/:postId/likes', errPostId, dislikePost)

module.exports = router
