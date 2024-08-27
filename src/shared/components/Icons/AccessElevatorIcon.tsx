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
          d="M14.5 4.5H7.5C7.23478 4.5 6.98043 4.60536 6.79289 4.79289C6.60536 4.98043 6.5 5.23478 6.5 5.5V16.5C6.5 16.7652 6.60536 17.0196 6.79289 17.2071C6.98043 17.3946 7.23478 17.5 7.5 17.5H14.5C14.7652 17.5 15.0196 17.3946 15.2071 17.2071C15.3946 17.0196 15.5 16.7652 15.5 16.5V5.5C15.5 5.23478 15.3946 4.98043 15.2071 4.79289C15.0196 4.60536 14.7652 4.5 14.5 4.5ZM11 16L9 12H13L11 16ZM9 10L11 6L13 10H9Z"
          fill={color}
        />
      </svg>
    );
  },
);

AccessElevatorIcon.displayName = "AccessElevatorIcon";

export default AccessElevatorIcon;
