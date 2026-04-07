import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function AnimatedSection({ children, delay = 0, className, style, viewportMargin = "-60px" }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
