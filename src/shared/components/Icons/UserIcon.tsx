import * as React from "react";
import { IconProps } from "./types";

export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M20 19H10C7.23858 19 5 21.2386 5 24V26.5H25V24C25 21.2386 22.7614 19 20 19Z"
          fill={color}
        />
        <path
          d="M15 15.5C17.7614 15.5 20 13.2614 20 10.5C20 7.73858 17.7614 5.5 15 5.5C12.2386 5.5 10 7.73858 10 10.5C10 13.2614 12.2386 15.5 15 15.5Z"
          fill={color}
        />
      </svg>
    );
  },
);

UserIcon.displayName = "UserIcon";

export default UserIcon;
