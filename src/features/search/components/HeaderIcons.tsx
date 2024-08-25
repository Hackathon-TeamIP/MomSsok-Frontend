"use client";

import React from "react";
import CurrentLocationButton from "@/features/main/components/CurrentLocationButton";
import ArrowLeftIcon from "@/shared/components/Icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";

const LeftIcons = () => {
  const router = useRouter();

  return (
    <ArrowLeftIcon
      onClick={router.back}
      className="w-6 h-6 opacity-50 cursor-pointer"
    />
  );
};

const RightIcons = () => <CurrentLocationButton />;

export { LeftIcons, RightIcons };
