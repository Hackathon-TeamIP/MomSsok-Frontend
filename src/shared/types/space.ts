export type BasicInfo = {
  address: string;
  contact: string;
  operationDays: string;
};

type Subway = {
  station: string;
  exit: number | string;
  directions: string;
};

type Bus = {
  type: string;
  bus_number: number | string;
  directions: string;
};

type Transportation = {
  subway: Subway[];
  bus: Bus[];
};

type TimeSlot = {
  slotId: number;
  timeRange: string;
  availableCount: number;
  status: "모집중" | "매진";
};

type DaySchedule = {
  date: string;
  slots: TimeSlot[];
};

type Week = {
  startDate: string;
  endDate: string;
};

type WeekSchedule = {
  week: Week;
  days: DaySchedule[];
};

export type SpaceListItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  basicInfo: BasicInfo;
  transportation: Transportation;
  tags: string[];
  accessInfo: string[];
  locationType: string;
  reviewCount: number;
  rating: number;
  schedule: WeekSchedule;
};
