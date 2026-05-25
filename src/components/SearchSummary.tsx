export function SearchSummary(props: any) {
  return (
    <div className="search-summary">
      <span className="pre-icon list">
        Showing <strong>{props.count}</strong> of {props.total} results
      </span>
      <span className="pre-icon trophy">
        Best score: <strong>{props.bestScore}</strong>
      </span>
      <span className="pre-icon tick">
        JSON pass rate: <strong>{props.jsonPassRate}%</strong>
      </span>
    </div>
  );
}
