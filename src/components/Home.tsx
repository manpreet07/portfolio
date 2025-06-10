import { Link } from "react-router-dom";
import Skills, { allSkills } from "./Skills";
import { useEffect, useState } from "react";
import { APod } from "../interfaces/APod";
import typescript from "./../assets/ts.svg";
import react from "./../assets/react.svg";
import fastApi from "./../assets/fast-api.png";
import python from "./../assets/py.png";
import vite from "./../assets/vite.svg";
import shopify from "../assets/shopify.svg";
import remix from "../assets/remix.svg";
import prisma from "../assets/prisma.svg";
import postgres from "../assets/postgres.png";
import fly from "../assets/fly.svg";
import { Skill } from "../interfaces/Skill";
import { getAPod } from "../api/getAPod";

const SkillImage = ({ to, src }: Skill) => {
  return (
    <Link to={to}>
      <img src={src} className="flex mt-2 m-1.5 h-6 rounded-sm" />
    </Link>
  );
};

function Home() {
  let [apod, setAPod] = useState<APod>();

  useEffect(() => {
    const fetchAPod = async () => {
      const response = await getAPod();
      if (response) {
        const aPod: APod = response;
        setAPod(aPod);
      }
    };
    fetchAPod();
  }, []);

  return (
    <div className="p-4">
      <div className="text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl p-2">
        Hi, I am Manpreet Singh
      </div>
      <div className="text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl p-2">
        Software Engineer
      </div>
      <div className="text-sm sm:text-xs md:text-sm lg:text-lg xl:text-lg p-2">
        Building scalable web apps and microservices
      </div>
      <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl p-2 mt-10">
        Projects
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
        <div className="p-2">
          <div className="flex text-sm sm:text-xs md:text-sm lg:text-lg xl:text-lg hover:text-blue-400">
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
                    s.src === typescript ||
                    s.src === react ||
                    s.src === fastApi ||
                    s.src === python ||
                    s.src === vite
                )
                .map((mds, index) => (
                  <SkillImage
                    to={mds.to}
                    src={mds.src}
                    name={""}
                    key={index}
                    skillType={mds.skillType}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex text-sm sm:text-xs md:text-sm lg:text-lg xl:text-lg hover:text-blue-400">
            <Link to="">Delivery Sync</Link>
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
            <div className="flex text-sm mt-5 h-auto">
              A custom Shopify embedded app designed for retail merchants (e.g.
              liquor/package stores) to automate menu syncing, inventory
              updates, and order management between Shopify and Uber Eats.
            </div>
            <div className="flex mt-5">
              {allSkills
                .filter(
                  (s) =>
                    s.src === typescript ||
                    s.src === react ||
                    s.src === shopify ||
                    s.src === remix ||
                    s.src === prisma ||
                    s.src === postgres ||
                    s.src === fly
                )
                .map((mds) => (
                  <SkillImage
                    to={mds.to}
                    src={mds.src}
                    name={""}
                    skillType={mds.skillType}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex text-sm sm:text-xs md:text-sm lg:text-lg xl:text-lg hover:text-blue-400">
            <Link to="">Inventory Updater (Coming Soon)</Link>
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
            <div className="flex text-sm mt-5 h-auto">
              Inventory Updater is a custom Shopify app that automates inventory
              management by allowing merchants to upload images of supplier
              invoices. The app uses OCR (Optical Character Recognition) to
              extract product details from the image, then automatically updates
              inventory levels in the Shopify store, eliminating manual data
              entry.
            </div>
            <div className="flex mt-5">
              {allSkills
                .filter(
                  (s) =>
                    s.src === typescript ||
                    s.src === react ||
                    s.src === shopify ||
                    s.src === remix ||
                    s.src === prisma ||
                    s.src === postgres ||
                    s.src === fly
                )
                .map((mds) => (
                  <SkillImage
                    to={mds.to}
                    src={mds.src}
                    name={""}
                    skillType={mds.skillType}
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
