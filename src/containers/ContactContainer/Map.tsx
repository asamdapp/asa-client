import React, { FC, useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import useTranslation from 'next-translate/useTranslation';
import { IconArrowGuide } from '@tabler/icons';

import googleMapsImage from 'assets/images/navigator/google-maps.png';
import mapMdImage from 'assets/images/navigator/mapmd.png';
import wazeImage from 'assets/images/navigator/waze.png';
import yandexImage from 'assets/images/navigator/yandex.png';

interface IProps {}

const Map: FC<IProps> = ({ position, routes }: any): JSX.Element => {
  const { t } = useTranslation();

  const [positionState, setPosition] = useState<LatLngExpression>(position);
  const mapRef = useRef<any>();

  useEffect(() => {
    const map = mapRef.current ? mapRef.current._map : null;
    if (map) {
      map.flyTo(position);
    }
    setPosition(position);
  }, [position]);

  return (
    <>
      <div className="relative lg:h-[60vh] sm:h-[40vh] h-[30vh]  w-full z-10">
        <MapContainer
          center={positionState}
          zoom={17}
          scrollWheelZoom={true}
          className="!h-full rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker ref={mapRef} position={positionState} />
        </MapContainer>
      </div>

      <div className="flex md:flex-row flex-col gap-5 items-center justify-between bg-white p-5 rounded-xl mt-5">
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          <IconArrowGuide size={24} />
          <div>{t('common:view_route')}:</div>
        </div>

        <div className="flex items-center justify-center gap-7 flex-wrap">
          <a
            target="_blank"
            rel="noreferrer"
            href={routes?.googleMaps}
            className="flex-none transition hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={googleMapsImage.src} alt="Google Maps" className="h-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={routes?.mapMd}
            className="flex-none transition hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mapMdImage.src} alt="Map.md" className="h-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={routes?.waze}
            className="flex-none transition hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wazeImage.src} alt="Waze" className="h-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={routes?.yandex}
            className="flex-none transition hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={yandexImage.src} alt="Yandex Navi" className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Map;
