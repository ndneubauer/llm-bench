import { ModelList } from "./ModelList";
import "./App.css";

const title = "LLM Bench";
const models = [
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

function App() {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Local LLM Benchmark Explorer</h2>
      <p>
        A lightweight app for comparing local and open models across responses,
        speed, scoring, and structured-output reliability.
      </p>
      <div className="prompt-section">
        <h3 className="pre-icon prompt">Prompt</h3>
        <span className="external-link">View original text</span>
        <h3>JSON extraction test</h3>
        <p>
          Extract the customer name, invoice number, and total amount from the
          text below. Return valid JSON only with keys: name, invoice, total.
        </p>
      </div>
      <ModelList models={models} />
      <div className="pre-icon-tiny disclaimer">
        All tests run locally on your machine.
      </div>
    </div>
  );
}

export default App;
