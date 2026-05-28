import type { ModelRun } from "../types/model-run";
import { ModelCard } from "./ModelCard";

export type ModelListProps = {
  runs: ModelRun[];
};

export const ModelList = ({ runs }: ModelListProps) => (
  <div className="model-list">
    {runs.map((run) => (
      <ModelCard key={run.model.name} {...run} />
    ))}
  </div>
);

export default ModelList;
