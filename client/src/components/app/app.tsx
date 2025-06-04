// src/components/app/app.tsx

import React, { JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {MainPage} from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';        // <-- default import
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import {EmptyPage} from '../../pages/empty-page/empty-page';

import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FullOffer } from '../../types/offer';

type AppMainPageProps = {
  rentalOffersCount: number;
  offers:            FullOffer[];
};

function App({ rentalOffersCount, offers }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              rentalOffersCount={rentalOffersCount}
              offers={offers}
            />
          }
        />

        <Route path={AppRoute.Login} element={<LoginPage />} />      {/* <-- default import */}

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Offer}
          element={<OfferPage offers={offers} />}
        />

        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

