import * as React from "react";
import { IconProps } from "./types";

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.3664 18.3616L15.0177 14.0129C16.1644 12.6857 16.8589 10.9502 16.8589 9.05106C16.8589 4.87889 13.5072 1.49667 9.37266 1.49667C5.23816 1.49667 1.88647 4.87889 1.88647 9.05106C1.88647 13.2232 5.23816 16.6054 9.37266 16.6054C10.9352 16.6054 12.386 16.1223 13.5862 15.2961L18.009 19.7189C18.3838 20.0937 18.9915 20.0937 19.3664 19.7189C19.7412 19.3441 19.7412 18.7364 19.3664 18.3616ZM14.9393 9.05105C14.9393 12.1534 12.447 14.6684 9.37264 14.6684C6.29826 14.6684 3.80598 12.1534 3.80598 9.05105C3.80598 5.94867 6.29826 3.43369 9.37264 3.43369C12.447 3.43369 14.9393 5.94867 14.9393 9.05105Z"
          fill={color}
        />
      </svg>
    );
  },
);

SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
