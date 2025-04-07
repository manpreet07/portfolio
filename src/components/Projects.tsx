import { ItemCatalog } from "./ItemCatalog";
import { Dashboard } from "./Dashboard";

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      <Dashboard />
      <ItemCatalog />
    </div>
  );
}
