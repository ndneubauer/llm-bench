export function ModelCard(model: any) {
  return (
    <div className="model-card">
      <img
        src={`/assets/${model.icon}`}
        alt={`${model.name} icon`}
        className="model-icon"
      />
      <h4>{model.name}</h4>
      {model.isWinner && <p className="winner">Winner</p>}
      <span className={`json-pass ${model.jsonPass ? "pass" : "fail"}`}>
        {model.jsonPass ? "JSON Pass" : "JSON Fail"}
      </span>
      <pre className="model-output">{model.output}</pre>
      <div className="metric">
        <span className="pre-icon-small score">Score</span>
        <span className="value">{model.score}</span>
        <div className={`ranking ${model.scoreRankingTier}`}>
          {model.scoreRanking}
        </div>
      </div>
      <div className="metric">
        <span className="pre-icon-small latency">Latency</span>
        <span className="value">{model.latency}</span>
        <div className={`ranking ${model.latencyRankingTier}`}>
          {model.latencyRanking}
        </div>
      </div>
      <div className="metric">
        <span className="pre-icon-small tokens-per-second">Tokens/sec</span>
        <span className="value">{model.tokensPerSecond}</span>
        <div className={`ranking ${model.tpsRankingTier}`}>
          {model.tpsRanking}
        </div>
      </div>
    </div>
  );
}
