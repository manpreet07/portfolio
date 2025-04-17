import { Link } from "react-router-dom";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import axios from "axios";
import { APod } from "../interfaces/APod";
import typescript from "./../assets/ts.svg";
import react from "./../assets/react.svg";
import python from "./../assets/py.png";
import fastApi from "./../assets/fast-api.png";

function Home() {
  let [apod, setAPod] = useState<APod>();

  const apiUrl = import.meta.env.VITE_SPACE_API_URL;

  useEffect(() => {
    const fetchAPod = async () => {
      const response = await axios.get(apiUrl + "/api/v1/apod");
      if (response) {
        const aPod: APod = response.data;
        setAPod(aPod);
      }
    };
    fetchAPod();
  }, []);

  return (
    <div className="flex flex-wrap p-4">
      <div className="flex flex-wrap">
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2">
          Hi, I am Manpreet Singh
        </div>
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2">
          Software Engineer
        </div>
      </div>
      <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2 mt-10">
        Projects
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
        <div className="p-2">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="/mars-dashboard">Mars Dashboard</Link>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={apod?.url} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex text-sm mt-5 h-auto hover:text-blue-400">
              A web application that retrieves and displays high-resolution
              images captured by NASA’s Mars rovers using the official NASA Mars
              Rover Photos API. Users can explore images by rover (Curiosity,
              Opportunity, Spirit), camera type, and Martian sol (solar day).
            </div>
            <div className="flex mt-5">
              <Link to="https://www.typescriptlang.org/">
                <img src={typescript} className="flex mt-2 h-6 rounded-sm" />
              </Link>
              <Link to="https://react.dev/">
                <img src={react} className="flex mt-2 ml-4 h-6" />
              </Link>
              <Link to="https://www.python.org/">
                <img src={python} className="flex mt-2 ml-4 h-6" />
              </Link>
              <Link to="https://fastapi.tiangolo.com/">
                <img src={fastApi} className="flex mt-2 ml-4 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="/projects/item-catalog">Item Catalog (coming soon)</Link>
          </div>
          <img src="" className="w-full h-auto object-fill" />
          <div className="flex flex-col justify-between">
            <Link
              to="/projects/item-catalog"
              className="flex text-sm mt-5 h-30 hover:text-blue-400"
            >
              Catalog Item App is integrated with third party user registration
              and authentication that provides a list of items within a variety
              of categories
            </Link>
            <div className="flex mt-5">
              <Link to="https://www.typescriptlang.org/">
                <img src={typescript} className="flex mt-2 h-6 rounded-sm" />
              </Link>
              <Link to="https://react.dev/">
                <img src={react} className="flex mt-2 ml-4 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="inline">
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2 mt-10">
          Contact
        </div>
        <div className="mt-5 p-2">manpreet1107@gmail.com</div>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
