// src/components/app/app.tsx

import React, { JSX, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage }    from '../../pages/main-page/main-page';
import LoginPage       from '../../pages/login-page/login-page';
import FavoritesPage   from '../../pages/favorites-page/favorites-page';
import OfferPage       from '../../pages/offer-page/offer-page';
import { EmptyPage }   from '../../pages/empty-page/empty-page';

import { PrivateRoute }        from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setOffersList } from '../../store/actions';
import { offers as allOffers } from '../../mocks/offers';
function App(): JSX.Element {
    const dispatch = useAppDispatch();
      useEffect(() => {
    dispatch(setOffersList(allOffers));
  }, [dispatch]);

    
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница */}
        <Route path={AppRoute.Main} element={<MainPage />} />

        {/* Логин */}
        <Route path={AppRoute.Login} element={<LoginPage />} />

        {/* Избранное (защищённый маршрут) */}
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />

        {/* Описание конкретного оффера */}
        <Route path={AppRoute.Offer} element={<OfferPage />} />

        {/* 404 */}
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
