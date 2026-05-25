import { ModelCard } from "./ModelCard";

export function ModelList(props: any) {
  const models = props.models;
  return (
    <div className="model-list">
      {models.map((model: any) => (
        <ModelCard key={model.name} model={model} />
      ))}
    </div>
  );
}
