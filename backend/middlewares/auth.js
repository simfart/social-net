const JWT = require('jsonwebtoken');

const { AuthError } = require('../utils/errors');
const { JWT_SECRET } = require('../utils/config');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = JWT.verify(token, JWT_SECRET);
  } catch {
    return next(new AuthError('Необходима авторизация'));
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  return next(); // пропускаем запрос дальше
};
module.exports = auth;
