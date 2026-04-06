import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight, HiCode } from "react-icons/hi";
import myImg from "../../Assets/avatar.png";
import Ticker from "./Ticker";
import Home2 from "./Home2";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <CursorGlow />

        <div className="hero-content">
          {/* Left */}
          <div>
            <motion.div
              className="hero-tag"
              variants={fadeUp} initial="hidden" animate="show" custom={0}
            >
              <span className="hero-tag-dot" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="hero-name"
              variants={fadeUp} initial="hidden" animate="show" custom={1}
            >
              Anuj
              <br />
              Chauhan
            </motion.h1>

            <motion.div
              className="hero-title"
              variants={fadeUp} initial="hidden" animate="show" custom={2}
            >
              Aspiring Software Engineer
            </motion.div>

            <motion.p
              className="hero-desc"
              variants={fadeUp} initial="hidden" animate="show" custom={3}
            >
              I build scalable backend systems, AI-powered applications, and
              full-stack products. MCA student at Graphic Era University,
              focused on clean architecture and real-world impact.
            </motion.p>

            <motion.div
              className="hero-btns"
              variants={fadeUp} initial="hidden" animate="show" custom={4}
            >
              <Link to="/project" className="btn-primary-custom">
                View Projects <HiArrowRight />
              </Link>
              <Link to="/about" className="btn-secondary-custom">
                About Me
              </Link>
            </motion.div>

            <motion.div
              className="hero-social"
              variants={fadeUp} initial="hidden" animate="show" custom={5}
            >
              <a href="https://github.com/anujchauhann09" target="_blank" rel="noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/anujchauhann" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:heyanujchauhan@gmail.com" aria-label="Email">
                <HiCode />
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <div className="hero-orb">
                <img src={myImg} alt="Anuj Chauhan" className="hero-avatar" />
              </div>

              <motion.div
                className="hero-stat-card"
                style={{ position: "absolute", top: "8%", right: "-140px" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="hero-stat-icon">🚀</span>
                <div>
                  <div className="hero-stat-value">7+ Projects</div>
                  <div className="hero-stat-label">Built & Deployed</div>
                </div>
              </motion.div>

              <motion.div
                className="hero-stat-card"
                style={{ position: "absolute", bottom: "12%", left: "-150px" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="hero-stat-icon">⚡</span>
                <div>
                  <div className="hero-stat-value">Full Stack</div>
                  <div className="hero-stat-label">AI · Backend · Frontend</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker />
      <Home2 />
    </>
  );
}

function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="cursor-glow"
      style={{ left: springX, top: springY }}
    />
  );
}

export default Home;
