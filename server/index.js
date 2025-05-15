import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import cors from 'cors';
import router from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ура! Всё заработало!' });
});

app.use('/', router);

async function start() {
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


