import * as React from "react";
import { IconProps } from "./types";

export const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0666809 1.87054L1.45977 0.5L8.06668 7L1.45977 13.5L0.0666809 12.1295L5.28051 7L0.0666809 1.87054Z"
          fill={color}
        />
      </svg>
    );
  },
);

ArrowRightIcon.displayName = "ArrowRightIcon";

export default ArrowRightIcon;
