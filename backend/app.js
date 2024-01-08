const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, MONGO_ADRESS } = require('./utils/config');

const app = express();
// mongoose.connect('mongodb+srv://artzina7:S1fZRT1rOGuFwpIi@cluster0.hpavfbe.mongodb.net/');
mongoose.connect(MONGO_ADRESS)

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:27017',
  ],
  method: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,

}));


app.use(requestLogger);

app.use(express.json());
app.use(cookieParser());
app.use('/', router)
app.use(limiter);
app.use(helmet());



app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT);
