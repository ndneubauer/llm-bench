import type { Model } from "./model";

export type ModelRun = {
  model: Model;
  output: string;
  score: number;
  latency: number;
  tokensPerSecond: number;
  jsonPass: boolean;
  isWinner: boolean;
  scoreRanking: string;
  scoreRankingTier: string;
  latencyRanking: string;
  latencyRankingTier: string;
  tpsRanking: string;
  tpsRankingTier: string;
};
