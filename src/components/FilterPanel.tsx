export function FilterPanel(props: any) {
  return (
    <div className="filter-panel">
      <input
        type="text"
        placeholder="Search models..."
        className="search-input"
        onChange={props.onSearch}
      />
      <select
        className="model-select"
        onChange={props.onModelFilter}
        value={props.modelFilter}
      >
        <option key="" value="">
          Filter by model
        </option>
        {props.models.map((model: any) => (
          <option key={model.name} value={model.name}>
            {model.name}
          </option>
        ))}
      </select>
      <select
        className="json-pass-select"
        onChange={props.onJsonPassFilter}
        value={props.jsonPassFilter}
      >
        <option key="" value="">
          Filter by JSON pass
        </option>
        <option key="true" value="true">
          Passed
        </option>
        <option key="false" value="false">
          Failed
        </option>
      </select>
      <select
        className="sort-select"
        onChange={props.onSortChange}
        value={props.sortOption}
      >
        <option key="highest-score" value="highest-score">
          Sort by: Highest score
        </option>
        <option key="lowest-latency" value="lowest-latency">
          Sort by: Lowest latency
        </option>
        <option key="fastest-tps" value="fastest-tps">
          Sort by: Fastest tokens/sec
        </option>
      </select>
      <input
        type="button"
        value="Clear filters"
        className="apply-button pre-icon-small refresh"
        onClick={props.onClearFilters}
      />
    </div>
  );
}
