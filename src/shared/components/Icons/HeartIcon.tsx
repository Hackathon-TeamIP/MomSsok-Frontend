import * as React from "react";
import { IconProps } from "./types";

export const HeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 24C38.5135 8.01072 22.3601 -4.93467 14 3.83365C5.63995 -4.93467 -10.5135 8.01072 14 24Z"
          fill={color}
        />
      </svg>
    );
  },
);

HeartIcon.displayName = "HeartIcon";

export default HeartIcon;
