import { MapContainer } from "react-leaflet";
import useStyles from "./Section4.style";
import ProvinsiLayer from "./ProvinsiLayer";
import KabupatenLayer from "./KabupatenLayer";
import useFilterStore from "../../hooks/useFilterStore";

const MapComponent: React.FC = () => {
  const { classes, cx } = useStyles();
  const displayRawan = useFilterStore((state) => state.displayRawan);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      zoomControl={false}
      attributionControl={false}
      className={cx(classes.map, "w-full")}
      doubleClickZoom={false}
      boxZoom={false}
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <ProvinsiLayer />
      {displayRawan && <KabupatenLayer />}
    </MapContainer>
  );
};

export default MapComponent;
