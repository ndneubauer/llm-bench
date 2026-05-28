import type { ModelRun } from "./model-run";

export type Run = {
  id: number;
  benchmarkName: string;
  subtitle: string;
  summary: string;
  originalPrompt: string;
  icon: string;
  runs: ModelRun[];
};
