import { useState } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>;
export function Map() {
  const [markerPos, setMarkerPos] = useState(null);

  const defaultProps = {
    center: { lat: 25.033964, lng: 121.564468 },
    zoom: 14
  };
  return (
    <div className="h-[400px] w-1/2">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={({ lat, lng }) => {
          setMarkerPos({ lat, lng });
        }}
      >
        {markerPos && <Marker lat={markerPos.lat} lng={markerPos.lng} />}
      </GoogleMapReact>
    </div>
  );
}
