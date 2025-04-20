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
import { Skill } from "../interfaces/Skill";

const SkillButton = ({ name, to, src }: Skill) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 m-2 px-3 py-2 bg-button-blue rounded hover:bg-blue-700 transition text-white"
    >
      <img
        src={src}
        alt={name}
        className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded"
      />
      <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </span>
    </Link>
  );
};

export const allSkills: Skill[] = [
  {
    name: "Typescript",
    to: "https://www.typescriptlang.org/",
    src: typescript,
    skillType: "programming language",
  },
  {
    name: "Javascript",
    to: "https://www.javascript.com/",
    src: javascript,
    skillType: "programming language",
  },
  {
    name: "Python",
    to: "https://www.python.org/",
    src: python,
    skillType: "programming language",
  },
  {
    name: "Java",
    to: "https://www.java.com/en/",
    src: java,
    skillType: "programming language",
  },
  {
    name: "C#",
    to: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    src: csharp,
    skillType: "programming language",
  },

  {
    name: "NodeJs",
    to: "https://nodejs.org/en",
    src: nodejs,
    skillType: "web development",
  },
  {
    name: "FastApi",
    to: "https://fastapi.tiangolo.com/",
    src: fastApi,
    skillType: "web development",
  },
  {
    name: "NestJs",
    to: "https://nestjs.com/",
    src: nestjs,
    skillType: "web development",
  },
  {
    name: "React",
    to: "https://react.dev/",
    src: react,
    skillType: "web development",
  },
  {
    name: "ExpressJs",
    to: "https://expressjs.com/",
    src: express,
    skillType: "web development",
  },
  {
    name: "EmberJs",
    to: "https://emberjs.com/",
    src: ember,
    skillType: "web development",
  },
  {
    name: "Vite",
    to: "https://vite.dev/",
    src: vite,
    skillType: "web development",
  },
  {
    name: "TailwindCSS",
    to: "https://tailwindcss.com/plus",
    src: tailwind,
    skillType: "web development",
  },
  {
    name: "Mui",
    to: "https://mui.com/",
    src: mui,
    skillType: "web development",
  },

  {
    name: "PostgresSQL",
    to: "https://www.postgresql.org/",
    src: postgres,
    skillType: "database management",
  },
  {
    name: "SQL Server",
    to: "https://www.microsoft.com/en-us/sql-server",
    src: sqlserver,
    skillType: "database management",
  },
  {
    name: "MySQL",
    to: "https://www.mysql.com/",
    src: mysql,
    skillType: "database management",
  },
  {
    name: "TypeORM",
    to: "https://typeorm.io/",
    src: typeorm,
    skillType: "database management",
  },
  {
    name: "Sequelize",
    to: "https://sequelize.org/",
    src: sequelize,
    skillType: "database management",
  },
  {
    name: "SQLAlchemy",
    to: "https://www.sqlalchemy.org/",
    src: sqla,
    skillType: "database management",
  },
  {
    name: "Google Cloud",
    to: "https://cloud.google.com/",
    src: gcp,
    skillType: "cloud & devops",
  },
  {
    name: "Amazon Web Services",
    to: "https://aws.amazon.com/",
    src: aws,
    skillType: "cloud & devops",
  },
  {
    name: "Firebase",
    to: "https://firebase.google.com/",
    src: firebase,
    skillType: "cloud & devops",
  },
  {
    name: "CircleCI",
    to: "https://circleci.com/",
    src: circleci,
    skillType: "cloud & devops",
  },
  {
    name: "Jenkins",
    to: "https://www.jenkins.io/",
    src: jenkins,
    skillType: "cloud & devops",
  },
  {
    name: "GitHub",
    to: "https://github.com/",
    src: github,
    skillType: "cloud & devops",
  },
];

function Skills() {
  return (
    <div className="flex flex-wrap">
      <div className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-5xl p-2 mt-10">
        Skills
      </div>
      <div className="p-2 mt-5">
        <div className="mb-5">💻 Programming Languages:</div>
        <div className="flex flex-wrap">
          {allSkills
            .filter((s) => s.skillType === "programming language")
            .map((pl) => (
              <SkillButton
                to={pl.to}
                src={pl.src}
                name={pl.name}
                skillType={pl.skillType}
              />
            ))}
        </div>
        <div className="mt-5 mb-5">🌐 Web Development: </div>
        <div className="flex flex-wrap">
          {allSkills
            .filter((s) => s.skillType === "web development")
            .map((pl) => (
              <SkillButton
                to={pl.to}
                src={pl.src}
                name={pl.name}
                skillType={pl.skillType}
              />
            ))}
        </div>
        <div className="flex mb-5 mt-5">🗄️ Database & Data Management: </div>
        <div className="flex flex-wrap">
          {allSkills
            .filter((s) => s.skillType === "database management")
            .map((pl) => (
              <SkillButton
                to={pl.to}
                src={pl.src}
                name={pl.name}
                skillType={pl.skillType}
              />
            ))}
        </div>
        <div className="flex mb-5 mt-5">☁️ Cloud & DevOps:</div>
        <div className="flex flex-wrap">
          {allSkills
            .filter((s) => s.skillType === "cloud & devops")
            .map((pl) => (
              <SkillButton
                to={pl.to}
                src={pl.src}
                name={pl.name}
                skillType={pl.skillType}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
