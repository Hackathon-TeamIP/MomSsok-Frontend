import { DrawerFilterListProps } from "./types";

export const DrawerFilterList = <T extends React.ReactNode>({
  title,
  options,
  selectedOption,
  onOptionClick,
}: DrawerFilterListProps<T>) => {
  return (
    <div className="mx-auto">
      <h2 className="text-[17px] pb-[13px] pt-[5px] text-gray-400 text-center">
        {title}
      </h2>
      <ul>
        {options.map(([key, label]) => (
          <li
            key={key as React.Key}
            className={`p-2 cursor-pointer text-center py-4 text-[17px] ${
              selectedOption === key ? "text-primary" : "text-[#2c2c2c]"
            }`}
            onClick={() => onOptionClick(key)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
