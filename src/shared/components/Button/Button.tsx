import { cn } from "@/shared/lib/utils";
import React from "react";
import { ButtonProps } from "./types";
import { SpinnerIcon } from "../Icons";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    isDisabled,
    isLoading,
    size = "lg",
    variant = "solid",
    className,
    children,
    ...rest
  } = props;

  const baseStyles =
    "flex items-center justify-center font-medium rounded-lg transition duration-150 ease-in-out";

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "p-3 text-base",
    lg: "px-[98px] py-[13px] text-[17px]", // figma 디자인
  };

  const variantStyles = {
    solid:
      "text-white font-semibold bg-[#6290C7] hover:bg-[#2256A7] disabled:bg-[#82A0C5]",
    outline:
      "bg-transparent border border-gray-200 text-black hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const spinnerColor = variant === "solid" ? "#fff" : "#000";

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    {
      "cursor-not-allowed": isDisabled || isLoading,
    },
    className,
  );

  return (
    <button
      className={combinedClassName}
      disabled={isDisabled || isLoading}
      ref={ref}
      {...rest}
    >
      {isLoading && <SpinnerIcon color={spinnerColor} />}
      {isLoading ? "Loading.." : children}
    </button>
  );
};

const _Button = React.forwardRef(Button);

export { _Button as Button };
