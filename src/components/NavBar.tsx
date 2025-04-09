import { Link, useLocation } from "react-router-dom";
import git from "./../assets/git.png";
import linkedIn from "./../assets/linkedin.png";
import { JSX } from "react";

function Navbar() {
  let location = useLocation();

  let navbar: JSX.Element = <div></div>;

  if (location.pathname.startsWith("/mars-dashboard")) {
    navbar = (
      <div className="flex">
        <div className="mt-5">
          <Link to="/mars-dashboard/curiosity">
            <div className="flex p-2 h-10 text-gray-400">Curosity</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/spirit">
            <div className="flex p-2 h-10 text-gray-400">Spirit</div>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/mars-dashboard/oppurtunity">
            <div className="flex p-2 h-10 text-gray-400">Opportunity</div>
          </Link>
        </div>
      </div>
    );
  } else {
    navbar = (
      <div className="flex">
        <div className="mt-5">
          <Link to="https://www.linkedin.com/in/manpreet-singh-5002105a/">
            <img src={linkedIn} className="flex p-2 h-10" />
          </Link>
        </div>
        <div className="mt-5">
          <Link to="https://github.com/manpreet07">
            <img src={git} className="flex ml-2 p-2 h-10" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav className="flex justify-between">
      <div className="flex">
        <div className="m-5">
          <Link to="/" className="flex p-2 h-10 text-gray-400">
            Home
          </Link>
        </div>
      </div>
      <div className="flex">{navbar}</div>
    </nav>
  );
}

export default Navbar;
