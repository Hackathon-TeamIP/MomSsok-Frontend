import {
  HomeIcon,
  BookmarkIcon,
  FireIcon,
  CalendarIcon,
  UserIcon,
} from "../../Icons";
import { NavButton } from "./NavButton";

export function TabBar() {
  return (
    <div className="flex w-full justify-between pt-[17px] h-[83px] fixed bottom-0 z-[100] border-solid border-t-[1.5px] border-t-gray-200 bg-[#F8F8F8]">
      <NavButton href="/" icon={<HomeIcon />} label="홈" />
      <NavButton href="/1" icon={<BookmarkIcon />} label="관심 장소" />
      <NavButton href="/2" icon={<FireIcon />} label="추천" />
      <NavButton href="/3" icon={<CalendarIcon />} label="예약 관리" />
      <NavButton href="/4" icon={<UserIcon />} label="내정보" />
    </div>
  );
}
