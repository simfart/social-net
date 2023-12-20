const router = require('express').Router();

const { getUsersMe, updateUser } = require('../controllers/user');
const { errUpdateUser } = require('../middlewares/error-celebrate');

router.get('/me', getUsersMe);
router.patch('/me', errUpdateUser, updateUser);

module.exports = router;
