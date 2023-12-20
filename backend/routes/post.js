const router = require('express').Router();
const {
  getPost,
  createPost,
  deletePost,
} = require('../controllers/post');
const { errCreatePost, errPostId } = require('../middlewares/error-celebrate');

router.get('/', getPost);
router.post('/', errCreatePost, createPost);
router.delete('/:postId', errPostId, deletePost);

module.exports = router;
