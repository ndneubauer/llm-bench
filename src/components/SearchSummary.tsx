export const SearchSummary = ({
  count,
  total,
  bestScore,
  jsonPassRate,
}: any) => (
  <div className="search-summary">
    <span className="pre-icon list">
      Showing <strong>{count}</strong> of {total} results
    </span>
    <span className="pre-icon trophy">
      Best score: <strong>{bestScore}</strong>
    </span>
    <span className="pre-icon tick">
      JSON pass rate: <strong>{jsonPassRate}%</strong>
    </span>
  </div>
);
