"use client";

import data from "../../api/data";
import { SpacesListItem } from "./ListItem";

export const SpacesList = () => {
  // 데이터 가져오기
  return (
    <section className="px-4 pb-4">
      <div className="pb-4 pt-6">
        <h1 className="font-bold text-[22px]">
          <span className="text-primary">내 주위</span> 열린 공간
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-[23px] ">
        {data.map((space) => (
          <SpacesListItem key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
};
