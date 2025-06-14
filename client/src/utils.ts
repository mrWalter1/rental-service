// src/utils.ts

import { CityLocation } from './const';
import { OffersList } from './types/offer';
import { SortOffer } from './types/sort';

// Поиск города по имени
export function getCity(
  name: string,
  cities: ReadonlyArray<CityLocation>
): CityLocation {
  return cities.find((c) => c.name === name)!;
}

// Фильтр предложений по городу
export function getOffersByCity(
  cityName: string | undefined,
  offers: OffersList[]
): OffersList[] {
  return cityName ? offers.filter((o) => o.city.name === cityName) : offers;
}

// Сортировка предложений
export function sortOffersByType(
  offers: OffersList[],
  type: SortOffer
): OffersList[] {
  switch (type) {
    case 'PriceToHigh':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'PriceToLow':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'TopRated':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
