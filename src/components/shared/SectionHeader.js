import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function SectionHeader({ label, title, accent, sub, animate = "show", initial = "hidden" }) {
  return (
    <motion.div variants={fadeUp} initial={initial} animate={animate} whileInView={animate === "show" ? undefined : animate} viewport={{ once: true, margin: "-80px" }}>
      <div className="section-label">{label}</div>
      <h2 className="section-heading">
        {title}{" "}
        {accent && <span style={{ color: "var(--accent-green)" }}>{accent}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </motion.div>
  );
}

export default SectionHeader;
