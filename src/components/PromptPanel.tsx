import React from "react";
import type { Run } from "../types/run";

export type PromptPanelProps = {
  selectedRun: Run;
};

export function PromptPanel({ selectedRun }: PromptPanelProps) {
  const [viewingOriginalText, setViewingOriginalText] = React.useState(false);

  const onClickViewOriginalText = () => {
    setViewingOriginalText((prev) => !prev);
  };

  return (
    <div className="prompt-section">
      <h3 className="pre-icon prompt">Prompt</h3>
      <span className="external-link" onClick={onClickViewOriginalText}>
        {viewingOriginalText ? "Hide" : "View"} original text
      </span>
      <h3>{selectedRun.benchmarkName}</h3>
      <p>{selectedRun.summary}</p>
      {viewingOriginalText && (
        <div className="original-text">
          <div className="pre-icon notepad"></div>
          <div className="original-text-heading">
            <span>Original text</span>|<span>Source document text</span>
          </div>
          <pre className="original-text-content">
            {selectedRun.originalPrompt}
          </pre>
        </div>
      )}
    </div>
  );
}

export default PromptPanel;
