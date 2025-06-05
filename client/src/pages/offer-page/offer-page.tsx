// src/pages/offer-page/offer-page.tsx

import React, { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { FullOffer } from '../../types/offer';
import { Logo } from '../../components/logo/logo';
import {NearPlacesCard} from '../../components/near-places-card/near-places-card';
import { EmptyPage } from '../empty-page/empty-page';

// Динамическая форма для добавления отзыва
import CommentForm from '../../components/comment-form/comment-form';

// import { reviews as allReviews } from '../../mocks/reviews';
// import ReviewList from '../../components/review-list/review-list';

// Компонент «Карта» и соответствующие типы
import Map, { Point } from '../../components/map/map';

type OfferPageProps = {
  offers: FullOffer[];
};

function OfferPage({ offers }: OfferPageProps): JSX.Element {
  // Берём :id из URL
  const { id } = useParams<'id'>();
  if (!id) {
    return <EmptyPage />;
  }

  // Находим текущее объявление
  const offer = offers.find((o) => o.id === id);
  if (!offer) {
    return <EmptyPage />;
  }

  // Обработчик отправки нового отзыва (в данном примере просто логируем в консоль)
  const handleAddReview = (rating: number, comment: string) => {
    console.log('Новый отзыв для оффера', offer.id, { rating, comment });
    // Здесь можно вызывать API или обновлять состояние
  };

  // Собираем «ближайшие» 3 предложения (любой, кроме текущего)
  const nearbyOffers = offers.filter((o) => o.id !== offer.id).slice(0, 3);

  // Преобразуем в массив точек для карты
  const nearbyPoints: Point[] = nearbyOffers.map((o) => ({
    id: o.id,
    location: {
      latitude:  o.location.latitude,
      longitude: o.location.longitude,
      zoom:      o.location.zoom,
    },
  }));

  // Центр карты — координаты текущего объекта
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
              {/* Метка «Premium» */}
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              {/* Название и кнопка «закладки» */}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
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

              {/* Удобства */}
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

              {/* Информация о хосте */}
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

              {/* Блок «Отзывы» */}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>

                {/* Статическая разметка одного отзыва (можно заменить на ReviewList) */}
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>

                {/* Динамическая форма отзыва */}
                <CommentForm onSubmit={handleAddReview} />
              </section>
            </div>
          </div>

          {/* Контейнер для карты */}
          <section className="offer__map map" style={{ height: '300px' }}>
            <Map points={nearbyPoints} center={centerCoords} />
          </section>
        </section>

        {/* Блок «Other places in the neighbourhood» */}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
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
