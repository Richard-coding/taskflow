import type { StatisticsProps } from "../types/task";

const Statistics = ({
  initCount,
  progressCount,
  completedCount,
}: StatisticsProps) => {
  return (
    <div>
      <p>{initCount}</p>
      <p>{progressCount}</p>
      <p>{completedCount}</p>
    </div>
  );
};

export default Statistics;
