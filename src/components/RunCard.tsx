export const RunCard = ({
  selected,
  benchmarkName,
  summary,
  icon,
  onClick,
}: {
  selected: boolean;
  benchmarkName: string;
  summary: string;
  icon: string;
  onClick: () => void;
}) => (
  <div
    className={`run-card ${selected ? "selected" : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <div className={`pre-icon ${icon}`}>{icon}</div>
    <div className="details">
      <h4>{benchmarkName}</h4>
      <p>{summary}</p>
    </div>
  </div>
);

export default RunCard;
