import { CounterStepper } from "@/shared/components/CounterStepper";

interface GuestInputProps {
  label: string;
  subLabel: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function GuestInput({
  label,
  subLabel,
  value,
  onChange,
}: GuestInputProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="space-y-[6px]">
        <p className="font-bold text-[17px]">{label}</p>
        <p className="text-[#838383] font-medium text-xs">{subLabel}</p>
      </div>
      <CounterStepper value={value} onChange={onChange} />
    </div>
  );
}
