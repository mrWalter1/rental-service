// src/components/map/map.tsx
import React, { JSX , useRef, useEffect } from 'react';
import L, { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon   from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  id: string;
  location: Location;
};

type MapProps = {
  points: Point[];
  center: Location;
};

function Map({ points, center }: MapProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  // Настраиваем дефолтные иконки Leaflet при первом рендере
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl:       markerIcon,
      shadowUrl:     markerShadow,
    });
  }, []);

  useEffect(() => {
    if (containerRef.current && mapInstanceRef.current === null) {
      const map = L.map(containerRef.current, {
        center: [center.latitude, center.longitude],
        zoom:   center.zoom,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      points.forEach((point) => {
        L.marker([point.location.latitude, point.location.longitude]).addTo(map);
      });

      mapInstanceRef.current = map;
    } else if (mapInstanceRef.current) {
      // Если карта уже создана, просто меняем центр 
      mapInstanceRef.current.setView(
        [center.latitude, center.longitude],
        center.zoom
      );
    }
  }, [points, center]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default Map;