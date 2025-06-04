// src/pages/favorites-page/favorites-page.tsx

import React, { JSX } from 'react';
import { FullOffer, OffersList } from '../../types/offer';
import { Logo } from '../../components/logo/logo';
import FavoritesCardList from '../../components/favorites-card-list/favorites-card-list';
import { EmptyPage } from '../empty-page/empty-page';

type FavoritesPageProps = {
  offers: FullOffer[];
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  // Отбираем избранные
  const favoriteOffers: OffersList[] = offers
    .filter((o) => o.isFavorite)
    .map((o) => ({
      id:           o.id,
      title:        o.title,
      type:         o.type,
      price:        o.price,
      previewImage: o.images[0],
      isPremium:    o.isPremium,
      rating:       o.rating,
      // добавляем недостающие поля:
      city:       o.city,
      location:   o.location,
      isFavorite: o.isFavorite
    }));


  if (favoriteOffers.length === 0) {
    return <EmptyPage />;
  }

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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items" key="all">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Favorites</span>
                    </a>
                  </div>
                </div>
                <FavoritesCardList offersList={favoriteOffers} />
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="Rent service logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;