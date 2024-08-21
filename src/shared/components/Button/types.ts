export type ButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
