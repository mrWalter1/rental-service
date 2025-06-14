import React, { JSX } from 'react';
import { CitiesCard, CitiesCardProps } from '../cities-card/cities-card';

export type CitiesCardListProps = {
  offersList: CitiesCardProps[];
  onListItemHover?: (id: string) => void;
};

function CitiesCardList({
  offersList,
  onListItemHover = () => {}
}: CitiesCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list">
      {offersList.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => onListItemHover(offer.id)}
          onMouseLeave={() => onListItemHover('')}
        >
          <CitiesCard {...offer} />
        </div>
      ))}
    </div>
  );
}

export default CitiesCardList;
