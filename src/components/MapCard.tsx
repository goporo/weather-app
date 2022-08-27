import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useDispatch } from "react-redux";

import fetchWeather from "../api/api";
import { updateActual, updateLoading } from "../app/store";
import { IActual } from "../utils/Weather";

export default function HomeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `AIzaSyBYJSp36LFYc-BRUsKz4pJeOBNIImpECLQ`,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [center, setCenter] = useState(
    JSON.parse(localStorage.getItem("coor") as string) || { lat: 44, lng: -80 }
  );
  const dispatch = useDispatch();

  const handleMapClick = (lat: number, lng: number) => {
    setCenter({ lat: lat, lng: lng });
    fetchWeather({ lat: lat, lng: lng })
      .then((res) => {
        if (res.status === 200) {
          dispatch(updateActual(res.data as IActual));
          localStorage.setItem("city", res.data.name);
          localStorage.setItem("coor", JSON.stringify({ lat: lat, lng: lng }));
        }
      })
      .catch((error) => {
        var msg = "City not found!";

        if (error.response.data.cod !== 404) {
          msg = error.response.data.message;
        }
        dispatch(updateActual({}));
      })
      .finally(() => {
        dispatch(updateLoading(false));
      });
  };

  return (
    <GoogleMap
      zoom={3}
      center={center}
      mapContainerClassName="map-container"
      onClick={(props) =>
        handleMapClick(
          props.latLng?.lat() as number,
          props.latLng?.lng() as number
        )
      }
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
