"use client";

import { ReservationForm } from "@/features/spaces/reservation/components/ReservationForm";
import { Button } from "@/shared/components/Button";
import { Drawer } from "@/shared/components/Drawer";
import { BookmarkIcon } from "@/shared/components/Icons";
import { useToggle } from "@/shared/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export const FooterButton = ({
  isSelected: _isSelected,
}: {
  isSelected: boolean;
}) => {
  const { isSelected, toggle } = useToggle({
    isSelected: _isSelected,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3 fixed bottom-0 z-[10] bg-white w-full px-4 py-4 max-w-custom">
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
        <Button className="w-full max-h-[48px]" onClick={() => setIsOpen(true)}>
          예약하기
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Drawer setDrawerOpen={setIsOpen} className="pb-0">
            <ReservationForm closeDrawer={() => setIsOpen(false)} />
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};
