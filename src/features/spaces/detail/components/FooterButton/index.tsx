"use client";

import { Button } from "@/shared/components/Button";
import { BookmarkIcon } from "@/shared/components/Icons";
import { useToggle } from "@/shared/hooks/useToggle";

export const FooterButton = ({
  isSelected: _isSelected,
}: {
  isSelected: boolean;
}) => {
  const { isSelected, toggle } = useToggle({
    isSelected: _isSelected,
  });

  return (
    <div className="flex items-center gap-3 fixed bottom-0 z-[100] bg-white w-full px-4 py-4">
      <Button
        onClick={toggle}
        size="sm"
        variant="ghost"
        className="w-[60px] max-h-[48px] p-1 flex-col"
      >
        {isSelected ? (
          <BookmarkIcon className="text-primary mx-auto" />
        ) : (
          <BookmarkIcon className="text-[#A3A3A3] mx-auto" />
        )}
        <p className="text-[11px] leading-3  text-[#ADACAA] font-semibold text-center">
          관심 장소
        </p>
      </Button>
      <Button className="w-full max-h-[48px]">예약하기</Button>
    </div>
  );
};
