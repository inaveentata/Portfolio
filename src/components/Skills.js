import React from "react";
import { ImHtmlFive } from "react-icons/im";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMaterialui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

const skills = [
  {
    id: 1,
    icon: <ImHtmlFive size={65} />,
    skillName: "HTML5",
    color: "text-orange-500",
  },
  {
    id: 2,
    icon: <SiCss3 size={65} />,
    skillName: "CSS3",
    color: "text-sky-700",
  },
  {
    id: 3,
    icon: <SiJavascript size={65} />,
    skillName: "JavaScript",
    color: "text-yellow-500",
  },
  {
    id: 4,
    icon: <SiTypescript size={65} />,
    skillName: "TypeScript",
    color: "text-blue-500",
  },
  {
    id: 5,
    icon: <SiReact size={65} />,
    skillName: "React",
    color: "text-sky-400",
  },
  {
    id: 6,
    icon: <SiRedux size={65} />,
    skillName: "Redux",
    color: "text-violet-500",
  },

  {
    id: 7,
    icon: <FaSass size={65} />,
    skillName: "SASS",
    color: "text-pink-600",
  },
  {
    id: 8,
    icon: <SiTailwindcss size={65} />,
    skillName: "tailwindcss",
    color: "text-sky-500",
  },
  {
    id: 9,
    icon: <SiMaterialui size={65} />,
    skillName: "Material UI",
    color: "text-blue-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" border-b-2 max-w-screen-xl lg:mx-auto p-4"
    >
      <h1 className=" text-4xl my-2">Skills</h1>
      <ul className=" grid place-items-center  grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className=" my-5 cursor-pointer grid place-items-center"
          >
            <span className={`${skill.color}`}>{skill.icon}</span>
            <span className="text-2xl text-center ">{skill.skillName}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
