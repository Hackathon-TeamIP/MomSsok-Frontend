"use client";

import {
  UseIntersectionObserverProps,
  useIntersectionObserver,
} from "../../hooks/useIntersectionObserver";
import { SpinnerIcon } from "../Icons";

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({
  children = <SpinnerIcon />,
  ...observerProps
}: Props) => {
  const { ref } = useIntersectionObserver(observerProps);
  return (
    <div ref={ref} className="w-full flex justify-center py-4 px-3">
      <div>{children}</div>
    </div>
  );
};
