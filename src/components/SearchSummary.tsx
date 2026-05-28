import type { ModelRun } from "../types/model-run";

type SearchSummaryProps = {
  filteredModels: ModelRun[];
  originalModels: ModelRun[];
};

export const SearchSummary = ({
  filteredModels,
  originalModels,
}: SearchSummaryProps) => (
  <div className="search-summary">
    <span className="summary-item">
      <span className="pre-icon list" />
      <span>
        Showing <strong>{filteredModels.length}</strong> of{" "}
        {originalModels.length} results
      </span>
    </span>
    <span className="summary-item">
      <span className="pre-icon trophy" />
      <span>
        Best score:{" "}
        <strong>
          {Math.max(
            ...filteredModels.map((m: { score: number }) => m.score),
            0,
          )}
        </strong>
      </span>
    </span>
    <span className="summary-item">
      <span className="pre-icon tick" />
      <span>
        JSON pass rate:{" "}
        <strong>
          {filteredModels.length > 0
            ? Math.round(
                (filteredModels.filter((m) => m.jsonPass).length /
                  filteredModels.length) *
                  100,
              )
            : 0}
          %
        </strong>
      </span>
    </span>
  </div>
);
