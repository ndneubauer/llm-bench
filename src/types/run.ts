import type { ModelRun } from "./model-run";

export type Run = {
  id: number;
  benchmarkName: string;
  summary: string;
  icon: string;
  runs: ModelRun[];
};
