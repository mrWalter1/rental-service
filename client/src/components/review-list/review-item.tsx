import React, { JSX } from 'react';
import { Review } from '../../types/review';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  // Преобразуем ISO-дату в формат «Month Year» (например, «June 2023»)
  const dateObj = new Date(review.date);
  const formattedDate = dateObj.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={`/img/${review.user.avatarUrl}`}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
        {review.user.isPro && (
          <span className="reviews__user-status">Pro</span>
        )}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
