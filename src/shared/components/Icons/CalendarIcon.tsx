import * as React from "react";
import { IconProps } from "./types";

export const CalendarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3333 15.0833C11.8396 15.0833 12.25 14.6729 12.25 14.1667C12.25 13.6604 11.8396 13.25 11.3333 13.25C10.8271 13.25 10.4167 13.6604 10.4167 14.1667C10.4167 14.6729 10.8271 15.0833 11.3333 15.0833ZM11.3333 18.2917C11.8396 18.2917 12.25 17.8813 12.25 17.375C12.25 16.8687 11.8396 16.4583 11.3333 16.4583C10.8271 16.4583 10.4167 16.8687 10.4167 17.375C10.4167 17.8813 10.8271 18.2917 11.3333 18.2917ZM12.25 20.5833C12.25 21.0896 11.8396 21.5 11.3333 21.5C10.8271 21.5 10.4167 21.0896 10.4167 20.5833C10.4167 20.0771 10.8271 19.6667 11.3333 19.6667C11.8396 19.6667 12.25 20.0771 12.25 20.5833ZM7.66667 18.2917C8.17293 18.2917 8.58333 17.8813 8.58333 17.375C8.58333 16.8687 8.17293 16.4583 7.66667 16.4583C7.16041 16.4583 6.75 16.8687 6.75 17.375C6.75 17.8813 7.16041 18.2917 7.66667 18.2917ZM8.58333 20.5833C8.58333 21.0896 8.17293 21.5 7.66667 21.5C7.16041 21.5 6.75 21.0896 6.75 20.5833C6.75 20.0771 7.16041 19.6667 7.66667 19.6667C8.17293 19.6667 8.58333 20.0771 8.58333 20.5833ZM15 15.0833C15.5063 15.0833 15.9167 14.6729 15.9167 14.1667C15.9167 13.6604 15.5063 13.25 15 13.25C14.4937 13.25 14.0833 13.6604 14.0833 14.1667C14.0833 14.6729 14.4937 15.0833 15 15.0833ZM15.9167 17.375C15.9167 17.8813 15.5063 18.2917 15 18.2917C14.4937 18.2917 14.0833 17.8813 14.0833 17.375C14.0833 16.8687 14.4937 16.4583 15 16.4583C15.5063 16.4583 15.9167 16.8687 15.9167 17.375ZM18.6667 18.75C19.4261 18.75 20.0417 18.1344 20.0417 17.375C20.0417 16.6156 19.4261 16 18.6667 16C17.9073 16 17.2917 16.6156 17.2917 17.375C17.2917 18.1344 17.9073 18.75 18.6667 18.75ZM15.9167 20.5833C15.9167 21.0896 15.5063 21.5 15 21.5C14.4937 21.5 14.0833 21.0896 14.0833 20.5833C14.0833 20.0771 14.4937 19.6667 15 19.6667C15.5063 19.6667 15.9167 20.0771 15.9167 20.5833ZM18.6667 15.0833C19.1729 15.0833 19.5833 14.6729 19.5833 14.1667C19.5833 13.6604 19.1729 13.25 18.6667 13.25C18.1604 13.25 17.75 13.6604 17.75 14.1667C17.75 14.6729 18.1604 15.0833 18.6667 15.0833ZM19.5833 20.5833C19.5833 21.0896 19.1729 21.5 18.6667 21.5C18.1604 21.5 17.75 21.0896 17.75 20.5833C17.75 20.0771 18.1604 19.6667 18.6667 19.6667C19.1729 19.6667 19.5833 20.0771 19.5833 20.5833ZM22.3333 15.0833C22.8396 15.0833 23.25 14.6729 23.25 14.1667C23.25 13.6604 22.8396 13.25 22.3333 13.25C21.8271 13.25 21.4167 13.6604 21.4167 14.1667C21.4167 14.6729 21.8271 15.0833 22.3333 15.0833ZM23.25 17.375C23.25 17.8813 22.8396 18.2917 22.3333 18.2917C21.8271 18.2917 21.4167 17.8813 21.4167 17.375C21.4167 16.8687 21.8271 16.4583 22.3333 16.4583C22.8396 16.4583 23.25 16.8687 23.25 17.375ZM24.5652 22.1429C24.5652 22.9324 23.9234 23.5714 23.1304 23.5714H6.86957C6.07661 23.5714 5.43478 22.9324 5.43478 22.1429V11.1905H24.5652V22.1429ZM23.6087 5H6.3913C5.07035 5 4 6.06667 4 7.38095V22.619C4 23.9343 5.07035 25 6.3913 25H23.6087C24.9287 25 26 23.9343 26 22.619V7.38095C26 6.06667 24.9287 5 23.6087 5Z"
          fill={color}
        />
      </svg>
    );
  },
);

CalendarIcon.displayName = "CalendarIcon";

export default CalendarIcon;
