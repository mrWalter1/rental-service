import { Offer } from '../models/offer.js';

export async function getAllOffers(req, res, next) {
  try {
    const offers = await Offer.findAll();
    res.status(200).json(offers);
  } catch (error) {
    console.error('Не удалось получить список предложений:', error);
    next(error);
  }
}
