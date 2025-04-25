import { Link, useLocation } from "react-router-dom";
import { JSX } from "react";

function Navbar() {
  let location = useLocation();

  let navbar: JSX.Element = <div></div>;

  if (location.pathname.startsWith("/mars-dashboard")) {
    navbar = (
      <div className="flex flex-wrap">
        <div className="mt-5">
          <Link to="/mars-dashboard/perseverance">
            <div className="flex p-2 text-gray-400 hover:text-blue-400">
              Perseverance
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/curiosity">
            <div className="flex p-2 text-gray-400 hover:text-blue-400">
              Curosity
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/spirit">
            <div className="flex p-2 text-gray-400 hover:text-blue-400">
              Spirit
            </div>
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
      <div className="flex flex-wrap">
        <div className="mt-5">
          <Link to="https://www.linkedin.com/in/manpreet-singh-5002105a/">
            <div className="flex p-2 text-gray-400 hover:text-blue-400">
              LinkedIn
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="https://github.com/manpreet07">
            <div className="flex p-2 text-gray-400 hover:text-blue-400">
              Github
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav className="flex flex-wrap justify-start md:justify-between lg:justify-between">
      <div className="flex">
        <div className="mt-5">
          <a href="/" className="flex p-2 text-gray-400 hover:text-blue-400">
            Home
          </a>
        </div>
      </div>
      {navbar}
    </nav>
  );
}

export default Navbar;
