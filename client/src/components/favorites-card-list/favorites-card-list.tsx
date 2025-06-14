// src/components/favorites-card-list/favorites-card-list.tsx
import React, { JSX } from 'react';
import { FavoritesCard } from '../favorites-card/favorites-card';
import { OffersList } from '../../types/offer';

export type FavoritesCardListProps = {
  offersList: OffersList[];
};

function FavoritesCardList({ offersList }: FavoritesCardListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offersList.map((offer) => (
        <FavoritesCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          isPremium={offer.isPremium}
          rating={offer.rating}
        />
      ))}
    </div>
  );
}

export default FavoritesCardList;

