const { NotFoundError } = require('../utils/errors');

const routeNotFound = (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
};

module.exports = routeNotFound;
