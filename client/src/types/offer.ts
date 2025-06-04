// src/types/offer.ts

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
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

export type FullOffer = {
  id:           string;
  title:        string;
  description:  string;
  publishDate:  string;
  city:         CityOffer;
  previewImage: string;
  images:       string[];
  isPremium:    boolean;
  isFavorite:   boolean;
  rating:       number;
  type:         string;
  bedrooms:     number;
  maxAdults:    number;
  price:        number;
  goods:        string[];
  host:         HostOffer;
  location:     OfferLocation;
};

// Вставляем ниже экспорт для OffersList
export type OffersList = {
  id:           string;
  title:        string;
  type:         string;
  price:        number;
  previewImage: string;
  city:         CityOffer;
  location:     OfferLocation;
  isFavorite:   boolean;
  isPremium:    boolean;
  rating:       number;
};
