import * as React from "react";
import { IconProps } from "./types";

export const GeoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.7143 8.57143C19.7143 11.9983 14.7423 19.3144 12.7815 22.0664C12.3943 22.6098 11.6057 22.6099 11.2185 22.0664C9.25769 19.3144 4.28571 11.9983 4.28571 8.57143C4.28571 6.52548 5.09846 4.56332 6.54517 3.11661C7.99188 1.6699 9.95404 0.857147 12 0.857147C14.0459 0.857147 16.0081 1.6699 17.4548 3.11661C18.9015 4.56332 19.7143 6.52548 19.7143 8.57143Z"
          fill={color}
        />
        <path
          d="M12 11.1429C13.4201 11.1429 14.5714 9.99159 14.5714 8.57143C14.5714 7.15127 13.4201 6 12 6C10.5798 6 9.42856 7.15127 9.42856 8.57143C9.42856 9.99159 10.5798 11.1429 12 11.1429Z"
          fill="white"
        />
      </svg>
    );
  },
);

GeoIcon.displayName = "GeoIcon";

export default GeoIcon;
