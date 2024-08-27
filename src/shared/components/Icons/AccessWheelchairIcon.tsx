import * as React from "react";
import { IconProps } from "./types";

export const AccessWheelchairIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3749 4.58333C12.3749 5.59586 11.5541 6.41667 10.5416 6.41667C9.52906 6.41667 8.70825 5.59586 8.70825 4.58333C8.70825 3.57081 9.52906 2.75 10.5416 2.75C11.5541 2.75 12.3749 3.57081 12.3749 4.58333ZM11.7601 15.5833C11.3826 16.6514 10.3639 17.4166 9.16658 17.4166C7.6478 17.4166 6.41659 16.1854 6.41659 14.6666C6.41659 13.6488 6.96961 12.76 7.79159 12.2845V10.2931C5.93208 10.8772 4.58325 12.6144 4.58325 14.6666C4.58325 17.198 6.63528 19.25 9.16658 19.25C11.384 19.25 13.2336 17.6754 13.6582 15.5833H11.7601ZM9.16658 7.33333L9.16659 7.79173L9.16659 12.375C9.16659 13.3875 9.98741 14.2084 10.9999 14.2084L15.5833 14.2084L13.8645 18.3333H15.8506L17.2756 14.9135C17.7787 13.7059 16.8915 12.375 15.5833 12.375L12.8332 12.375L12.8332 10.1915L14.1599 10.8548L14.9798 9.21506L13.6329 8.54164C13.0491 8.24973 12.5359 7.83727 12.1262 7.33333H9.16658Z"
          fill={color}
        />
      </svg>
    );
  },
);

AccessWheelchairIcon.displayName = "AccessWheelchairIcon";

export default AccessWheelchairIcon;
