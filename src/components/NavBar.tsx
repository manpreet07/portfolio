import { Link, useLocation } from "react-router-dom";
import { JSX } from "react";

function Navbar() {
  let location = useLocation();

  let navbar: JSX.Element = <div className="flex"></div>;

  if (location.pathname.startsWith("/mars-dashboard")) {
    navbar = (
      <div className="flex flex-row">
        <div className="mt-5">
          <Link to="/mars-dashboard/perseverance">
            <div className="flex p-2 text-gray-400">Perseverance</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/curiosity">
            <div className="flex p-2 text-gray-400">Curosity</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/spirit">
            <div className="flex p-2 text-gray-400">Spirit</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/opportunity">
            <div className="flex p-2 text-gray-400">Opportunity</div>
          </Link>
        </div>
      </div>
    );
  } else {
    navbar = (
      <div className="flex flex-row">
        <div className="flex mt-5">
          <Link to="https://www.linkedin.com/in/manpreet-singh-5002105a/">
            <div className="flex p-2 text-gray-400">LinkedIn</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="https://github.com/manpreet07">
            <div className="flex p-2 text-gray-400">Github</div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav className="flex justify-between">
      <div className="flex">
        <div className="flex m-5">
          <Link to="/" className="flex p-2 text-gray-400">
            Home
          </Link>
        </div>
      </div>
      <div className="flex">{navbar}</div>
    </nav>
  );
}

export default Navbar;
