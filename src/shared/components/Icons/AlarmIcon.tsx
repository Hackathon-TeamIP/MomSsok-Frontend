import * as React from "react";
import { IconProps } from "./types";

export const AlarmIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g opacity="0.8">
          <path
            d="M12 3.00727C13.5754 3.00727 15.0862 3.63309 16.2002 4.74706C17.3142 5.86102 17.94 7.37188 17.94 8.94727C17.94 15.5519 20.3492 16.8534 21 16.8534H3C3.66462 16.8534 6.06 15.538 6.06 8.94727C6.06 7.37188 6.68582 5.86102 7.79979 4.74706C8.91375 3.63309 10.4246 3.00727 12 3.00727Z"
            fill={color}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.92307 19.3872C10.0428 19.8469 10.3116 20.254 10.6874 20.5445C11.0633 20.835 11.5249 20.9927 12 20.9927C12.475 20.9927 12.9367 20.835 13.3125 20.5445C13.6884 20.254 13.9572 19.8469 14.0769 19.3872"
            fill={color}
          />
          <path
            d="M9.92307 19.3872C10.0428 19.8469 10.3116 20.254 10.6874 20.5445C11.0633 20.835 11.5249 20.9927 12 20.9927C12.475 20.9927 12.9367 20.835 13.3125 20.5445C13.6884 20.254 13.9572 19.8469 14.0769 19.3872"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  },
);

AlarmIcon.displayName = "AlarmIcon";

export default AlarmIcon;
