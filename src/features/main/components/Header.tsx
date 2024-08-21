"use client";

import {
  ChevronDownIcon,
  SearchIcon,
  AlarmIcon,
  MenuIcon,
} from "@/shared/components/Icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-[#FFD88E] h-[98px] rounded-b-2xl flex flex-col px-[18px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          {/* TODO: 추후 typography 컴포넌트로 분리 */}
          <h3 className="font-semibold text-[20px]">우리집</h3>
          <ChevronDownIcon />
        </div>
        <div className="flex gap-[14px]">
          <AlarmIcon color="#494848" className="cursor-pointer" />
          <MenuIcon color="#494848" className="cursor-pointer" />
        </div>
      </div>

      <div
        className="w-full h-[36px] flex items-center px-2 bg-white rounded-[10px] my-4 justify-between cursor-pointer"
        onClick={() => router.push("/search")}
      >
        <p className="text-[#888]">내 주변 베리어프리 놀이터</p>
        <SearchIcon color="#888" />
      </div>
    </header>
  );
}
