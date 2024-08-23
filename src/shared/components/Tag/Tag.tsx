import { cn } from "@/shared/lib/utils";
import React from "react";
import type { TagProps } from "./types";

const Tag = (props: TagProps, ref: React.Ref<HTMLSpanElement>) => {
  const {
    variant = "primary",
    className,
    children,
    leftIcon,
    name,
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center rounded-[12px] px-3 py-[6px] text-sm";

  const variantStyles = {
    primary: "text-black bg-[#F5F5F5]",
    secondary: "text-[#FFFAF4] bg-[#A8A8A8] bg-opacity-40 drop-shadow-lg",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      ref={ref}
      {...rest}
    >
      {typeof leftIcon === "string" ? (
        <img src={leftIcon} alt="" className="mr-[1px] w-[22px] h-[22px]" />
      ) : (
        leftIcon && (
          <span className="mr-[1px] w-[22px] h-[22px]">{leftIcon}</span>
        )
      )}
      {name}
    </span>
  );
};

const _Tag = React.forwardRef(Tag);

export { _Tag as Tag };
