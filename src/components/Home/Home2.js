import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "InnovLogic Services",
    duration: "Feb 2025 – Jul 2025",
    desc: "Built secure REST APIs with FastAPI (JWT, RBAC, OpenAPI) handling 10K+ daily requests. Designed an event-driven EHR→Kafka→Mirth pipeline improving message delivery by 33%. Implemented HL7 parsing and CRM integration for clinical data interoperability. Containerized services with Docker.",
    metrics: ["25% Faster Response", "10K+ Daily Requests", "33% Better Reliability", "30% Fewer Parse Errors"],
    tags: ["FastAPI", "Django", "Kafka", "Mirth Connect", "HL7", "Docker", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2023 – Present",
    desc: "Shipped production-grade apps across AI, job portals, and file processing. Highlights: AI tutor with LLM APIs, file compression platform cutting size by 40%, and a job portal with role-based dashboards improving API response by 20%.",
    metrics: ["40% File Size Reduction", "20% API Speedup", "7+ Projects Shipped"],
    tags: ["Next.js", "Node.js", "Django", "FastAPI", "PostgreSQL", "Redis", "LLM"],
  },
];

function Home2() {
  return (
    <section style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid var(--border)" }}>
      <div className="section-wrap">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-heading">
            WORK <span style={{ color: "var(--accent-green)" }}>⚡</span>
          </h2>
          <p className="section-sub">
            Building real systems, shipping real products. Here's where I've been putting in the work.
          </p>
        </motion.div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
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
