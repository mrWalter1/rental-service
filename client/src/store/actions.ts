import { createAction } from '@reduxjs/toolkit';
import { CityOffer } from '../types/offer';
import { FullOffer } from '../types/offer';

export const changeCity = createAction<CityOffer>('offers/changeCity');
export const setOffersList = createAction<FullOffer[]>('offers/setOffersList');