import * as React from "react";
import { IconProps } from "./types";

export const AccessRestroomIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.79167 6.41667C8.80419 6.41667 9.625 5.59586 9.625 4.58333C9.625 3.57081 8.80419 2.75 7.79167 2.75C6.77914 2.75 5.95833 3.57081 5.95833 4.58333C5.95833 5.59586 6.77914 6.41667 7.79167 6.41667ZM10.0833 12.8333L10.0833 19.25H8.25V13.75H7.33333V19.25H5.5V13.75V12.8333H4.125L5.04167 7.33333H9.625H10.0833H11.9167H12.375H16.9583L17.875 12.8333H16.5V19.25H14.6667V13.75H13.75V19.25H11.9167V13.75V12.8333V9.16667H10.0833V12.8333ZM14.2083 6.41667C15.2209 6.41667 16.0417 5.59586 16.0417 4.58333C16.0417 3.57081 15.2209 2.75 14.2083 2.75C13.1958 2.75 12.375 3.57081 12.375 4.58333C12.375 5.59586 13.1958 6.41667 14.2083 6.41667Z"
          fill={color}
        />
      </svg>
    );
  },
);

AccessRestroomIcon.displayName = "AccessRestroomIcon";

export default AccessRestroomIcon;
