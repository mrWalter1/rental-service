import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import cors from 'cors';
import router from './routes/index.js';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import path        from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ура! Всё заработало!' });
});

app.use('/', router);

app.use(ErrorHandlingMiddleware);

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


