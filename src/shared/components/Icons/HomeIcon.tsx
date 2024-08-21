import * as React from "react";
import { IconProps } from "./types";

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.4843 8.38374V8.22C21.4843 7.45103 22.1006 6.82767 22.8728 6.82767C23.6397 6.82767 24.2614 7.4432 24.2614 8.22V10.8488L26.4604 12.8007C27.2885 13.5357 27.0675 14.1315 25.9689 14.1315H24.2614V25.0003C24.2614 25.5525 23.8037 26 23.266 26H6.74294C6.1932 26 5.74756 25.5539 5.74756 25.0003V14.1315H4.03119C2.9317 14.1315 2.70986 13.5373 3.53968 12.8007L14.2473 3.2963C14.663 2.92727 15.3334 2.92403 15.7528 3.2963L21.4843 8.38374ZM17.7815 16.4139V23.1242H21.4843V16.4139H17.7815Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HomeIcon;
