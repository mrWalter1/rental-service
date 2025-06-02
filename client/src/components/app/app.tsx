// src/components/app/app.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage}      from '../../pages/main-page/main-page';
import { LoginPage }    from '../../pages/login-page/login-page';
import { FavoritesPage }from '../../pages/favorites-page/favorites-page';
import { OfferPage  }   from '../../pages/offer-page/offer-page';
import { EmptyPage }    from '../../pages/empty-page/empty-page';
import { AppRoute }  from '../../const';
import React, { JSX } from 'react';
import { PrivateRoute } from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

type AppMainPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              {/* TODO: вместо NO_AUTH передавать реальный статус из состояния */}
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
