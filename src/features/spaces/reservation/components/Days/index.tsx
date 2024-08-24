"use client";

import { dates, daysOfWeek, startDate } from "@/shared/lib/formatTime";
import { cn } from "@/shared/lib/utils";
import dayjs from "dayjs";

interface DaysProps {
  selectedDate: string | null;
  onDateChange: (date: string) => void;
}

export const Days = ({ selectedDate, onDateChange }: DaysProps) => {
  const handleDateClick = (index: number) => {
    const date = startDate.add(index, "day").format("YYYY-MM-DD");
    onDateChange(date);
  };

  // 선택된 날짜에 따른 월 계산
  const displayDate = selectedDate
    ? dayjs(selectedDate).tz("Asia/Seoul")
    : startDate;

  return (
    <>
      <h1 className="text-[20px] font-semibold mb-2 text-center text-[#424242]">
        {displayDate.format("M월")}
      </h1>
      <div className="flex items-center overflow-hidden overflow-x-scroll scrollbar-hide h-[88px]">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-center shrink-0 basis-1/7 min-w-[44px] cursor-pointer"
            onClick={() => handleDateClick(index)}
          >
            <p
              className={cn(
                "text-[13px] font-medium mb-[6px] transition-all",
                day === "오늘" ? "text-[#FF9727]" : "text-gray-400",
              )}
            >
              {day}
            </p>
            <div
              className={cn(
                "flex items-center justify-center rounded-full w-[44px] h-[44px] mx-auto",
                selectedDate ===
                  startDate.add(index, "day").format("YYYY-MM-DD")
                  ? "bg-[#FF9727] text-white"
                  : "text-[#424242] bg-transparent",
              )}
            >
              <p
                className={
                  selectedDate ===
                  startDate.add(index, "day").format("YYYY-MM-DD")
                    ? "text-2xl"
                    : "text-xl"
                }
              >
                {dates[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
