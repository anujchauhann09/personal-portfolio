import { SiNextdotjs } from "react-icons/si";

import C from "../Assets/TechIcons/C++.svg";
import Javascript from "../Assets/TechIcons/Javascript.svg";
import Node from "../Assets/TechIcons/Node.svg";
import ReactIcon from "../Assets/TechIcons/React.svg";
import Java from "../Assets/TechIcons/Java.svg";
import Python from "../Assets/TechIcons/Python.svg";
import Git from "../Assets/TechIcons/Git.svg";
import Redis from "../Assets/TechIcons/Redis.svg";
import Docker from "../Assets/TechIcons/Docker.svg";
import Mongo from "../Assets/TechIcons/Mongo.svg";
import SQL from "../Assets/TechIcons/SQL.svg";
import Redux from "../Assets/TechIcons/Redux.svg";
import Tailwind from "../Assets/TechIcons/Tailwind.svg";
import Postman from "../Assets/TechIcons/Postman.svg";
import AWS from "../Assets/TechIcons/AWS.svg";
import Kafka from "../Assets/TechIcons/Kafka.svg";
import Django from "../Assets/TechIcons/Django.svg";

export const SKILL_CATEGORIES = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: Python },
      { name: "JavaScript", icon: Javascript },
      { name: "Java", icon: Java },
      { name: "C++", icon: C },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: ReactIcon },
      { name: "Next.js", icon: null, reactIcon: <SiNextdotjs size={16} /> },
      { name: "Redux", icon: Redux },
      { name: "Tailwind CSS", icon: Tailwind },
    ],
  },
  {
    label: "Backend & Infra",
    skills: [
      { name: "Node.js", icon: Node },
      { name: "Django", icon: Django, invert: true },
      { name: "MongoDB", icon: Mongo },
      { name: "PostgreSQL", icon: SQL },
      { name: "Redis", icon: Redis },
      { name: "Docker", icon: Docker },
      { name: "AWS", icon: AWS },
      { name: "Kafka", icon: Kafka },
      { name: "Git", icon: Git },
      { name: "Postman", icon: Postman },
    ],
  },
];

export const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  default: "#8b949e",
};
