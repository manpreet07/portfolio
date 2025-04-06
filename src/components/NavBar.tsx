import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="flex">
        <div className="m-5">
          <Link to="/" className="flex p-2 h-10 text-gray-400">
            Home
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="mt-5">
          <Link
            to="https://www.linkedin.com/in/manpreet-singh-5002105a/"
            className="flex p-2 h-10"
          >
            <img src="/linkedIn.png" />
          </Link>
        </div>
        <div className="mt-5">
          <Link to="https://github.com/manpreet07" className="flex p-2 h-10">
            <img src="/git.jpg" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
