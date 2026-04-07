import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight, HiCode } from "react-icons/hi";
import myImg from "../../Assets/avatar.png";
import { fadeUp, ORBIT_TRANSITION } from "../../utils/animations";
import { ORBIT_CARDS } from "../../constants/hero";
import { SOCIAL_LINKS } from "../../constants/personal";
import { useCursorGlow } from "../../hooks/useCursorGlow";
import Ticker from "./Ticker";
import Home2 from "./Home2";

const ORBIT_RADIUS = 210;

function OrbitRing() {
  const count = ORBIT_CARDS.length;
  return (
    <motion.div
      style={{
        position: "absolute",
        width: ORBIT_RADIUS * 2,
        height: ORBIT_RADIUS * 2,
        top: "50%",
        left: "50%",
        marginTop: -ORBIT_RADIUS,
        marginLeft: -ORBIT_RADIUS,
      }}
      animate={{ rotate: 360 }}
      transition={ORBIT_TRANSITION}
    >
      {ORBIT_CARDS.map((card, i) => {
        const angle = (i / count) * 360;
        const rad = (angle * Math.PI) / 180;
        const x = ORBIT_RADIUS + ORBIT_RADIUS * Math.cos(rad) - 70;
        const y = ORBIT_RADIUS + ORBIT_RADIUS * Math.sin(rad) - 28;
        return (
          <motion.div
            key={i}
            className="hero-stat-card"
            style={{ position: "absolute", left: x, top: y, width: 140 }}
            animate={{ rotate: -360 }}
            transition={ORBIT_TRANSITION}
          >
            <span className="hero-stat-icon">{card.icon}</span>
            <div>
              <div className="hero-stat-value">{card.value}</div>
              <div className="hero-stat-label">{card.label}</div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function CursorGlow() {
  const { springX, springY } = useCursorGlow();
  return <motion.div className="cursor-glow" style={{ left: springX, top: springY }} />;
}

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <CursorGlow />

        <div className="hero-content">
          <div>
            <motion.div className="hero-tag" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="hero-tag-dot" />
              Available for opportunities
            </motion.div>

            <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Anuj<br />Chauhan
            </motion.h1>

            <motion.div className="hero-title" variants={fadeUp} initial="hidden" animate="show" custom={2}>
              Aspiring Software Engineer
            </motion.div>

            <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="show" custom={3}>
              I build scalable backend systems, AI-powered applications, and full-stack products.
              MCA student at Graphic Era University, focused on clean architecture and real-world impact.
            </motion.p>

            <motion.div className="hero-btns" variants={fadeUp} initial="hidden" animate="show" custom={4}>
              <Link to="/project" className="btn-primary-custom">
                View Projects <HiArrowRight />
              </Link>
              <Link to="/about" className="btn-secondary-custom">
                About Me
              </Link>
            </motion.div>

            <motion.div className="hero-social" variants={fadeUp} initial="hidden" animate="show" custom={5}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={SOCIAL_LINKS.email} aria-label="Email">
                <HiCode />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div style={{ position: "relative", width: 340, height: 340 }}>
              <div className="hero-orb">
                <img src={myImg} alt="Anuj Chauhan" className="hero-avatar" />
              </div>
              <OrbitRing />
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker />
      <Home2 />
    </>
  );
}

export default Home;
