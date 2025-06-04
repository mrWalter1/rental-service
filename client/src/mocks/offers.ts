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
    'id': 'bag36a0e-3f92-446d-9a68-cb64b5d38e2b',
    'title': 'stone apps',
    'description': 'A new spacious appartment.',
    'type': 'apartment',
    'price': 320,
    'images': [
      'photo51.jpg',
      'photo52.jpg',
      'photo63.jpg',
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 44.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 44.85661,
      'longitude': 2.351499,
      'zoom': 16
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
