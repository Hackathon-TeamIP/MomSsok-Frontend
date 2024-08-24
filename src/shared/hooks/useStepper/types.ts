export type UseStepperProps = {
  setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  step: number;
};

export interface UseStepperReturn {
  increase: () => void;
  decrease: () => void;
}

export type CounterStepperProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (newValue: number) => void;
};
