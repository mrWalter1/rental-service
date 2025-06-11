// src/mocks/offers-list.ts

import { OffersList } from '../types/offer'; 

export const offersList: OffersList[] = [
  {
    id:           'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title:        'Wood and stone place',
    type:         'apartment',
    price:        350,
    previewImage: 'photo63.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude:  52.370216,
        longitude: 4.895168,
        zoom:      13,
      },
    },
    location: {
      latitude:  52.3909553943508,
      longitude: 4.85309666406198,
      zoom:      13,
    },
    isFavorite: true,
    isPremium:  false,
    rating:     4.9,
  },

    {
    id:           'd93a2c4c-9ef4-4f48-8e7e-1f8c5708b234',
    title:        'Cozy studio near canal',
    type:         'apartment',
    price:        320,
    previewImage: 'photo51.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude:  52.370216,
        longitude: 4.895168,
        zoom:      13,
      },
    },
    location: {
      latitude:  52.3609553943508,
      longitude: 4.85309666406198,
      zoom:      13,
    },
    isFavorite: true,
    isPremium:  true,
    rating:     4.9,
  },

];

