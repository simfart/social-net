const router = require('express').Router();

const { getUsersMe, updateUser, getUsers } = require('../controllers/user');
const { errUpdateUser } = require('../middlewares/error-celebrate');

router.get('/', getUsers);
router.get('/me', getUsersMe);
router.patch('/me', errUpdateUser, updateUser);

module.exports = router;
