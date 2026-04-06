import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import GithubActivity from "./GithubActivity";

import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Django from "../../Assets/TechIcons/Django.svg";

const skillCategories = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function About() {
  const [calWidth, setCalWidth] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setCalWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <div className="section-wrap" style={{ paddingTop: "8rem" }}>
      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <div className="section-label">About</div>
        <h1 className="section-heading">
          Who I <span style={{ color: "var(--accent-green)" }}>Am</span>
        </h1>
      </motion.div>

      {/* About Grid */}
      <motion.div
        className="about-grid"
        variants={fadeUp} initial="hidden" animate="show"
        transition={{ delay: 0.1 }}
      >
        {/* Text */}
        <div className="about-text">
          <p>
            Hey, I'm <strong>Anuj Chauhan</strong> — a aspiring software engineer from{" "}
            <strong>Uttarakhand, India</strong>, currently pursuing my{" "}
            <strong>MCA at Graphic Era University</strong>.
          </p>
          <p>
            I'm drawn to the intersection of <strong>backend engineering</strong> and{" "}
            <strong>AI systems</strong>. I enjoy building things that are fast, reliable,
            and actually useful — not just technically impressive.
          </p>
          <p>
            My stack spans Python, JavaScript, Django, FastAPI, Node.js, React, and a bunch of
            infra tools. I care about clean architecture, good APIs, and shipping things
            that work in production.
          </p>
          <div className="about-quote">
            "Every problem is an opportunity to build something better."
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Outside of code — gaming 🎮, writing tech blogs ✍️, and exploring new places 🌍
          </p>
        </div>

        {/* Skills */}
        <div className="skills-wrap">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <div className="skill-category-label">{cat.label}</div>
              <div className="skill-pills">
                {cat.skills.map((s) => (
                  <motion.div
                    key={s.name}
                    className="skill-pill"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    {s.icon && (
                      <img
                        src={s.icon}
                        alt={s.name}
                        style={s.invert ? { filter: "invert(1) brightness(2)" } : {}}
                      />
                    )}
                    {s.reactIcon && s.reactIcon}
                    {s.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Activity */}
      <GithubActivity />

      {/* GitHub Calendar */}
      <motion.div
        className="gh-calendar-wrap"
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="section-label" style={{ marginBottom: "1.5rem" }}>Contribution Graph</div>
        <GitHubCalendar
          username="anujchauhann09"
          blockSize={calWidth < 576 ? 10 : calWidth < 768 ? 12 : 14}
          blockMargin={calWidth < 576 ? 3 : 4}
          fontSize={calWidth < 576 ? 10 : 13}
          theme={{
            dark: ["#111115", "#003d24", "#006b3f", "#00a85e", "#00FF94"],
          }}
        />
      </motion.div>
    </div>
  );
}

export default About;
