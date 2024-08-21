import * as React from "react";
import { IconProps } from "./types";

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5826 10C15.9079 10 16.1078 10.266 15.9383 10.4735L12.3551 14.8511C12.1931 15.0496 11.807 15.0496 11.6445 14.8511C11.6445 14.8511 10.8126 13.8347 10.3967 13.3265C9.61838 12.3755 8.06175 10.4735 8.06175 10.4735C7.89222 10.266 8.09175 10 8.41707 10L15.5826 10Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ChevronDownIcon;
