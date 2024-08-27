import * as React from "react";
import { IconProps } from "./types";

export const AccessElevatorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.8388 11.8733C13.8856 12.5819 12.7149 12.9356 11.5288 12.8733H8.77877V17.5033H5.98877V4.50333H11.7088C12.8393 4.44283 13.9528 4.79853 14.8388 5.50333C15.6709 6.31803 16.0931 7.46343 15.9888 8.62333C16.1159 9.82473 15.6933 11.0192 14.8388 11.8733ZM12.7388 7.20333C12.3142 6.89253 11.794 6.74033 11.2688 6.77333H8.77877V10.5933H11.2688C11.8003 10.6259 12.3248 10.4582 12.7388 10.1233C13.1183 9.72863 13.3081 9.18873 13.2588 8.64333C13.3128 8.10933 13.1215 7.57963 12.7388 7.20333Z"
          fill={color}
        />
      </svg>
    );
  },
);

AccessElevatorIcon.displayName = "AccessElevatorIcon";

export default AccessElevatorIcon;
