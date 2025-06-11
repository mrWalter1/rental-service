import { Review } from '../types/review';

const reviews: Review[] = [
  {
    id: '463623e8-eecc-42a2-b2fc-797a29965230',
    date: '2023-06-29T21:00:00.465Z',
    comment: 'The room was spacious and clean. The pool looked nothing like the photos.',
    rating: 4,
    user: {
      name: 'Isaac',
      avatarUrl: 'avatar-angelina.jpg', 
      isPro: true,
    },
  },
  {
    id: 'f6a1b8c2-9a1d-4baf-9e72-1234abcd5678',
    date: '2023-05-15T15:30:00.000Z',
    comment: 'Great location, very friendly host. Would stay again!',
    rating: 5,
    user: {
      name: 'Sophia',
      avatarUrl: 'avatar-angelina.jpg',
      isPro: false,
    },
  },

];

export { reviews };
