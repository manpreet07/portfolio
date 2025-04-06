import { Link } from "react-router-dom";

export function ItemCatalog() {
  return (
    <div className="p-4 inline">
      <div className="flex text-xl">Items Catalog</div>
      <div className="h-50">
        <img src="" />
      </div>
      <div className="flex text-sm mt-5">
        Catalog Item App is integrated with third party user registration and
        authentication that provides a list of items within a variety of
        categories
      </div>
      <div className="flex">
        <div className="ml-2 p-2 h-10 bg-blue-300 rounded-md text-black">
          <Link to="https://nodejs.org/en">React</Link>
        </div>
      </div>
    </div>
  );
}
