import { SpaceSchedule } from "@/shared/types/reservation";

const data: SpaceSchedule = {
  spaceId: 1,
  week: {
    startDate: "2024-08-24",
    endDate: "2024-09-06",
  },
  days: [
    {
      date: "2024-08-24",
      slots: [
        {
          slotId: 1,
          timeRange: "10:00 - 12:00",
          availableCount: 4,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "13:00 - 15:00",
          availableCount: 12,
          status: "모집중",
        },
        {
          slotId: 3,
          timeRange: "15:00 - 17:00",
          availableCount: 10,
          status: "모집중",
        },
      ],
    },
    {
      date: "2024-08-25",
      slots: [
        {
          slotId: 1,
          timeRange: "10:00 - 12:00",
          availableCount: 6,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "15:00 - 17:00",
          availableCount: 0,
          status: "매진",
        },
      ],
    },
    {
      date: "2024-08-26",
      slots: [
        {
          slotId: 1,
          timeRange: "10:00 - 12:00",
          availableCount: 6,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "15:00 - 17:00",
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
          timeRange: "10:00 - 12:00",
          availableCount: 6,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "15:00 - 17:00",
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
          timeRange: "10:00 - 12:00",
          availableCount: 4,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "13:00 - 15:00",
          availableCount: 12,
          status: "모집중",
        },
        {
          slotId: 3,
          timeRange: "15:00 - 17:00",
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
          timeRange: "10:00 - 12:00",
          availableCount: 4,
          status: "모집중",
        },
        {
          slotId: 2,
          timeRange: "13:00 - 15:00",
          availableCount: 12,
          status: "모집중",
        },
        {
          slotId: 3,
          timeRange: "15:00 - 17:00",
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
          timeRange: "10:00 - 12:00",
          availableCount: 4,
          status: "매진",
        },
        {
          slotId: 2,
          timeRange: "13:00 - 15:00",
          availableCount: 12,
          status: "매진",
        },
        {
          slotId: 3,
          timeRange: "15:00 - 17:00",
          availableCount: 10,
          status: "매진",
        },
      ],
    },
    {
      date: "2024-09-01",
      slots: [
        {
          slotId: 1,
          timeRange: "10:00 - 12:00",
          availableCount: 4,
          status: "매진",
        },
        {
          slotId: 2,
          timeRange: "13:00 - 15:00",
          availableCount: 12,
          status: "매진",
        },
        {
          slotId: 3,
          timeRange: "15:00 - 17:00",
          availableCount: 10,
          status: "매진",
        },
      ],
    },
  ],
};

export default data;
