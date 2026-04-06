import { motion, AnimatePresence } from "framer-motion";

function Preloader({ load }) {
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          id="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fff"
            }}>
              Anuj<span style={{ color: "var(--accent-green)" }}>.</span>
            </div>
            <motion.div
              style={{
                width: 40, height: 2,
                background: "linear-gradient(90deg, var(--accent-green), var(--accent-cyan))",
                margin: "12px auto 0",
                borderRadius: 2
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
