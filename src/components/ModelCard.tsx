import type { Model } from "../types/model";

export const ModelCard = (model: Model) => (
  <div className="model-card">
    <div className="model-header">
      <div className="model-identity">
        <img
          className="model-icon"
          src={`/assets/${model.icon}`}
          alt={`${model.name} icon`}
        />
        <h4>{model.name}</h4>
      </div>

      <div className="model-badges">
        {model.isWinner && <p className="winner">Winner</p>}
        <span className={`json-pass ${model.jsonPass ? "pass" : "fail"}`}>
          {model.jsonPass ? "JSON Pass" : "JSON Fail"}
        </span>{" "}
      </div>
    </div>

    <pre className="model-output">{model.output}</pre>

    <div className="metric">
      <span className="pre-icon-small score margin-bottom-12">Score</span>
      <span className="value">{model.score}</span>
      <div className={`ranking ${model.scoreRankingTier}`}>
        {model.scoreRanking}
      </div>
    </div>
    <div className="metric">
      <span className="pre-icon-small latency margin-bottom-12">Latency</span>
      <span className="value">{model.latency}</span>
      <div className={`ranking ${model.latencyRankingTier}`}>
        {model.latencyRanking}
      </div>
    </div>
    <div className="metric">
      <span className="pre-icon-small tokens-per-second margin-bottom-12">
        Tokens/sec
      </span>
      <span className="value">{model.tokensPerSecond}</span>
      <div className={`ranking ${model.tpsRankingTier}`}>
        {model.tpsRanking}
      </div>
    </div>
  </div>
);
