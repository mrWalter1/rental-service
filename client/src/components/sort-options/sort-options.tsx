import React, { JSX,useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SortOffersType } from '../../const';
import { SortOffer } from '../../types/sort';

type SortOptionsProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

export default function SortOptions({
  activeSorting,
  onChange,
}: SortOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const onKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') setIsOpen(false);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={onKeyDown}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOpen}
      >
        {activeSorting}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}
        >
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames(
          'places__options places__options--custom',
          { 'places__options--opened': isOpen }
        )}
      >
        {Object.keys(SortOffersType).map((key) => (
          <li
            key={key}
            className={classNames('places__option', {
              'places__option--active': key === activeSorting,
            })}
            tabIndex={0}
            onClick={() => {
              onChange(key as SortOffer);
              setIsOpen(false);
            }}
          >
            {SortOffersType[key as SortOffer]}
          </li>
        ))}
      </ul>
    </form>
  );
}
