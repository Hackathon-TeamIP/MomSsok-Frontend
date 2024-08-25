"use client";

import { cn } from "@/shared/lib/utils";
import { BaseHeaderProps } from "./types";
import { useScrollHeaderColor } from "./useScrollHeaderColor";

export const BaseHeader = ({
  leftIcons = [],
  rightIcons = [],
  className = "",
  children,
  scrollThreshold = 200,
}: BaseHeaderProps) => {
  const bgColor = useScrollHeaderColor(scrollThreshold);

  const headerClasses = cn(
    "flex items-center justify-between h-[56px] z-[100] w-full px-4 transition-colors duration-200 max-w-custom",
    {
      "bg-white": bgColor === "white",
      "bg-transparent": bgColor === "transparent",
    },
    className,
  );

  return (
    <header className={headerClasses}>
      <div className="flex items-center space-x-4">
        {leftIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={icon.onClick}
            className="w-6 h-6 cursor-pointer"
            type="button"
          >
            {icon.component}
          </button>
        ))}
      </div>
      <div className="flex-grow">{children}</div>

      <div className="flex items-center space-x-4">
        {rightIcons.map((icon) => (
          <button
            key={icon.id}
            onClick={icon.onClick}
            className="w-6 h-6 cursor-pointer"
            type="button"
          >
            {icon.component}
          </button>
        ))}
      </div>
    </header>
  );
};
