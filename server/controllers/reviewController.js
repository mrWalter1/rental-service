// server/controllers/reviewController.js
import ApiError from '../error/ApiError.js';
import { Review }  from '../models/review.js';
import { User }     from '../models/user.js';
import { adaptReviewToClient } from '../adapters/reviewAdapter.js';

// 1) Добавление нового отзыва
export const addReview = async (req, res, next) => {
  try {
    const { comment, rating } = req.body;
    const offerId = req.params.offerId;
    const userId  = req.user.id; // из authenticateToken

    if (!comment || !rating || !offerId) {
      return next(ApiError.badRequest('Не хватает данных для комментария'));
    }

    const review = await Review.create({
      text:       comment,
      rating,
      authorId:   userId,
      OfferId:    offerId    // поле должно называться именно offerId
    });

    return res.status(201).json(review);
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Ошибка при добавлении комментария'));
  }
};

// 2) Получение списка отзывов по офферу
export const getReviewsByOfferId = async (req, res, next) => {
  try {
    const offerId = req.params.offerId;
    const reviews = await Review.findAll({
      where: { OfferId: offerId },
      include: [{ model: User, as: 'author' }],
      order: [['publishDate', 'DESC']]
    });

    const adapted = reviews.map(adaptReviewToClient);
    return res.status(200).json(adapted);
  } catch (error) {
    console.error(error);
    return next(ApiError.internal('Ошибка при получении комментариев'));
  }
};
