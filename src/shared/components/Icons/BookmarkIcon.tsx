import * as React from "react";
import { IconProps } from "./types";

export const BookmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.7176 24.905C8.16285 25.1933 7.5 24.7907 7.5 24.1656V6.60792C7.5 5.6853 8.31565 5 9.25576 5H20.7442C21.6844 5 22.5 5.6853 22.5 6.60792V24.1656C22.5 24.7907 21.8371 25.1933 21.2824 24.905L15 21.6404L8.7176 24.905Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default BookmarkIcon;
