import { useRef, useEffect, useState } from "react";
import { Map, Marker } from "maplibre-gl";

type MapHookReturnType = {
  mapContainer: React.RefObject<HTMLDivElement>;
};

function useMap(): MapHookReturnType {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [lngLat, setLngLat] = useState<[number, number] | null>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      const initialMap = new Map({
        container: mapContainer.current,
        style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
        center: [139.767, 35.6812], // 初期の中心点（東京）
        zoom: 14,
      });
      setMap(initialMap);
    }

    if (map && lngLat) {
      new Marker().setLngLat(lngLat).addTo(map);
      map.flyTo({ center: lngLat });
    }

    return () => {
      map?.remove();
    };
  }, [map, lngLat]);

  useEffect(() => {
    const getCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const { latitude, longitude } = position.coords;
        setLngLat([longitude, latitude]);
      },
      (error) => {
        console.log('位置情報の取得に失敗', error)
      }
      );
    };

    getCurrentPosition();
  }, []);
  return { mapContainer };
}

export default useMap;
