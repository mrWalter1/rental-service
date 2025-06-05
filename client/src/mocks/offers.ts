// src/mocks/offers.ts

import { FullOffer } from '../types/offer';

export const offers: FullOffer[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
    type: 'apartment',
    price: 350,
    images: ['photo63.jpg', 'room.jpg','photo51.jpg',],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 13,
    },
    goods: [
      'Heating', 'Wi-Fi', 'Fridge', 'Laptop friendly workspace',
      'Baby seat', 'Air conditioning', 'Washer', 'Towels',
      'Dishwasher', 'Kitchen', 'Washing machine', 'Breakfast', 'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
    publishDate: '',
    previewImage: 'photo63.jpg'
  },

  {
    'id': 'd93a2c4c-9ef4-4f48-8e7e-1f8c5708b234',
    'title': 'Cozy studio near canal',
    'description': 'A new spacious appartment.',
    'type': 'apartment',
    'price': 320,
    'images': [
      'photo51.jpg',
      'photo52.jpg',
      'photo63.jpg',
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 13
    },
    'goods': [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    'host': {
      'isPro': true,
      'name': 'kek',
      'avatarUrl': 'avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 4,
    'maxAdults': 6,
    publishDate: '',
    previewImage: 'room.jpg'
  },

];
