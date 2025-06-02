// src/mocks/offers.ts

import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
    type: 'apartment',
    price: 370,
    images: ['20.jpg','17.jpg','16.jpg','15.jpg','2.jpg','7.jpg','1.jpg'],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.86861,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Heating','Wi-Fi','Fridge','Laptop friendly workspace',
      'Baby seat','Air conditioning','Washer','Towels',
      'Dishwasher','Kitchen','Washing machine','Breakfast','Coffee machine'
    ],
    host: {
      isPro:   true,
      name:    'Angelina',
      avatarUrl: 'avatar-angelina.jpg'
    },
    isPremium:  false,
    isFavorite: true,
    rating:    4.9,
    bedrooms:  2,
    maxAdults: 3
  },

];
