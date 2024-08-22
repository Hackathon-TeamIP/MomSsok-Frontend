"use client";

import { useState } from "react";
import data from "../../api/data";
import { SpacesListItem } from "./ListItem";
import { AnimatePresence } from "framer-motion";
import { Drawer, DrawerFilterList } from "@/shared/components/Drawer";
import ArrowRightIcon from "@/shared/components/Icons/ArrowRightIcon";

export type OptionKey = "nearest" | "popular" | "rating";

const OPTIONS: Record<OptionKey, string> = {
  nearest: "가까운 순",
  popular: "인기 순",
  rating: "별점 순",
};

// TODO 데이터 가져오기, 리팩토링
export const SpacesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(OPTIONS.nearest);

  const handleOptionClick = (selectedKey: OptionKey) => {
    setSelectedOption(OPTIONS[selectedKey]);
    setIsOpen(false);
  };

  return (
    <section className="px-4 pb-4">
      <div className="pb-4 pt-6 flex items-center justify-between">
        <h1 className="font-bold text-[22px]">
          <span className="text-primary">내 주위</span> 열린 공간
        </h1>
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-[7px] cursor-pointer"
        >
          <p className="text-[#8E8E93] text-[15px] font-medium">
            {selectedOption}
          </p>
          <ArrowRightIcon className="text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-[23px] ">
        {data.map((space) => (
          <SpacesListItem key={space.id} space={space} />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <Drawer setDrawerOpen={setIsOpen}>
            <DrawerFilterList<OptionKey>
              title="정렬"
              options={Object.entries(OPTIONS) as [OptionKey, string][]}
              selectedOption={selectedOption}
              onOptionClick={handleOptionClick}
            />
          </Drawer>
        )}
      </AnimatePresence>
    </section>
  );
};
