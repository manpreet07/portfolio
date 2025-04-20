import { Link } from "react-router-dom";
import Skills, { allSkills } from "./Skills";
import { useEffect, useState } from "react";
import axios from "axios";
import { APod } from "../interfaces/APod";
import typescript from "./../assets/ts.svg";
import react from "./../assets/react.svg";
import fastApi from "./../assets/fast-api.png";
import { Skill } from "../interfaces/Skill";

const SkillImage = ({ to, src }: Skill) => {
  return (
    <Link to={to}>
      <img src={src} className="flex mt-2 m-1.5 h-6 rounded-sm" />
    </Link>
  );
};

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
      <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-4xl p-2 mt-10">
        Projects
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
        <div className="p-2">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="/mars-dashboard">Mars Dashboard</Link>
          </div>
          <div className="mt-5 rounded-lg overflow-hidden aspect-[16/9]">
            <Link to="/mars-dashboard">
              <img
                src={apod?.url}
                className="w-full h-full object-cover aspect-square"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex text-sm mt-5 h-auto">
              A web application that retrieves and displays high-resolution
              images captured by NASA’s Mars rovers using the official NASA Mars
              Rover Photos API. Users can explore images by rover (Perseverance,
              Curiosity, Opportunity, and Spirit), camera type, and Martian sol
              (solar day).
            </div>
            <div className="flex mt-5">
              {allSkills
                .filter(
                  (s) =>
                    s.src === typescript || s.src === react || s.src === fastApi
                )
                .map((mds) => (
                  <SkillImage
                    to={mds.to}
                    src={mds.src}
                    name={""}
                    skillType={"programming language"}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex text-2xl hover:text-blue-400">
            <Link to="">(coming soon)</Link>
          </div>
          <div className="mt-5 rounded-lg overflow-hidden aspect-[16/9]">
            <Link to="">
              <img
                src=""
                className="w-full h-full object-cover aspect-square"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex text-sm mt-5 h-auto"></div>
            <div className="flex mt-5">
              {allSkills
                .filter((s) => s.src === typescript && s.src === react)
                .map((mds) => (
                  <SkillImage
                    to={mds.to}
                    src={mds.src}
                    name={""}
                    skillType={"programming language"}
                  />
                ))}
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
