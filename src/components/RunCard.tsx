export const RunCard = ({
  selected,
  benchmarkName,
  subtitle,
  icon,
  onClick,
}: {
  selected: boolean;
  benchmarkName: string;
  subtitle: string;
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
      <p>{subtitle}</p>
    </div>
  </div>
);

export default RunCard;
