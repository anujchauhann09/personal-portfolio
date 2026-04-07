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

const ORBIT_CARDS = [
  { icon: "🚀", value: "7+ Projects",    label: "Built & Deployed" },
  { icon: "⚡", value: "Full Stack",      label: "AI · Backend · Frontend" },
  { icon: "🧠", value: "RAG Systems",     label: "LangChain · Pinecone" },
  { icon: "🏥", value: "InnovLogic",      label: "SWE Intern 2025" },
  { icon: "📦", value: "Agentic AI",      label: "Autonomous Pipelines" },
  { icon: "🎓", value: "MCA",             label: "Graphic Era University" },
];

function OrbitRing() {
  const count = ORBIT_CARDS.length;
  const radius = 210;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        marginTop: -(radius),
        marginLeft: -(radius),
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    >
      {ORBIT_CARDS.map((card, i) => {
        const angle = (i / count) * 360;
        const rad = (angle * Math.PI) / 180;
        const x = radius + radius * Math.cos(rad) - 70;
        const y = radius + radius * Math.sin(rad) - 28;

        return (
          <motion.div
            key={i}
            className="hero-stat-card"
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 140,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <CursorGlow />

        <div className="hero-content">
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
