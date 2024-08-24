import * as React from "react";
import { IconProps } from "./types";

export const CircleMinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <rect width="20" height="20" rx="10" fill={color} />
        <path
          d="M2.0625 17.9375V2.0625H17.9375V17.9375H2.0625Z"
          stroke="#F6F6F6"
          strokeWidth="0.125"
        />
        <path
          d="M7 10H13"
          stroke="#F6F6F6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CircleMinusIcon.displayName = "CircleMinusIcon";

export default CircleMinusIcon;
