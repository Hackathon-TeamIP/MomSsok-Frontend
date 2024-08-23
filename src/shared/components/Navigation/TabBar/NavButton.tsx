"use client";
import { usePathname, useRouter } from "next/navigation";
import type { NavButtonType } from "./types";

export const NavButton = ({ href, icon: Icon, label }: NavButtonType) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href;
  const textColor = isActive ? "text-primary" : "text-[#A3A3A3]";

  return (
    <button
      className={`flex flex-col items-center basis-1/5 ${textColor}`}
      onClick={() => router.push(href)}
    >
      {Icon}
      <p className="text-[10px] text-center font-medium">{label}</p>
    </button>
  );
};
