// adapters/offerAdapter.js
const cityCoordinates = {
  Paris:     { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
  Cologne:   { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
  Brussels:  { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
  Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 13 },
  Hamburg:   { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
  Dusseldorf:{ latitude: 51.2277, longitude: 6.7735, zoom: 13 }
};

const getBaseUrl = () => `${process.env.HOST}:${process.env.PORT || 5000}`;

const adaptOfferToClient = (offer) => {
  const baseUrl = getBaseUrl();
  const cityLoc = cityCoordinates[offer.city] || { latitude:0, longitude:0, zoom:10 };
  let previewImage = offer.previewImage;
  if (previewImage && !previewImage.startsWith('http')) {
    const sep = previewImage.startsWith('/') ? '' : '/';
    previewImage = `${baseUrl}${sep}${previewImage}`;
  }

  return {
    id: String(offer.id),
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: {
      name: offer.city,
      location: cityLoc
    },
    location: {
      latitude: offer.latitude,
      longitude: offer.longitude
    },
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: parseFloat(offer.rating),
    previewImage
  };
};

export { adaptOfferToClient };
