import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
  { label: "Blog", to: null, href: "https://scriptory.vercel.app" },
  { label: "Resume", to: "/resume" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <ScrollProgress />

      <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-brand">
          Anuj<span>.</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              {l.href ? (
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ) : (
                <Link
                  to={l.to}
                  className={location.pathname === l.to ? "active" : ""}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a href="https://github.com/anujchauhann09" target="_blank" rel="noreferrer" className="nav-resume-btn">
              GitHub
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.href ? (
                  <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                ) : (
                  <Link to={l.to}>{l.label}</Link>
                )}
              </motion.div>
            ))}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a href="https://github.com/anujchauhann09" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem" }}>
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/anujchauhann" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}

export default Navbar;
