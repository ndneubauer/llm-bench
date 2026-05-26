import type { Model } from "../types/model";

export const models: Model[] = [
  {
    name: "Gemma 4",
    icon: "gemma4.png",
    isWinner: true,
    jsonPass: true,
    output: `{
  "name": "Acme Corporation",
  "invoice": "INV-2025-0421",
  "total": 1299.50
}`,
    score: 0.96,
    scoreRanking: "Excellent",
    scoreRankingTier: "High",
    latency: 1.28,
    latencyRanking: "Fast",
    latencyRankingTier: "High",
    tokensPerSecond: 121.4,
    tpsRanking: "Very fast",
    tpsRankingTier: "High",
  },
  {
    name: "Qwen 3.5 27B",
    icon: "qwen3.5_27b.png",
    isWinner: false,
    jsonPass: true,
    output: `{
  "name": "Acme Corporation",
  "invoice": "INV-2025-0421",
  "total": 1299.50
}`,
    score: 0.89,
    scoreRanking: "Good",
    scoreRankingTier: "High",
    latency: 2.34,
    latencyRanking: "Moderate",
    latencyRankingTier: "Medium",
    tokensPerSecond: 78.6,
    tpsRanking: "Good",
    tpsRankingTier: "High",
  },
  {
    name: "gpt-oss-20b",
    icon: "gpt-oss-20b.png",
    isWinner: false,
    jsonPass: false,
    output:
      "Customer: Acme Corporation\nInvoice: INV-2025-0421\nTotal: $1299.50\n\nThanks!",
    score: 0.32,
    scoreRanking: "Poor",
    scoreRankingTier: "Low",
    latency: 1.87,
    latencyRanking: "Fast",
    latencyRankingTier: "High",
    tokensPerSecond: 95.3,
    tpsRanking: "Good",
    tpsRankingTier: "High",
  },
];
