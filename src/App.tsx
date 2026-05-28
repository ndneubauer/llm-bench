import * as React from "react";
import { ModelList } from "./components/ModelList";
import "./App.css";
import { FilterPanel } from "./components/FilterPanel";
import { runs } from "./data/runs";
import { EmptyState } from "./components/EmptyState";
import { SearchSummary } from "./components/SearchSummary";
import { RunSelectionPanel } from "./components/RunSelectionPanel";
import { models } from "./data/models";

function App() {
  const title = "LLM Bench";
  const sortOptions = ["highest-score", "lowest-latency", "fastest-tps"];
  const [searchTerm, setSearchTerm] = React.useState("");
  const [modelFilter, setModelFilter] = React.useState("");
  const [jsonPassFilter, setJsonPassFilter] = React.useState("");
  const [sortOption, setSortOption] = React.useState(sortOptions[0]);
  const [selectedRunId, setSelectedRunId] = React.useState<number>(1);
  const [selectedRun, setSelectedRun] = React.useState(runs[0]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleModelFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModelFilter(event.target.value);
  };

  const handleJsonPassFilter = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setJsonPassFilter(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setModelFilter("");
    setJsonPassFilter("");
    setSortOption(sortOptions[0]);
  };

  const handleRunSelect = (runId: number) => {
    setSelectedRunId(runId);
    setSelectedRun(runs.find((run) => run.id === runId) || runs[0]);
  };

  const filteredModels = selectedRun.runs
    .filter((run) => {
      const matchesSearch =
        run.model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        run.output.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesModelFilter = modelFilter
        ? run.model.name.toLowerCase() === modelFilter.toLowerCase()
        : true;
      const matchesJsonPassFilter = jsonPassFilter
        ? run.jsonPass.toString() === jsonPassFilter
        : true;

      return matchesSearch && matchesModelFilter && matchesJsonPassFilter;
    })
    .sort((a, b) => {
      if (sortOption === "highest-score") {
        return b.score - a.score;
      }
      if (sortOption === "lowest-latency") {
        return a.latency - b.latency;
      }
      if (sortOption === "fastest-tps") {
        return b.tokensPerSecond - a.tokensPerSecond;
      }
      return 0;
    });

  return (
    <div>
      <h1>{title}</h1>
      <h2>Local LLM Benchmark Explorer</h2>
      <p>
        A lightweight app for comparing local and open models across responses,
        speed, scoring, and structured-output reliability.
      </p>
      <RunSelectionPanel
        runs={runs}
        selectedId={selectedRunId}
        onRunSelect={handleRunSelect}
      />
      <div className="prompt-section">
        <h3 className="pre-icon prompt">Prompt</h3>
        <span className="external-link">View original text</span>
        <h3>JSON extraction test</h3>
        <p>
          Extract the customer name, invoice number, and total amount from the
          text below. Return valid JSON only with keys: name, invoice, total.
        </p>
      </div>
      <FilterPanel
        onSearch={handleSearch}
        onModelFilter={handleModelFilter}
        modelFilter={modelFilter}
        onJsonPassFilter={handleJsonPassFilter}
        jsonPassFilter={jsonPassFilter}
        onClearFilters={handleClearFilters}
        onSortChange={handleSort}
        sortOption={sortOption}
        models={models}
      />
      <SearchSummary
        filteredModels={filteredModels}
        originalModels={selectedRun.runs}
      />
      {filteredModels.length === 0 ? (
        <EmptyState />
      ) : (
        <ModelList runs={filteredModels} />
      )}
      <div className="pre-icon-tiny disclaimer">
        All tests run locally on your machine.
      </div>
    </div>
  );
}

export default App;
