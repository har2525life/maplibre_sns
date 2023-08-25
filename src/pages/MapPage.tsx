import useMap from "../hooks/useMAp";

function MapPage() {
  const { mapContainer } = useMap();

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "100vh" }}></div>
  );
}

export default MapPage;
