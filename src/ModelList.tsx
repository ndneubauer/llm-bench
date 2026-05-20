import { ModelCard } from "./ModelCard";

export function ModelList({ models }: any) {
  return (
    <div className="model-list">
      {models.map((model: any) => (
        <ModelCard key={model.name} {...model} />
      ))}
    </div>
  );
}
