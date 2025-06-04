// src/components/favorites-card-list/favorites-card-list.tsx
import React, { JSX } from 'react';
import { FavoritesCard } from '../favorites-card/favorites-card';
import { OffersList } from '../../types/offer';

// Тип элемента списка избранных: переиспользуем OffersList (previewImage/price/type и т.д.)
export type FavoritesOffersList = OffersList;

export type FavoritesCardListProps = {
  offersList: FavoritesOffersList[];
};

function FavoritesCardList({ offersList }: FavoritesCardListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offersList.map((item) => (
        <FavoritesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          previewImage={item.previewImage}
          isPremium={item.isPremium}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default FavoritesCardList;
