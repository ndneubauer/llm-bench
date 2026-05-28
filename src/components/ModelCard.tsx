import type { ModelRun } from "../types/model-run";

export const ModelCard = (run: ModelRun) => (
  <div className="model-card">
    <div className="model-header">
      <div className="model-identity">
        <img
          className="model-icon"
          src={`/assets/${run.model.icon}`}
          alt={`${run.model.name} icon`}
        />
        <h4>{run.model.name}</h4>
      </div>

      <div className="model-badges">
        {run.isWinner && <p className="winner">Winner</p>}
        <span className={`json-pass ${run.jsonPass ? "pass" : "fail"}`}>
          {run.jsonPass ? "JSON Pass" : "JSON Fail"}
        </span>{" "}
      </div>
    </div>

    <pre className="model-output">{run.output}</pre>

    <div className="metric">
      <span className="pre-icon-small score margin-bottom-12">Score</span>
      <span className="value">{run.score}</span>
      <div className={`ranking ${run.scoreRankingTier}`}>
        {run.scoreRanking}
      </div>
    </div>
    <div className="metric">
      <span className="pre-icon-small latency margin-bottom-12">Latency</span>
      <span className="value">{run.latency}</span>
      <div className={`ranking ${run.latencyRankingTier}`}>
        {run.latencyRanking}
      </div>
    </div>
    <div className="metric">
      <span className="pre-icon-small tokens-per-second margin-bottom-12">
        Tokens/sec
      </span>
      <span className="value">{run.tokensPerSecond}</span>
      <div className={`ranking ${run.tpsRankingTier}`}>{run.tpsRanking}</div>
    </div>
  </div>
);
