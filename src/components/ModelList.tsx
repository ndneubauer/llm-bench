import type { Model } from "../types/model";
import { ModelCard } from "./ModelCard";

export type ModelListProps = {
  models: Model[];
};

export const ModelList = ({ models }: ModelListProps) => (
  <div className="model-list">
    {models.map((model) => (
      <ModelCard key={model.name} {...model} />
    ))}
  </div>
);

export default ModelList;
