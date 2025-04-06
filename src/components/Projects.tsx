import { ItemCatalog } from "./ItemCatalog";
import { MarsDashboard } from "./Marsdashboard";

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      <MarsDashboard />
      <ItemCatalog />
    </div>
  );
}
