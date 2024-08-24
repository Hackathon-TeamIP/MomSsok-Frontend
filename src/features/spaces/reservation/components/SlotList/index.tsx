import { cn } from "@/shared/lib/utils";
import type { TimeSlot } from "@/shared/types/reservation";
import React from "react";

interface SlotListProps {
  slots: TimeSlot[];
  selectedSlotId: number | null;
  onSlotChange: (slotId: number) => void;
}

export const SlotList = ({
  slots,
  selectedSlotId,
  onSlotChange,
}: SlotListProps) => {
  const handleSlotClick = (slotId: number) => {
    onSlotChange(slotId);
  };

  return (
    <div className="flex space-x-3 mb-4 overflow-x-scroll scrollbar-hide">
      {slots.map((slot) => (
        <div
          key={slot.slotId}
          className={cn(
            "px-[15px] py-[20px] border border-solid border-gray-200 rounded-lg shadow-md w-[120px] h-[120px] shrink-0",
            {
              "border-[#ff9727] bg-[#FFFAF0]": selectedSlotId === slot.slotId,
              "bg-gray-100 cursor-not-allowed": slot.availableCount === 0,
              "cursor-pointer": slot.availableCount > 0,
            },
          )}
          onClick={() =>
            slot.availableCount > 0 && handleSlotClick(slot.slotId)
          }
        >
          <p className="text-sm text-[#FF9727] font-semibold">{slot.status}</p>
          <p className="text-base text-[#424242]">
            {slot.availableCount}자리 남음
          </p>
          <p className="text-[13px]">{slot.timeRange}</p>
        </div>
      ))}
    </div>
  );
};
