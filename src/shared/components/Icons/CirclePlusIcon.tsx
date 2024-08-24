import * as React from "react";
import { IconProps } from "./types";

export const CirclePlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <rect x="2" y="2" width="20" height="20" rx="10" fill={color} />
        <path
          d="M0.0625 23.9375V0.0625H23.9375V23.9375H0.0625Z"
          stroke="white"
          strokeWidth="0.125"
        />
        <path
          d="M9 12H15"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V15"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CirclePlusIcon.displayName = "CirclePlusIcon";

export default CirclePlusIcon;
