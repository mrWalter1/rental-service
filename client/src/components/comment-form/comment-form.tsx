// src/components/comment-form/comment-form.tsx
import React, { useState, ChangeEvent, FormEvent ,JSX } from 'react';

type CommentFormProps = {
  onSubmit: (rating: number, comment: string) => void;
};

function CommentForm({ onSubmit }: CommentFormProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>('');

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(evt.target.value);
  };

  const isSubmitEnabled = rating > 0 && commentText.length >= 50;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (isSubmitEnabled) {
      onSubmit(rating, commentText);
      setRating(0);
      setCommentText('');
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                star === 5
                  ? 'perfect'
                  : star === 4
                  ? 'good'
                  : star === 3
                  ? 'not bad'
                  : star === 2
                  ? 'badly'
                  : 'terribly'
              }
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentText}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitEnabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
