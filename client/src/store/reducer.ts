import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffersList } from './actions';
import { CITIES_LOCATION } from '../const';
import { getCity } from '../utils';
import {  CityOffer } from '../types/offer';
import { FullOffer } from '../types/offer';

const defaultCity: CityOffer = getCity('Paris', CITIES_LOCATION);

interface OffersState {
  city: CityOffer;
  offers: FullOffer[];
}
const initialState: OffersState = {
  city: defaultCity,
  offers: [],  // FullOffer[]
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersList, (state, action) => {
      state.offers = action.payload;
    });
});
