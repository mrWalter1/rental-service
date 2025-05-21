// routes/offerRoutes.js
import { Router } from 'express';
import upload     from '../middleware/upload.js';
import { getAllOffers, createOffer, getFullOffer } from '../controllers/offerController.js';

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

export default router;
