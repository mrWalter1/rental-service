// src/const.ts

export const AppRoute = {
  Main:      '/',
  Login:     '/login',
  Favorites: '/favorites',
  Offer:     '/offer/:id',
  
} as const;


export const Setting = {
  rentalOffersCount: 312,
} as const;


export const AuthorizationStatus = {
  Auth:   'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown:'UNKNOWN',
} as const;
