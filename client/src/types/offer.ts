// src/types/offer.ts

export type OfferLocation = {
  latitude:  number;
  longitude: number;
  zoom:      number;
};

export type CityOffer = {
  name:     string;
  location: OfferLocation;
};

export type HostOffer = {
  name:      string;
  avatarUrl: string;
  isPro:     boolean;
};

// Полное описание оффера
export type FullOffer = {
  id:          string;
  title:       string;
  type:        string;
  price:       number;
  city:        CityOffer;
  location:    OfferLocation;
  isFavorite:  boolean;
  isPremium:   boolean;
  rating:      number;
  description: string;
  bedrooms:    number;
  goods:       string[];
  host:        HostOffer;
  images:      string[];
  maxAdults:   number;
};
