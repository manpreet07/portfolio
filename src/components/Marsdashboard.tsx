import { Link } from "react-router-dom";

export function MarsDashboard() {
  return (
    <div className="p-4 inline">
      <div className="flex text-xl text-fuchsia-100">
        <Link to="/projects/mars-dashboard">Mars Dashboard</Link>
      </div>
      <div className="h-50">
        <img src="" />
      </div>
      <div className="flex text-sm mt-5">
        A web application that retrieves and displays high-resolution images
        captured by NASA’s Mars rovers using the official NASA Mars Rover Photos
        API. Users can explore images by rover (Curiosity, Opportunity, Spirit),
        camera type, and Martian sol (solar day), with responsive design and
        intuitive UI for seamless browsing.
      </div>
      <div className="flex mt-5">
        <div className="p-2 h-10 bg-blue-500 rounded-md">
          <Link to="https://www.typescriptlang.org/">Typescript</Link>
        </div>
        <div className="ml-2 p-2 h-10 bg-blue-300 rounded-md text-black">
          <Link to="https://nodejs.org/en">React</Link>
        </div>
        <div className="ml-2 p-2 h-10 bg-blue-400 rounded-md">
          <Link to="https://nodejs.org/en">Python</Link>
        </div>
        <div className="ml-2 p-2 h-10 bg-blue-500 rounded-md">
          <Link to="https://fastapi.tiangolo.com/">FastApi</Link>
        </div>
      </div>
    </div>
  );
}
