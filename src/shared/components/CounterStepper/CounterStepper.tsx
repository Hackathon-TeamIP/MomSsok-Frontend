import { CounterStepperProps } from "@/shared/hooks/useStepper/types";
import { useStepper } from "@/shared/hooks/useStepper/useStepper";
import { CircleMinusIcon, CirclePlusIcon } from "../Icons";
import { useEffect, useState } from "react";

export function CounterStepper({
  value,
  min = 0,
  max = 3,
  step = 1,
  onChange,
}: CounterStepperProps) {
  const [currentValue, setCurrentValue] = useState<number>(value);

  const { increase, decrease } = useStepper({
    setCurrentValue,
    min,
    max,
    step,
  });

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    onChange(currentValue);
  }, [currentValue, onChange]);

  return (
    <div className="flex items-center justify-between bg-[#F3F4F6] rounded-[10px] p-[10px] w-[97px] shrink-0">
      <button
        onClick={decrease}
        disabled={currentValue <= min}
        className="cursor-pointer"
        type="button"
      >
        <CircleMinusIcon color="#BCBCBC" />
      </button>
      <span className="text-center max-w-4 text-[15px] font-medium">
        {currentValue}
      </span>
      <button
        onClick={increase}
        disabled={currentValue >= max}
        className="cursor-pointer"
        type="button"
      >
        <CirclePlusIcon color="#BCBCBC" />
      </button>
    </div>
  );
}
