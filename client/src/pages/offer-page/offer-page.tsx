// src/pages/offer-page/offer-page.tsx

import React, { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Logo } from '../../components/logo/logo';
import {NearPlacesCard} from '../../components/near-places-card/near-places-card';
import { EmptyPage } from '../empty-page/empty-page';
import CommentForm from '../../components/comment-form/comment-form';
import Map, { Point } from '../../components/map/map';

function OfferPage(): JSX.Element {
  // 1. Получаем :id из URL
  const { id } = useParams<'id'>();
  const offers = useAppSelector((state) => state.offers);

  if (!id) {
    return <EmptyPage />;
  }

  // 2. Находим текущее объявление
  const offer = offers.find((o) => o.id === id);
  if (!offer) {
    return <EmptyPage />;
  }

  // 3. Обработчик отправки нового отзыва
  const handleAddReview = (rating: number, comment: string) => {
    console.log('Новый отзыв для оффера', offer.id, { rating, comment });
  };

  // 4. Собираем «соседние» офферы (первые 3 с другим id)
  const nearbyOffers = offers.filter((o) => o.id !== offer.id).slice(0, 3);

  // 5. Точки для карты
  const nearbyPoints: Point[] = nearbyOffers.map((o) => ({
    id: o.id,
    location: {
      latitude:  o.location.latitude,
      longitude: o.location.longitude,
      zoom:      o.location.zoom,
    },
  }));

  // 6. Центр карты — текущий оффер
  const centerCoords = {
    latitude:  offer.location.latitude,
    longitude: offer.location.longitude,
    zoom:      16,
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          {/* Галерея фотографий */}
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((img) => (
                <div key={img} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={`/img/${img}`}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {/* Premium */}
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              {/* Название и закладка */}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              {/* Рейтинг */}
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>

              {/* Характеристики */}
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              {/* Цена */}
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              {/* Внутренности */}
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((g) => (
                    <li key={g} className="offer__inside-item">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Хост */}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              {/* Отзывы */}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    {/* ...статичная разметка... */}
                  </li>
                </ul>
                <CommentForm onSubmit={handleAddReview} />
              </section>
            </div>
          </div>

          {/* Карта */}
          <section className="offer__map map" style={{ height: '300px' }}>
            <Map points={nearbyPoints} center={centerCoords} />
          </section>
        </section>

        {/* Other places */}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((o) => (
                <NearPlacesCard key={o.id} offer={o} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
