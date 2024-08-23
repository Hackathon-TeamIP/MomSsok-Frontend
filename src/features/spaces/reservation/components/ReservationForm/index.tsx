"use client";
import { useCallback, useState } from "react";
import { Divider } from "@/shared/components/Divider";
import { CloseIcon } from "@/shared/components/Icons";
import { Days } from "../Days";
import { SlotList } from "../SlotList";
import data from "../../api/data";
import { getToday } from "@/shared/lib/formatTime";

interface Props {
  closeDrawer: () => void;
}

// TODO api호출 hook, 리팩토링
export const ReservationForm = ({ closeDrawer }: Props) => {
  const todayDate = getToday("YYYY-MM-DD"); // 포맷: "2024-08-23"
  const [selectedDate, setSelectedDate] = useState<string | null>(todayDate);
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(null);

  console.log("날짜", selectedDate, "시간대", selectedSlotId);

  const handleDateChange = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlotId(null); // 날짜가 바뀌면 선택된 슬롯 초기화
  }, []);

  const handleSlotChange = useCallback((slotId: number) => {
    setSelectedSlotId(slotId);
  }, []);

  // 선택된 날짜에 대한 슬롯 데이터를 가져오기
  const selectedSchedule = selectedDate
    ? data.days.find((day) => day.date === selectedDate)
    : undefined;

  return (
    <div className="min-h-[70vh]">
      <div className="flex justify-between items-center ml-2 mt-3">
        <h2 className="text-[22px] font-medium text-[#424242]">예약하기</h2>
        <CloseIcon
          onClick={closeDrawer}
          className="text-gray-400 cursor-pointer"
        />
      </div>
      <Days selectedDate={selectedDate} onDateChange={handleDateChange} />
      <Divider className="mb-[12px]" />
      {selectedSchedule ? (
        <SlotList
          slots={selectedSchedule.slots}
          selectedSlotId={selectedSlotId}
          onSlotChange={handleSlotChange}
        />
      ) : (
        <p className="py-4 text-center font-medium text-gray-400 h-[136px] text-sm">
          예약 가능한 시간대가 없습니다.
        </p>
      )}
    </div>
  );
};
