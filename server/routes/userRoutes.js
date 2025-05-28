// routes/userRoutes.js
import { Router }            from 'express';
import upload                from '../middleware/upload.js';
import { registration }      from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();

// Регистрация (без токена)
router.post('/register', upload.single('avatar'), registration);

// Логин
router.post('/login', login);

// Проверить авторизацию и получить данные
router.get('/login', authenticateToken, checkAuth);

// Выход
router.post('/logout', authenticateToken, logout);

export default router;
