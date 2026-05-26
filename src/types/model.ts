export type Model = {
  name: string;
  icon: string;
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
