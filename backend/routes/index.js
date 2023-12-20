const router = require('express').Router();

const userRoutes = require('./user');
const postRoutes = require('./post');
const errRouteNotFound = require('./routeNotFound');
const { createUser, login, logout } = require('../controllers/user');
const auth = require('../middlewares/auth');
const { errCreateUser, errLogin } = require('../middlewares/error-celebrate');

router.post('/signin', errLogin, login);
router.post('/signup', errCreateUser, createUser);
router.get('/signout', auth, logout);

router.use('/users', auth, userRoutes);
router.use('/posts', auth, postRoutes);
router.use('*', auth, errRouteNotFound);

module.exports = router;
