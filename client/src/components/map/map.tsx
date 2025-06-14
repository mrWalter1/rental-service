// src/components/map/map.tsx
import React, { JSX, useRef, useEffect } from 'react';
import L, { Map as LeafletMap, Icon, LayerGroup } from 'leaflet';
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
  activePointId?: string;
};

function Map({ points, center, activePointId }: MapProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef       = useRef<LeafletMap | null>(null);
  const markersGrp  = useRef<LayerGroup>(L.layerGroup());

  // иконки
  const defaultIcon = new Icon({
    iconUrl:       markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl:     markerShadow,
    iconSize:      [25, 41],
    iconAnchor:    [12, 41],
  });
  const activeIcon = new Icon({
    iconUrl:       '/img/pin-active.svg',
    iconRetinaUrl: '/img/pin-active.svg',
    shadowUrl:     markerShadow,
    iconSize:      [25, 41],
    iconAnchor:    [12, 41],
  });

  // 1) инициализация Leaflet-контейнера и группы маркеров
  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }
    const map = L.map(containerRef.current, {
      center: [center.latitude, center.longitude],
      zoom:   center.zoom,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    markersGrp.current.addTo(map);
    mapRef.current = map;
  }, []); // пустой массив: только один раз

  // 2) когда center меняется — смещаем карту
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([center.latitude, center.longitude], center.zoom);
    }
  }, [center]);

  // 3) когда points или activePointId меняются — перерисовываем маркеры,
  //    но не трогаем центр
  useEffect(() => {
    const grp = markersGrp.current;
    grp.clearLayers();
    points.forEach((pt) => {
      L.marker(
        [pt.location.latitude, pt.location.longitude],
        { icon: pt.id === activePointId ? activeIcon : defaultIcon }
      ).addTo(grp);
    });
  }, [points, activePointId]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default Map;
