const router = require('express').Router()
const {
  getUserPost,
  createPost,
  deletePost,
  getPosts,
} = require('../controllers/post')
const { errCreatePost, errPostId } = require('../middlewares/error-celebrate')

router.get('/', getPosts)
router.get('/my', getUserPost)
router.post('/', errCreatePost, createPost)
router.delete('/:postId', errPostId, deletePost)

module.exports = router
