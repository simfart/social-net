require('dotenv').config();

const { MONGO_ADRESS, JWT_SECRET, NODE_ENV } = process.env;
const { PORT = 3000 } = process.env;


module.exports = {
  PORT,
  MONGO_ADRESS: MONGO_ADRESS,
  // MONGO_ADRESS: NODE_ENV === 'production' ? MONGO_ADRESS : 'mongodb://127.0.0.1:27017/social-net',
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'JWT_SECRET',
};
