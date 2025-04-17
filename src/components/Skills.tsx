import { Link } from "react-router-dom";
import nodejs from "./../assets/node.png";
import typescript from "./../assets/ts.svg";
import javascript from "./../assets/js.png";
import java from "./../assets/java.png";
import csharp from "./../assets/csharp2.png";
import postgres from "./../assets/postgres.png";
import nestjs from "./../assets/nestjs.svg";
import react from "./../assets/react.svg";
import express from "./../assets/express.png";
import ember from "./../assets/ember.svg";
import python from "./../assets/py.png";
import fastApi from "./../assets/fast-api.png";
import sqlserver from "./../assets/sqlserver.png";
import mysql from "./../assets/mysql2.png";
import firebase from "./../assets/firebase.svg";
import gcp from "./../assets/gcp.svg";
import aws from "./../assets/aws.png";
import vite from "./../assets/vite.svg";
import tailwind from "./../assets/tailwind.png";
import circleci from "./../assets/circle.png";
import jenkins from "./../assets/jenkins.svg";
import github from "./../assets/git.png";
import mui from "./../assets/mui.svg";
import sqla from "./../assets/sqla.png";
import typeorm from "./../assets/typeorm.png";
import sequelize from "../assets/sequelize.svg";

function Skills() {
  return (
    <div className="flex flex-wrap">
      <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2 mt-10">
        Skills
      </div>
      <div className="p-2 mt-5">
        <div className="mb-5">💻 Programming Languages:</div>
        <div className="flex flex-wrap">
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.typescriptlang.org/ ">
              <div className="flex h-8">
                <img src={typescript} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Typescript</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.javascript.com/">
              <div className="flex h-8">
                <img src={javascript} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Javascript</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.python.org/">
              <div className="flex h-8">
                <img src={python} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Python</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.java.com/en/">
              <div className="flex h-8">
                <img src={java} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Java</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://learn.microsoft.com/en-us/dotnet/csharp/">
              <div className="flex h-8">
                <img src={csharp} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">C#</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-5 mb-5">🌐 Web Development: </div>
        <div className="flex flex-wrap">
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://nodejs.org/en">
              <div className="flex ml-1 h-8">
                <img src={nodejs} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">NodeJs</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://fastapi.tiangolo.com/">
              <div className="flex ml-1 h-8">
                <img src={fastApi} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">FastApi</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://nestjs.com/">
              <div className="flex ml-1 h-8">
                <img src={nestjs} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">NestJs</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://react.dev/">
              <div className="flex ml-1 h-8">
                <img src={react} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">React</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://expressjs.com/">
              <div className="flex ml-1 h-8">
                <img src={express} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">ExpressJs</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://emberjs.com/">
              <div className="flex ml-1 h-8">
                <img src={ember} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">EmberJs</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://vite.dev/">
              <div className="flex ml-1 h-8">
                <img src={vite} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Vite</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://tailwindcss.com/plus">
              <div className="flex ml-1 h-8">
                <img src={tailwind} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Tailwindcss</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://mui.com/">
              <div className="flex ml-1 h-8">
                <img src={mui} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Mui</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex mb-5 mt-5">🗄️ Database & Data Management: </div>
        <div className="flex flex-wrap">
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.postgresql.org/">
              <div className="flex ml-1 h-8">
                <img src={postgres} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">PostgresSQL</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.microsoft.com/en-us/sql-server">
              <div className="flex ml-1 h-8">
                <img src={sqlserver} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">Sql Server</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.mysql.com/">
              <div className="flex ml-1 h-8">
                <img src={mysql} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">MySql</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.mysql.com/">
              <div className="flex ml-1 h-8">
                <img src={typeorm} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">TypeOrm</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://sequelize.org/">
              <div className="flex ml-1 h-8">
                <img src={sequelize} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">Sequelize</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-[#006494] rounded-sm">
            <Link to="https://www.sqlalchemy.org/">
              <div className="flex ml-1 h-8">
                <img src={sqla} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">SQLAlchemy</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex mb-5 mt-5">☁️ Cloud & DevOps:</div>
        <div className="flex flex-wrap">
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://cloud.google.com/">
              <div className="flex ml-1 h-8">
                <img src={gcp} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">Google Cloud</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://firebase.google.com/">
              <div className="flex ml-1 h-8">
                <img src={aws} className="rounded-sm p-1" />
                <div className="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg ml-1 mr-1 mt-1">
                  Amazon Web Services
                </div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://firebase.google.com/">
              <div className="flex ml-1 h-8">
                <img src={firebase} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">Firebase</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://circleci.com/">
              <div className="flex ml-1 h-8">
                <img src={circleci} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">Circleci</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://www.jenkins.io/">
              <div className="flex ml-1 h-8">
                <img src={jenkins} className="rounded-sm p-1" />
                <div className="ml-1 mr-1 mt-1">Jenkins</div>
              </div>
            </Link>
          </div>
          <div className="m-2 p-1 bg-button-blue rounded-sm">
            <Link to="https://github.com/">
              <div className="flex ml-1 h-8">
                <img src={github} className="rounded-sm p-1" />
                <div className="ml-2 mr-2 mt-1">GitHub</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
