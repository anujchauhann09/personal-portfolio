import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ img, title, desc, tags, gh, demo, badge }) {
  return (
    <motion.div
      className="project-card-new"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="project-img-wrap">
        <img src={img} alt={title} loading="lazy" />
        {badge && <span className="project-badge">{badge}</span>}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {gh && (
            <a href={gh} target="_blank" rel="noreferrer" className="project-link github">
              <BsGithub /> Source
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="project-link demo">
              <CgWebsite /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
