import type { Run } from "../types/run";
import { RunCard } from "./RunCard";

type RunListProps = {
  onRunSelect: (runId: number) => void;
  selectedId?: number;
  runs: Run[];
};

export const RunSelectionPanel = ({
  selectedId,
  runs,
  onRunSelect,
}: RunListProps) => (
  <div className="runs-panel">
    {runs.map((run) => (
      <RunCard
        key={run.id}
        selected={run.id === selectedId}
        benchmarkName={run.benchmarkName}
        summary={run.summary}
        icon={run.icon}
        onClick={() => onRunSelect(run.id)}
      />
    ))}
  </div>
);

export default RunSelectionPanel;
