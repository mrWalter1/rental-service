import React, { JSX, useEffect, useState } from 'react';
import { Logo } from '../../components/logo/logo';
import CitiesList from '../../components/cities-list/cities-list';
import SortOptions from '../../components/sort-options/sort-options';
import CitiesCardList from '../../components/cities-card-list/cities-card-list';
import Map, { Point } from '../../components/map/map';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { setOffersList } from '../../store/actions';
import { offers as allOffers } from '../../mocks/offers';
import { getOffersByCity, sortOffersByType } from '../../utils';
import { SortOffer } from '../../types/sort';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  // 1) Получаем город и все офферы из Redux
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  // 2) На маунте кладём моковые данные
  useEffect(() => {
    dispatch(setOffersList(allOffers));
  }, [dispatch]);

  // 3) Локальная сортировка
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

  // 4) Фильтруем по городу и сортируем
  const cityOffers = getOffersByCity(selectedCity.name, offers);
  const sortedOffers = sortOffersByType([...cityOffers], activeSort);

  // 5) Отслеживаем, на какой карточке навели
  const [hoveredOfferId, setHoveredOfferId] = useState<string>('');

  // 6) Точки для карты
  const points: Point[] = sortedOffers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  // 7) Центр карты — город
  const centerCoords = selectedCity.location;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left"><Logo /></div>
            <CitiesList />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <b className="places__found">
                {sortedOffers.length} places to stay in {selectedCity.name}
              </b>

              <SortOptions
                activeSorting={activeSort}
                onChange={setActiveSort}
              />

              <CitiesCardList
                offersList={sortedOffers}
                onListItemHover={setHoveredOfferId}
              />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map" style={{ height: '400px' }}>
                <Map
                  points={points}
                  center={centerCoords}
                  activePointId={hoveredOfferId}
                />
              </section>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
