import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { PROJECTS } from "../../constants/projects";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <div className="section-wrap" style={{ paddingTop: "8rem" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="section-label">Portfolio</div>
        <h1 className="section-heading">
          Recent <span style={{ color: "var(--accent-green)" }}>Works</span>
        </h1>
        <p className="section-sub">
          A selection of projects I've built — from AI systems to full-stack products.
          Each one shipped, deployed, and real.
        </p>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.title} variants={fadeUp} initial="hidden" animate="show" custom={i}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
