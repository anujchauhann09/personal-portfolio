import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { NAV_LINKS, NAV_GITHUB_HREF } from "../constants/nav";
import { SOCIAL_LINKS } from "../constants/personal";

function NavLink({ item, pathname }) {
  if (item.href) {
    return <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>;
  }
  return (
    <Link to={item.to} className={pathname === item.to ? "active" : ""}>
      {item.label}
    </Link>
  );
}

function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

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
        <Link to="/" className="nav-brand">Anuj<span>.</span></Link>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <NavLink item={l} pathname={location.pathname} />
            </li>
          ))}
          <li>
            <a href={NAV_GITHUB_HREF} target="_blank" rel="noreferrer" className="nav-resume-btn">
              GitHub
            </a>
          </li>
        </ul>

        <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="nav-mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {NAV_LINKS.map((l, i) => (
              <motion.div key={l.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <NavLink item={l} pathname={location.pathname} />
              </motion.div>
            ))}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem" }}>
                <AiFillGithub />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", fontSize: "1.5rem" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
