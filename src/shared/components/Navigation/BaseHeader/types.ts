export type Icon = {
  id: string;
  component: React.ReactNode;
  onClick?: () => void;
};

export interface BaseHeaderProps {
  leftIcons?: Icon[];
  rightIcons?: Icon[];
  className?: string;
  children?: React.ReactNode;
  scrollThreshold?: number;
}
