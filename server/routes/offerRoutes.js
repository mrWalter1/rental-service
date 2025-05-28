// routes/offerRoutes.js
import { Router } from 'express';
import upload     from '../middleware/upload.js';
import { getAllOffers, getFullOffer, createOffer, getFavoriteOffers, toggleFavorite } from '../controllers/offerController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = new Router();
router.get('/offers', getAllOffers);

router.get('/offers/:id', getFullOffer);

router.post(
  '/offers',
  upload.fields([
    { name: 'previewImage', maxCount: 1 },
    { name: 'photos',       maxCount: 6 }
  ]),
  createOffer
);

// новый эндпоинт получения избранного:
router.get('/favorite', getFavoriteOffers);

// переключить избранное (нужен токен):
router.post('/favorite/:offerId/:status', authenticateToken, toggleFavorite);

export default router;
