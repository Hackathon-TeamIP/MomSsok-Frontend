import { SpaceListItem } from "@/shared/types/space";

export const spaces: SpaceListItem[] = [
  {
    id: 1,
    name: "청와대",
    description: "역사와 문화를 체험할 수 있는 사진 찍기 좋은 명소",
    imageUrl:
      "https://static.news.zumst.com/images/4/2022/05/18/202205180054025825_t.jpg",
    basicInfo: {
      address: "서울 종로구 청와대로 1",
      contact: "1522 7760",
      operationDays: "월,수~일",
    },
    transportation: {
      subway: [
        {
          station: "3호선 경복궁역",
          exit: 4,
          directions: "청와대까지 도보 15분 이동",
        },
      ],
      bus: [
        {
          type: "지선버스",
          bus_number: "1711, 1020, 7018, 7016, 7022, 7212번",
          directions: "‘효자동 정류장’에서 하차",
        },
      ],
    },
    tags: ["유모차 대여"],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 365,
    rating: 4.3,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "아리랑시네센터(영화관)",
    description: "가족과 함께 최신 영화를 즐길 수 있는 아늑한 영화관",
    imageUrl:
      "https://cine.arirang.go.kr:8443/_res/arirang/img/rent/img-rent07.png",
    basicInfo: {
      address: "서울특별시 성북구 아리랑로 82",
      contact: "02 3291 5541",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "우이신설 정릉역",
          exit: 1,
          directions: "출구에서 365m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: ["주차 가능"],
    accessInfo: [
      "휠체어 입장 가능",
      " 장애인 화장실, ",
      " 문턱 1cm 미만",
      " 장애인 전용 주차",
    ],
    locationType: "실내",
    reviewCount: 300,
    rating: 4.8,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "못골한옥 어린이도서관",
    description: "전통 한옥에서 독서의 즐거움을 느낄 수 있는 도서관",
    imageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAyMjA0MDRfMjY5/MDAxNjQ5MDQ4MTE5Mzgx.qEwJJFBOPynByH3snOQ6bl2Rii_gpgzxF3thcwDOBkAg.mESJLNwhpfTF47oNMRwebFwfZGOWBQl0bBc7bi9xrcgg.JPEG.good-realtor/20220404%EF%BC%BF120058.jpg?type=w800",
    basicInfo: {
      address: "서울특별시 강남구 자곡로7길 3",
      contact: "02 2226 5930",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "3호선 수서역",
          exit: 3,
          directions: "출구로 나와서 버스로 이동(15분 소요)",
        },
      ],
      bus: [
        {
          type: "지선버스",
          bus_number: "2412, 4425",
          directions: "버스 승차 후 못골마을, LH강남아이파크 정류장에서 하차",
        },
      ],
    },
    tags: ["장애인전용주차"],
    accessInfo: ["휠체어 입장 가능,", " 장애인 화장실,"],
    locationType: "실내",
    reviewCount: 182,
    rating: 3.3,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "서울스카이전망대",
    description: "서울의 아름다운 전경을 한 눈에 담을 수 있는 전망대",
    imageUrl:
      "https://www.seouldanurim.net/comm/getImage?srvcId=MEDIA&parentSn=23929&fileTy=MEDIA&fileNo=2&thumbTy=L",
    basicInfo: {
      address: "서울 송파구 올림픽로 300",
      contact: "02 1661 2000",
      operationDays: "-",
    },
    transportation: {
      subway: [
        {
          station: "2호선 잠실역",
          exit: 1,
          directions: "롯데월드타워 지하 1층, 지하철\n 과 연결",
        },
      ],
      bus: [
        {
          type: "간선버스",
          bus_number: "301, 341, 360, 362",
          directions: "롯데월드 정류장에서 하차",
        },
      ],
    },
    tags: ["아기띠 대여", "유아휴게실", "수유실"],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실, 승강기, 문턱 1cm 미만"],
    locationType: "실내",
    reviewCount: 179,
    rating: 4.7,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    name: "서울특별시교육청과학전시관",
    description: "과학 원리를 배우고 체험할 수 있는 전시관",
    imageUrl:
      "https://tong.visitkorea.or.kr/cms/resource/41/1570641_image2_1.jpg",
    basicInfo: {
      address: "서울 관악구 낙성대로 101",
      contact: "02 881 3000",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "2호선 낙성대역",
          exit: 4,
          directions: "출구에서 도보로 약 15분 이동",
        },
      ],
      bus: [
        {
          type: "마을버스",
          bus_number: "02,04",
          directions: "버스 승차 후 융합 과학교육원 또는 인헌아파트에서 하차",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 418,
    rating: 4.1,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    name: "서울형 키즈카페 강동구 성내1동점",
    description: "아이들의 상상력을 키워주는 창의적인 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/2/19/f756cd9e-37be-458c-9ed9-0c174be95e7e.jpg",
    basicInfo: {
      address: "서울 강동구 성내로6길 16 2층 \n 서울형키즈카페 성내1동점",
      contact: "02-3425-9398",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "8호선 강동구청역",
          exit: 2,
          directions: "올림픽공원 방향으로 도보 2분거리",
        },
      ],
      bus: [
        {
          type: "지선버스",
          bus_number: "3220, 4313",
          directions: "강동구청 하차",
        },
      ],
    },
    tags: [],
    accessInfo: [
      "휠체어 입장 가능",
      " 장애인 화장실",
      " 승강기",
      " 문턱 1cm 미만",
    ],
    locationType: "실내",
    reviewCount: 240,
    rating: 4.1,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
      ],
    },
  },
  {
    id: 7,
    name: "서울형 키즈카페 강동구 상일2동점",
    description: "다양한 실내 놀이기구로 가득한 신나는 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/2/8/22fa77a1-583a-4de4-891e-a9255725594c.jpg",
    basicInfo: {
      address: "서울 강동구 상일로12길 95 푸르내 102동 3층",
      contact: "02-3425-7077",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "5호선 강일역",
          exit: 4,
          directions: "도보 5분",
        },
      ],
      bus: [
        {
          type: "간선버스",
          bus_number: 370,
          directions: "고덕천,상일동역교차로 하차",
        },
      ],
    },
    tags: ["점자블록"],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 403,
    rating: 3.5,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 8,
    name: "서울형 키즈카페 강동구 암사1동점",
    description: "아이들이 안전하게 놀 수 있는 밝고 아늑한 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/3/20/78b23e13-6977-4d96-877a-19c4d291daa4.jpg",
    basicInfo: {
      address: "서울 강동구 올림픽로98길 15 LS지산빌딩 3층",
      contact: "02-3425-9489",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "8호선 암사역",
          exit: 2,
          directions: "도보 5분",
        },
      ],
      bus: [
        {
          type: "간선버스",
          bus_number: 340,
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 244,
    rating: 4.5,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 9,
    name: "서울형 키즈카페 강동구 고덕2동점",
    description: "아이들을 위한 친환경적인 놀이 환경이 조성된 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/2/15/8c6ad9ce-f24c-4417-8c39-c28f5c429d59.jpg",
    basicInfo: {
      address:
        "서울 강동구 고덕로 353 \n 고덕그라시움 일반상가 2층 서울형키즈카페 고덕2동점",
      contact: "02-3425-9435",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "5호선 상일동역",
          exit: 1,
          directions: "도보 3분",
        },
      ],
      bus: [
        {
          type: "간선버스",
          bus_number: 370,
          directions: "고덕천, 상일동역교차로 하차 후 도보 2분",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 401,
    rating: 3.6,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 10,
    name: "서울형 키즈카페 강북구 번3동점 \n 강북구 PLAY ON",
    description: "무한한 놀이와 즐거움이 가득",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/7/18/2f02a282-c03b-44b8-900b-937cd3729639.jpg",
    basicInfo: {
      address: "서울 강북구 오현로 208 309동 1층",
      contact: "02-988-0271",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "4호선 수유역",
          exit: 1,
          directions: "150m 직진하여 마을버스 탑승",
        },
      ],
      bus: [
        {
          type: "_x0008_지선버스, 마을버스",
          bus_number: "1218, 강북09, 강북11",
          directions: "강북구청 사거리역 하차",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 106,
    rating: 4.1,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 11,
    name: "서울형 키즈카페 시립 뚝섬자벌레점",
    description: "독특한 디자인 속에서 놀이와 학습",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/5/10/12b60375-0000-4508-8e9a-a98824ab7858.jpg",
    basicInfo: {
      address: "서울특별시 광진구 강변북로 2202 2층 꿈틀나루 (자양동)",
      contact: "02 498 4445",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "7호선 자양역",
          exit: 3,
          directions: "출구에서 209m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 437,
    rating: 4.8,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 12,
    name: "서울형 키즈카페 광진구 중곡3동점(꾸미팡팡 놀이터)",
    description: "아이들의 웃음소리가 끊이지 않는 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/2/28/d43e98d6-d3b9-4736-a589-930723b52d53.jpg",
    basicInfo: {
      address: "서울 광진구 능동로 400 별관 3층",
      contact: "02 467 1827",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "7호선 중곡역",
          exit: 2,
          directions: "출구에서 30m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 25,
    rating: 3.2,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 13,
    name: "서울형 키즈카페 도봉구 도봉2동점(봉봉트레킹)",
    description: "아이들이 자연스럽게 체력을 기르는 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/7/19/b1898cac-2b35-429b-817a-6840be66e75a.jpg",
    basicInfo: {
      address: "서울 도봉구 마들로 668",
      contact: "02 3492 7773",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "1호선 방학역",
          exit: 2,
          directions: "출구에서 338m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 323,
    rating: 4.2,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 14,
    name: "서울특별시 제1호 시립 서울형 키즈카페",
    description: "서울의 첫 시립 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/10/5/c3f8273f-83a9-446a-8987-1c7a0ba378ae.jpg",
    basicInfo: {
      address: "서울 동작구 노량진로 10 지하2층",
      contact: "02 824 0614",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "1호선 대방역",
          exit: 2,
          directions: "출구에서 9m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 380,
    rating: 3.8,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
      ],
    },
  },
  {
    id: 15,
    name: "서울형 키즈카페 동작구 상도3동점(동작키즈카페)",
    description: "아이들이 마음껏 뛰어놀 수 있는 넓은 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2023/8/4/eaa8991f-a8d1-48fd-bfaf-91f7e2b262c1.jpg",
    basicInfo: {
      address:
        "서울특별시 동작구 상도로15가길 16 가온어린이집 3층 서울형키즈카페 (상도동)",
      contact: "070 7163-1474",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "7호선 신대방삼거리역",
          exit: 6,
          directions: "출구에서 474m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 156,
    rating: 3.1,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 16,
    name: "서울형 키즈카페 동작구 어울마당점",
    description: "가족이 함께 즐길 수 있는 다채로운 놀이 시설",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/8/23/95aac10a-2e16-4ca8-97e2-445acfe81c7e.jpg",
    basicInfo: {
      address: "서울특별시 동작구 성대로 180 상도어울마당 2층 (상도동)",
      contact: "02 826 2678",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "7호선 장승배기역",
          exit: 2,
          directions: "출구에서 677m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 304,
    rating: 4.8,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 17,
    name: "서울형 키즈카페 서초구 방배2동점(서리풀노리학교 방배2동점)",
    description: "창의력과 상상력을 자극하는 다양한 놀이 체험",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/4/11/472f2dcb-b3cc-44f2-aec8-90663b50e9e8.jpg",
    basicInfo: {
      address: "서울 서초구 방배천로24길 8 방주교회 1층",
      contact: "02 523 9340",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "4호선 총신대입구(이수)역",
          exit: 5,
          directions: "_x0008_출구에서 176m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 132,
    rating: 4.4,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 18,
    name: "서울형 키즈카페 서초구 양재1동점(서리풀노리학교 양재1동점)",
    description: "아이들에게 새로운 놀이 경험을 선사하는 공간",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/3/15/446a7f0d-88f5-4ac7-b819-7e43adafb289.jpg",
    basicInfo: {
      address: "서울 서초구 양재천로 125-10 양재공영주차빌딩 2층",
      contact: "02 575 9340",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "3호선 양재역",
          exit: 8,
          directions: "출구에서 830m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 356,
    rating: 4.9,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
      ],
    },
  },
  {
    id: 19,
    name: "서울형 키즈카페 성동구 성수1가1동점\n (성수 키즈카페)",
    description: "아이들이 마음껏 놀며 상상력을 키울 수 있는 공간",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/7/24/429f7fcd-1d22-4117-99fd-71e8042cc9ee.jpg",
    basicInfo: {
      address:
        "서울특별시 성동구 뚝섬로3길 18 성수1가1동주민센터 1층 (성수동1가)",
      contact: "02 461 3863",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "수인분당선 서울숲역",
          exit: 1,
          directions: "출구에서 586m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 40,
    rating: 3.4,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 20,
    name: "서울형 키즈카페 성북구 벌집어린이공원점",
    description: "자연 친화적인 공원형 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/4/12/c981b7b3-70e0-4cc5-afad-0ce8bd3dea8e.jpg",
    basicInfo: {
      address: "서울 성북구 월곡로7길 56-7 \n 서울형 키즈카페 벌집어린이공원점",
      contact: "02 2241 0790",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "6호선 월곡역",
          exit: 1,
          directions: "출구에서 658m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능"],
    locationType: "실내",
    reviewCount: 398,
    rating: 4.6,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 21,
    name: "서울형 키즈카페 성북구 종암동점",
    description: "안전하고 창의적인 놀이 공간",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/8/13/5b7b01ef-3366-4e8f-a082-546f2b80ba60.jpg",
    basicInfo: {
      address: "서울 성북구 종암로19길 60 성북함께어울림센터 2층",
      contact: "02 2241 0796",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "6호선 월곡역",
          exit: 1,
          directions: "출구에서 1.3km",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 389,
    rating: 4.0,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 9,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 22,
    name: "서울형 키즈카페 양천구 오목공원점",
    description: "공원 속에서 놀이와 학습이 함께하는 공간",
    imageUrl:
      "https://cdn.imweb.me/upload/S202202154dc842f8225d2/5b84bc5b3606f.jpg",
    basicInfo: {
      address: "서울 양천구 목동서로 159-4",
      contact: "010 9508 0596",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "5호선 오목교역",
          exit: 2,
          directions: "출구에서 250m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 224,
    rating: 4.9,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 23,
    name: "서울형 키즈카페 시립 목동점",
    description: "안전하고 체계적인 놀이 환경이 돋보이는 키즈카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/3/22/30b7ad3a-238a-437d-923f-a4630b3f7ad1.png",
    basicInfo: {
      address: "서울 양천구 안양천로 1131 \n 2층 시립양천거점형키움센터",
      contact: "02 2647 7507",
      operationDays: "월 ~ 토",
    },
    transportation: {
      subway: [
        {
          station: "9호선 신목동역",
          exit: 2,
          directions: "출구에서 269m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 219,
    rating: 3.4,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 1,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
  {
    id: 24,
    name: "서울형 키즈카페 중랑구 망우본동점(중랑실내놀이터 양원)",
    description: "넓고 아늑한 실내 공간이 있는 키즈 카페",
    imageUrl:
      "https://icare.seoul.go.kr/icare/upload/fcltyInfoManage/2024/6/20/a006da11-26e2-455e-976d-c64d48c0fac2.jpg",
    basicInfo: {
      address:
        "서울 중랑구 용마산로 670 \n 신내역프라디움 시티원스퀘어 상가 B1",
      contact: "02 438 4600",
      operationDays: "화 ~ 일",
    },
    transportation: {
      subway: [
        {
          station: "6호선 신내역",
          exit: 4,
          directions: "출구에서 280m",
        },
      ],
      bus: [
        {
          type: "",
          bus_number: "",
          directions: "",
        },
      ],
    },
    tags: [],
    accessInfo: ["휠체어 입장 가능", " 장애인 화장실"],
    locationType: "실내",
    reviewCount: 92,
    rating: 3.0,
    schedule: {
      week: {
        startDate: "2024-08-26",
        endDate: "2024-09-08",
      },
      days: [
        {
          date: "2024-08-26",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-08-27",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-28",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-29",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 5,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-30",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 2,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 8,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-08-31",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 2,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-01",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 0,
              status: "매진",
            },
          ],
        },
        {
          date: "2024-09-02",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 6,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-03",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 5,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 3,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-04",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-05",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 10,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-06",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 6,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 7,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 0,
              status: "매진",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-07",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 8,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 9,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 10,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 7,
              status: "모집중",
            },
          ],
        },
        {
          date: "2024-09-08",
          slots: [
            {
              slotId: 1,
              timeRange: "09:00-11:00",
              availableCount: 3,
              status: "모집중",
            },
            {
              slotId: 2,
              timeRange: "11:00-13:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 3,
              timeRange: "13:00-15:00",
              availableCount: 4,
              status: "모집중",
            },
            {
              slotId: 4,
              timeRange: "15:00-17:00",
              availableCount: 1,
              status: "모집중",
            },
            {
              slotId: 5,
              timeRange: "17:00-19:00",
              availableCount: 4,
              status: "모집중",
            },
          ],
        },
      ],
    },
  },
];

export default spaces;
