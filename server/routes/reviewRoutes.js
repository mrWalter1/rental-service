// server/routes/reviewRoutes.js
import { Router } from 'express';
import { addReview, getReviewsByOfferId } from '../controllers/reviewController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();

// GET  /comments/:offerId — список отзывов
router.get('/:offerId', getReviewsByOfferId);

// POST /comments/:offerId — добавить отзыв (нужен токен)
router.post('/:offerId', authenticateToken, addReview);

export default router;
