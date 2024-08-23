import type { SpaceDetail } from "@/shared/types/space";

export const data: SpaceDetail = {
  id: 1,
  name: "성북구 벌집어린이",
  description: "동화 속 오두막같은 키즈카페",
  reviewCount: 112,
  rating: 4.7,
  imageUrl: "https://placehold.co/200",
  isLiked: true,
  tags: [
    { id: 1, name: "휠체어 입장 가능" },
    { id: 2, name: "오늘 예약" },
    { id: 3, name: "4세~7세" },
  ],
  images: [{ id: 1, url: "https://placehold.co/200" }], // 캐러셀일 경우
  isBookmarked: true,
  likeCount: 120,
  info: [
    {
      id: 1,
      title: "주소",
      description: "서울특별시 중랑구 용마산로 209 공공기여시설1층",
    },
    {
      id: 2,
      title: "전화",
      description: "02-2241-0790, 02-2241-0791",
    },
    {
      id: 3,
      title: "운영일",
      description: "화요일~일요일",
    },
  ],
  accessInfo: [
    {
      id: 1,
      title: "휠체어 입장 가능",
      icon: "https://placehold.co/22x22",
      available: true,
    },
    {
      id: 2,
      title: "엘리베이터 있음",
      icon: "https://placehold.co/22x22",
      available: true,
    },
    {
      id: 3,
      title: "승강기",
      icon: "https://placehold.co/22x22",
      available: false,
    },
    {
      id: 4,
      title: "장애인 주차장",
      icon: "https://placehold.co/22x22",
      available: false,
    },
    {
      id: 5,
      title: "문턱 1cm 미만",
      icon: "https://placehold.co/22x22",
      available: false,
    },
  ],
  transportation: {
    subway: [
      {
        line: "6호선",
        station: "월곡역",
        exit: 1,
        directions: "도보 11분",
      },
    ],
    bus: [
      {
        type: "마을 버스",
        bus_number: "성북 10",
        directions: "",
      },
    ],
  },
};

export default data;
