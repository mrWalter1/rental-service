// src/components/cities-list/cities-list.tsx
import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import { CITIES_LOCATION } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/actions';
import { AppRoute } from '../../const';
import type { CityLocation } from '../../const';

export default function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city: CityLocation) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => dispatch(changeCity(city))}
        >
          <Link
            to={AppRoute.Main}
            className={`locations__item-link tabs__item ${
              city.name === selectedCity.name ? 'tabs__item--active' : ''
            }`}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
