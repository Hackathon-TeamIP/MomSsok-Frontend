import * as React from "react";
import { IconProps } from "./types";

export const ArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.4523 3.57105C17.1423 3.25671 16.6351 3.25676 16.3253 3.57115L9.11079 10.8908L9.10728 10.8872L8 12.0112L8.0032 12.0145L8 12.0177L9.11128 13.1448L9.1143 13.1417L16.2981 20.4296C16.607 20.743 17.1126 20.743 17.4214 20.4296C17.724 20.1225 17.724 19.6294 17.4214 19.3224L10.2219 12.018L17.4524 4.6821C17.7561 4.37399 17.756 3.8791 17.4523 3.57105Z"
          fill={color}
        />
      </svg>
    );
  },
);

ArrowLeftIcon.displayName = "ArrowLeftIcon";

export default ArrowLeftIcon;
