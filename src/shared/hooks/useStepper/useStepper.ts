import { useCallback } from "react";
import { UseStepperProps, UseStepperReturn } from "./types";

export function useStepper({
  setCurrentValue,
  min,
  max,
  step,
}: UseStepperProps): UseStepperReturn {
  const increase = useCallback(() => {
    setCurrentValue((prev) => {
      const newValue = Math.min(prev + step, max);
      return newValue;
    });
  }, [setCurrentValue, step, max]);

  const decrease = useCallback(() => {
    setCurrentValue((prev) => {
      const newValue = Math.max(prev - step, min);
      return newValue;
    });
  }, [setCurrentValue, step, min]);

  return {
    increase,
    decrease,
  };
}
