// src/components/logo/logo.tsx

import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React, { JSX } from 'react';

function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Main} className="header__logo-link">
      <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
    </Link>
  );
}

export { Logo };
