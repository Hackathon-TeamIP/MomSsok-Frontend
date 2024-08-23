export type TagProps = {
  backgroundColor?: string;
  textColor?: string;
  leftIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
