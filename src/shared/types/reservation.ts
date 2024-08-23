type SlotStatus = "모집중" | "매진";

export type TimeSlot = {
  slotId: number;
  timeRange: string;
  availableCount: number;
  status: SlotStatus;
};

export type DaySchedule = {
  date: string;
  slots: TimeSlot[];
};

export type SpaceSchedule = {
  spaceId: number;
  week: {
    startDate: string;
    endDate: string;
  };
  days: DaySchedule[];
};
