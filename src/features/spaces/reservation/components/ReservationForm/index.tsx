"use client";
import { Button } from "@/shared/components/Button";
import { Divider } from "@/shared/components/Divider";
import { CloseIcon } from "@/shared/components/Icons";
import { getToday } from "@/shared/lib/formatTime";
import { useCallback, useEffect, useMemo, useState } from "react";
import data from "../../api/data";
import { Days } from "../Days";
import { GuestInput } from "../GuestInput";
import { SlotList } from "../SlotList";

interface Props {
  closeDrawer: () => void;
}

// TODO api호출 hook, 리팩토링
export const ReservationForm = ({ closeDrawer }: Props) => {
  const todayDate = getToday("YYYY-MM-DD"); // 포맷: "2024-08-23"
  const [selectedDate, setSelectedDate] = useState<string | null>(todayDate);

  // 선택된 날짜에 대한 슬롯 데이터
  const selectedSchedule = selectedDate
    ? data.days.find((day) => day.date === selectedDate)
    : undefined;

  const slots = useMemo(() => {
    return selectedSchedule ? selectedSchedule.slots : [];
  }, [selectedSchedule]);

  // 첫 번째 슬롯의 ID를 기본값으로 설정
  const [selectedSlotId, setSelectedSlotId] = useState<number | null>(
    slots.length > 0 ? slots[0].slotId : null,
  );
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // 매진 제외, 첫 번째 슬롯 선택
  useEffect(() => {
    const availableSlots = slots.filter((slot) => slot.availableCount > 0);

    if (availableSlots.length > 0) {
      if (
        !selectedSlotId ||
        !availableSlots.some((slot) => slot.slotId === selectedSlotId)
      ) {
        setSelectedSlotId(availableSlots[0].slotId);
      }
    } else {
      setSelectedSlotId(null);
    }
  }, [slots, selectedSlotId]);

  const handleDateChange = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlotId(null);
  }, []);

  const handleSlotChange = useCallback((slotId: number) => {
    setSelectedSlotId(slotId);
  }, []);

  const handleReset = () => {
    setSelectedDate(todayDate);
    setSelectedSlotId(null);
    setAdultCount(0);
    setChildCount(0);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 로딩 시작
    setIsLoading(true);

    try {
      const formData = {
        // 폼 데이터 수집
        adults: adultCount,
        children: childCount,
        date: selectedDate,
        slotId: selectedSlotId,
      };

      // TODO API 호출

      setIsLoading(false);
      alert(`예약 완료! 폼 제출 테스트: ${JSON.stringify(formData, null, 2)}`);
      closeDrawer();
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <form className="min-h-[620px]" onSubmit={handleSubmit}>
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
        <>
          <SlotList
            slots={selectedSchedule.slots}
            selectedSlotId={selectedSlotId}
            onSlotChange={handleSlotChange}
          />
          <h2 className="text-[22px] font-medium text-[#424242] my-4">인원</h2>
          <GuestInput
            label="어른"
            subLabel="만 19세 이상"
            value={adultCount}
            onChange={setAdultCount}
          />
          <GuestInput
            label="아동"
            subLabel="만 -세 이상~ -세 이하"
            value={childCount}
            onChange={setChildCount}
          />
          <div className="mt-8 mb-3 flex gap-[10px]">
            <Button
              className="min-w-[90px] bg-[#C7C7C7] text-white"
              size="md"
              variant="ghost"
              onClick={handleReset}
            >
              초기화
            </Button>
            <Button
              className="w-full max-h-[48px]"
              type="submit"
              isLoading={isLoading}
              isDisabled={!adultCount || !childCount}
            >
              예약하기
            </Button>
          </div>
        </>
      ) : (
        <p className="pt-10 text-center font-medium text-gray-400 h-[136px] text-sm">
          예약 가능한 시간대가 없습니다.
        </p>
      )}
    </form>
  );
};
