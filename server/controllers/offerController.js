import { Offer } from '../models/offer.js';
import { User  } from '../models/user.js';
import ApiError from '../error/ApiError.js';
import { adaptOfferToClient } from '../adapters/offerAdapter.js';

export async function getAllOffers(req, res, next) {
  try {
    const offers = await Offer.findAll();
    const adapted = offers.map(adaptOfferToClient);

    res.status(200).json(adapted);
  } catch (error) {
    next(ApiError.internal('Не удалось получить список предложений'));
  }
}

export async function createOffer(req, res, next) {
  try {
    const {
      title, description, publishDate, city,
      isPremium, isFavorite, rating, type, rooms,
      guests, price, features, commentsCount,
      latitude, longitude, userId
    } = req.body;

    if (!req.files?.previewImage?.length) {
      return next(ApiError.badRequest('Превью изображение обязательно'));
    }
    const previewImagePath = `/static/${req.files.previewImage[0].filename}`;

    let processedPhotos = [];
    if (req.files.photos) {
      processedPhotos = req.files.photos.map(f => `/static/${f.filename}`);
    }

    let parsedFeatures = [];
    if (features) {
      try { parsedFeatures = JSON.parse(features); }
      catch { parsedFeatures = features.split(','); }
    }

    const offer = await Offer.create({
      title,
      description,
      publishDate,
      city,
      previewImage: previewImagePath,
      photos: processedPhotos,
      isPremium,
      isFavorite,
      rating,
      type,
      rooms,
      guests,
      price,
      features: parsedFeatures,
      commentsCount,
      latitude,
      longitude,
      authorId: userId
    });

    return res.status(201).json(offer);
  } catch (error) {
    next(ApiError.internal('Не удалось добавить предложение: ' + error.message));
  }
}

export async function getFullOffer(req, res, next) {
  try {
    const id = req.params.id;
    const offer = await Offer.findByPk(id, {
      include: { model: User, as: 'author' }
    });
    if (!offer) {
      return next(ApiError.badRequest('Offer not found'));
    }
    const adapted = adaptOfferToClient(offer);
    // Добавим данные об авторе
    adapted.author = {
      id:       String(offer.author.id),
      email:    offer.author.email,
      username: offer.author.username,
      avatar:   `${process.env.HOST}:${process.env.PORT}${offer.author.avatar}`
    };
    res.status(200).json(adapted);
  } catch (error) {
    next(ApiError.internal(error.message));
  }
}
