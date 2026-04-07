import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { fadeUp } from "../../utils/animations";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { SKILL_CATEGORIES } from "../../constants/skills";
import { GITHUB_USER } from "../../constants/personal";
import GithubActivity from "./GithubActivity";

const CALENDAR_THEME = {
  dark: ["#111115", "#003d24", "#006b3f", "#00a85e", "#00FF94"],
};

function SkillPill({ name, icon, reactIcon, invert }) {
  return (
    <motion.div className="skill-pill" whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }}>
      {icon && <img src={icon} alt={name} style={invert ? { filter: "invert(1) brightness(2)" } : {}} />}
      {reactIcon && reactIcon}
      {name}
    </motion.div>
  );
}

function About() {
  const width = useWindowWidth();
  const blockSize = width < 576 ? 10 : width < 768 ? 12 : 14;
  const blockMargin = width < 576 ? 3 : 4;
  const fontSize = width < 576 ? 10 : 13;

  return (
    <div className="section-wrap" style={{ paddingTop: "8rem" }}>
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <div className="section-label">About</div>
        <h1 className="section-heading">
          Who I <span style={{ color: "var(--accent-green)" }}>Am</span>
        </h1>
      </motion.div>

      <motion.div className="about-grid" variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}>
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

        <div className="skills-wrap">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <div className="skill-category-label">{cat.label}</div>
              <div className="skill-pills">
                {cat.skills.map((s) => <SkillPill key={s.name} {...s} />)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <GithubActivity />

      <motion.div
        className="gh-calendar-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="section-label" style={{ marginBottom: "1.5rem" }}>Contribution Graph</div>
        <GitHubCalendar
          username={GITHUB_USER}
          blockSize={blockSize}
          blockMargin={blockMargin}
          fontSize={fontSize}
          theme={CALENDAR_THEME}
        />
      </motion.div>
    </div>
  );
}

export default About;
