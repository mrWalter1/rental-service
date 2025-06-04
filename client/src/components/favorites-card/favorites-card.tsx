// src/components/favorites-card/favorites-card.tsx
import React, { JSX } from 'react';
export type FavoritesCardProps = {
  id:           string; // можно оставить, но употребить, например, в Link
  title:        string;
  type:         string;
  price:        number;
  previewImage: string;
  isPremium:    boolean;
  rating:       number;
};

function FavoritesCard({
  id,
  title,
  type,
  price,
  previewImage,
  isPremium,
  rating
}: FavoritesCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="favorites__card-mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${id}`}>{/* Используем id для ссылки */}
          <img
            className="place-card__image"
            src={`/img/${previewImage}`}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { FavoritesCard };
