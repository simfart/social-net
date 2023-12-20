const router = require('express').Router();
const {
  getMovie,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');
const { errCreateMovie, errMovieId } = require('../middlewares/error-celebrate');

router.get('/', getMovie);
router.post('/', errCreateMovie, createMovie);
router.delete('/:movieId', errMovieId, deleteMovie);

module.exports = router;
