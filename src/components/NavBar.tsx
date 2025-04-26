import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import profilePic from "../assets/profile.jpeg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  let location = useLocation();

  let isMarsDashboard =
    location.pathname.startsWith("/mars-dashboard") || false;

  const navbar = (
    <div className={!menu ? "flex flex-wrap" : "flex flex-col"}>
      {isMarsDashboard ? (
        <>
          <div className={!menu ? "mt-10" : "mt-5 p-5"}>
            <Link
              to="/mars-dashboard/perseverance"
              onClick={() => setMenu(false)}
            >
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                Perseverance
              </div>
            </Link>
          </div>
          <div className={!menu ? "mt-10" : "p-5"}>
            <Link to="/mars-dashboard/curiosity" onClick={() => setMenu(false)}>
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                Curosity
              </div>
            </Link>
          </div>
          <div className={!menu ? "mt-10" : "p-5"}>
            <Link to="/mars-dashboard/spirit" onClick={() => setMenu(false)}>
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                Spirit
              </div>
            </Link>
          </div>
          <div className={!menu ? "mt-10" : "p-5"}>
            <Link
              to="/mars-dashboard/opportunity"
              onClick={() => setMenu(false)}
            >
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                Opportunity
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={!menu ? "mt-10" : "mt-5 p-5"}>
            <Link
              to="https://www.linkedin.com/in/manpreet-singh-5002105a/"
              onClick={() => setMenu(false)}
            >
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                LinkedIn
              </div>
            </Link>
          </div>
          <div className={!menu ? "mt-10" : "p-5"}>
            <Link
              to="https://github.com/manpreet07"
              onClick={() => setMenu(false)}
            >
              <div
                className={
                  !menu
                    ? "flex p-2 text-gray-400 hover:text-blue-400"
                    : "text-black"
                }
              >
                Github
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );

  return (
    <nav className="flex flex-wrap justify-between">
      <div className="flex">
        <div className="mt-5">
          <a href="/" className="flex p-2 text-gray-400 hover:text-blue-400">
            <img
              src={profilePic}
              className="h-20 w-20 rounded-full object-contain"
            />
          </a>
        </div>
      </div>
      <div className="hidden md:block lg:block">{navbar}</div>
      {menu ? (
        <div className="absolute right-0 text-sm mt-5 text-black bg-white hover:text-blue-400 flex flex-col items-center shadow md:hidden">
          <RiCloseLargeLine className="mt-5" onClick={() => setMenu(!menu)} />
          {navbar}
        </div>
      ) : (
        <div className="relative block md:hidden lg:hidden">
          <div className="mt-10" onClick={() => setMenu(!menu)}>
            <FiAlignJustify size={45}>{navbar}</FiAlignJustify>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
