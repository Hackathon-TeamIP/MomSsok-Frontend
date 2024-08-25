"use client";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Map({ address }: { address: string }) {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  useEffect(() => {
    if (isLoaded && address) {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location;
          setCoordinates({ lat: location.lat(), lng: location.lng() });
          setError(null); // 에러 초기화
        } else {
          console.error("지도 좌표 찾기 에러" + status);
          setError("해당 주소를 찾을 수 없습니다."); // 에러 메시지 설정
        }
      });
    }
  }, [isLoaded, address]);

  console.log("address", address);

  if (loadError || error) {
    console.error("Error loading Google Maps API:", loadError, error);
    return null;
  }

  return (
    <div className="flex flex-col">
      {coordinates ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "200px",
            marginTop: "16px",
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
          options={{ streetViewControl: false }}
          center={coordinates}
          zoom={16}
        >
          <Marker position={coordinates} />
        </GoogleMap>
      ) : (
        !error && (
          <div className="w-full h-[200px] mt-4 rounded-[10px] bg-[#e0e0e0] animate-pulse" />
        )
      )}
    </div>
  );
}
