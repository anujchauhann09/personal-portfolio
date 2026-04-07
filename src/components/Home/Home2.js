import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { EXPERIENCES } from "../../constants/experience";

function Home2() {
  return (
    <section style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border)" }}>
      <div className="section-wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <div className="section-label">Experience</div>
          <h2 className="section-heading">
            WORK <span style={{ color: "var(--accent-green)" }}>⚡</span>
          </h2>
          <p className="section-sub">
            Building real systems, shipping real products. Here's where I've been putting in the work.
          </p>
        </motion.div>

        <div className="exp-grid">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-duration">{exp.duration}</div>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-metrics">
                {exp.metrics.map((m) => (
                  <span key={m} className="exp-metric">{m}</span>
                ))}
              </div>
              <div className="exp-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home2;
