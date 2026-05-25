import * as React from "react";
import { ModelList } from "./components/ModelList";
import "./App.css";
import { FilterPanel } from "./components/FilterPanel";
import { models } from "./models";
import { EmptyState } from "./components/EmptyState";
import { SearchSummary } from "./components/SearchSummary";

function App() {
  const title = "LLM Bench";

  const [searchTerm, setSearchTerm] = React.useState("");
  const [modelFilter, setModelFilter] = React.useState("");
  const [jsonPassFilter, setJsonPassFilter] = React.useState("");

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

  const handleClearFilters = () => {
    setSearchTerm("");
    setModelFilter("");
    setJsonPassFilter("");
  };

  const searchedModels = models.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.output.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModelFilter = modelFilter
      ? model.name.toLowerCase() === modelFilter.toLowerCase()
      : true;
    const matchesJsonPassFilter = jsonPassFilter
      ? model.jsonPass.toString() === jsonPassFilter
      : true;

    return matchesSearch && matchesModelFilter && matchesJsonPassFilter;
  });

  return (
    <div>
      <h1>{title}</h1>
      <h2>Local LLM Benchmark Explorer</h2>
      <p>
        A lightweight app for comparing local and open models across responses,
        speed, scoring, and structured-output reliability.
      </p>
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
        models={models}
      />
      <SearchSummary
        count={searchedModels.length}
        total={models.length}
        bestScore={Math.max(...searchedModels.map((m) => m.score), 0)}
        jsonPassRate={
          searchedModels.length > 0
            ? Math.round(
                (searchedModels.filter((m) => m.jsonPass).length /
                  searchedModels.length) *
                  100,
              )
            : 0
        }
      />
      {searchedModels.length === 0 ? (
        <EmptyState />
      ) : (
        <ModelList models={searchedModels} modelFilter={modelFilter} />
      )}
      <div className="pre-icon-tiny disclaimer">
        All tests run locally on your machine.
      </div>
    </div>
  );
}

export default App;
