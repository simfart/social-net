const JWT = require('jsonwebtoken');

const { AuthError } = require('../utils/errors');
const { NODE_ENV, JWT_SECRET } = process.env;


// const auth = (req, res, next) => {
//   const token = req.payload.jwt
//   // const token = req.cookies.jwt;
//   let payload;
//   try {
//     payload = JWT.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
//   } catch {
//     return next(new AuthError('Необходима авторизация'));
//   }

//   req.user = payload; // записываем пейлоуд в объект запроса

//   return next(); // пропускаем запрос дальше
// };



const jwt = require('jsonwebtoken');

const handleAuthError = (res) => {
  res
    .status(401)
    .send({ message: 'Необходима авторизация' });
};

const extractBearerToken = (header) => {
  return header.replace('Bearer ', '');
};

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, 'super-strong-secret');
  } catch (err) {
    return handleAuthError(res);
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};


module.exports = auth;