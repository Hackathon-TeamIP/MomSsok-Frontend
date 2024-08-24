"use client";

import {
  ChevronDownIcon,
  SearchIcon,
  AlarmIcon,
  MenuIcon,
} from "@/shared/components/Icons";
import { useRouter } from "next/navigation";
import CurrentLocationButton from "./CurrentLocationButton";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-[#FFD88E] h-[104px] rounded-b-2xl flex flex-col px-3">
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center cursor-pointer">
          {/* TODO: 추후 typography 컴포넌트로 분리 */}
          <h3 className="font-semibold text-[20px] leading-4">우리집</h3>
          <ChevronDownIcon />
        </div>
        <div className="flex gap-[14px]">
          <AlarmIcon color="#494848" className="cursor-pointer" />
          <MenuIcon color="#494848" className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-[10px]">
        <div
          className="w-full h-[36px] flex items-center px-3 bg-white rounded-[10px] justify-between cursor-pointer"
          onClick={() => router.push("/search")}
        >
          <p className="text-[#8A8A8E]">내 주변 베리어프리 놀이터</p>
          <SearchIcon color="#888" />
        </div>
        <CurrentLocationButton />
      </div>
    </header>
  );
}
