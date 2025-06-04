// src/mocks/offers-list.ts

import { OffersList } from '../types/offer'; // <-- из types

export const offersList: OffersList[] = [
  {
    id:           'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title:        'Wood and stone place',
    type:         'apartment',
    price:        350,
    previewImage: 'photo63.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude:  48.85661,
        longitude: 2.351499,
        zoom:      13,
      },
    },
    location: {
      latitude:  48.86861,
      longitude: 2.342499,
      zoom:      16,
    },
    isFavorite: true,
    isPremium:  false,
    rating:     4.9,
  },

    {
    id:           'bag36a0e-3f92-446d-9a68-cb64b5d38e2b',
    title:        'stone apps',
    type:         'apartment',
    price:        320,
    previewImage: 'photo51.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude:  44.85661,
        longitude: 2.351499,
        zoom:      13,
      },
    },
    location: {
      latitude:  44.85661,
      longitude: 2.351499,
      zoom:      16,
    },
    isFavorite: true,
    isPremium:  true,
    rating:     4.9,
  },
  // … ещё 3-4 объекта OfferList
];

