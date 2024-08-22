export interface DrawerProps {
  setDrawerOpen: (_: boolean) => void;
  children: React.ReactNode;
}

export interface DrawerFilterListProps<T> {
  title: string;
  options: [T, string][];
  selectedOption: string;
  onOptionClick: (option: T) => void;
}
