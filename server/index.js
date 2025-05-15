import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import cors from 'cors';
import './models/user.js';
import './models/offer.js';
import './models/review.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Сервер и БД запущены на порте ${PORT}`)
    );
  } catch (e) {
    console.error('Ошибка запуска сервера:', e);
  }
};
start();

app.use(cors());
app.use(express.json());