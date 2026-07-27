import type { filterButtonsProps, TaskFilter } from "../types/task";

const buttons: { label: TaskFilter }[] = [
  { label: "all" },
  { label: "init" },
  { label: "progress" },
  { label: "completed" },
];

const FilterButtons = ({ onFilterChange }: filterButtonsProps) => {
  return (
    <>
      {buttons.map(({ label }) => (
        <button key={label} onClick={() => onFilterChange(label)}>{label}</button>
      ))}
    </>
  );
};

export default FilterButtons;
