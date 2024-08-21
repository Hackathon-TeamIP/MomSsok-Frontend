import * as React from "react";
import { IconProps } from "./types";

export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
            d="M8.92308 4H5.23077C4.55103 4 4 4.55103 4 5.23077V8.92308C4 9.60281 4.55103 10.1538 5.23077 10.1538H8.92308C9.60281 10.1538 10.1538 9.60281 10.1538 8.92308V5.23077C10.1538 4.55103 9.60281 4 8.92308 4Z"
            fill={color}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7692 4H15.0769C14.3972 4 13.8462 4.55103 13.8462 5.23077V8.92308C13.8462 9.60281 14.3972 10.1538 15.0769 10.1538H18.7692C19.449 10.1538 20 9.60281 20 8.92308V5.23077C20 4.55103 19.449 4 18.7692 4Z"
            fill={color}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.92308 13.8462H5.23077C4.55103 13.8462 4 14.3972 4 15.0769V18.7692C4 19.449 4.55103 20 5.23077 20H8.92308C9.60281 20 10.1538 19.449 10.1538 18.7692V15.0769C10.1538 14.3972 9.60281 13.8462 8.92308 13.8462Z"
            fill={color}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7692 13.8462H15.0769C14.3972 13.8462 13.8462 14.3972 13.8462 15.0769V18.7692C13.8462 19.449 14.3972 20 15.0769 20H18.7692C19.449 20 20 19.449 20 18.7692V15.0769C20 14.3972 19.449 13.8462 18.7692 13.8462Z"
            fill={color}
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

MenuIcon.displayName = "MenuIcon";

export default MenuIcon;
