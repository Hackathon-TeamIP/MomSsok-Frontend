"use client";

import { GeoIcon } from "@/shared/components/Icons";
import { useState } from "react";

export default function CurrentLocationButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCurrentPosition = () => {
    setLoading(true);

    const options = {
      enableHighAccuracy: false, // 위치 정확도
      timeout: 5000, // 타임아웃 설정
      maximumAge: Infinity, // 캐싱 처리
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // 성공
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`테스트- 위도:${latitude} 경도: ${longitude}`);

          const currentPosition = { lat: latitude, lng: longitude };

          // 현재 위치로 지도 이동 등의 추가 작업을 여기에 수행

          setLoading(false);
          return currentPosition;
        },
        // 실패
        (error) => {
          alert(
            `현재 위치를 가져올 수 없습니다. 위치 정보 제공 허용(동의) 해주세요`,
          );
          console.error(error);
          setLoading(false);
        },
        options,
      );
    } else {
      console.error("이 브라우저는 Geolocation을 지원하지 않습니다.");
      setLoading(false);
    }
  };

  return (
    <>
      <GeoIcon
        onClick={handleCurrentPosition}
        color="#888"
        className="shrink-0 cursor-pointer"
      />
    </>
  );
}
