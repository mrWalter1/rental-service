import React, { JSX } from 'react';
import { Review } from '../../types/review';
import ReviewItem from './review-item';

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((r) => (
        <ReviewItem key={r.id} review={r} />
      ))}
    </ul>
  );
}

export default ReviewList;
